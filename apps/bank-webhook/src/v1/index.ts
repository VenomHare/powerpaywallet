import { MockPaymentSchema } from "@powerpaywallet/schemas/webhook";
import { mockPowerPayRequestValidation } from "../middleware";
import { prisma } from "@powerpaywallet/db/client";
import { Router } from "express";

const v1Router: Router = Router();
v1Router.post("/mock/powerpay/success", mockPowerPayRequestValidation, async (req, res) => {

    const { success, data, error } = MockPaymentSchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            message: "Invalid Parameters",
            error
        })
        return;
    }

    const paymentInformation = {
        token: data.token,
        userId: data.user_identifier,
        amount: data.amount
    }

    try {
        const tnx = await prisma.transactions.findUnique({
            where: {
                token: paymentInformation.token
            }
        })

        if (!tnx) {
            res.status(404).json({
                message: "Transaction Not Found"
            })
            return;
        }

        if (tnx.status !== "Processing") {
            res.status(409).json({
                message: "Transaction already Processed",
                token: paymentInformation.token
            })
            return;
        }

        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: paymentInformation.userId
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
                }
            }),
            prisma.transactions.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success",
                    upatedAt: new Date().toISOString()
                }
            })
        ]);

        res.json({
            message: "captured"
        });
    }
    catch (error) {

        // Sending a 411 status code should tell bank server that payment has failed and start process for refunding money (some bank server may hit again after a interval)

        console.log(error);
        // Just try to update payment status or it will automatically fail after 24 hours (from actions)  
        try {
            prisma.transactions.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Failure",
                    upatedAt: new Date().toISOString()
                }
            });
        }
        catch {
            // If its Database Error it will fail here as well
        }
        res.status(411).json({
            message: "Error while processing Webhook Request"
        })
    }
})

v1Router.post("/mock/powerpay/failure", mockPowerPayRequestValidation, async (req, res) => {

    const { success, data } = MockPaymentSchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            message: "Invalid Parameters"
        })
        return;
    }

    try {
        await prisma.transactions.update({
            where: {
                token: data.token
            },
            data: {
                status: "Failure",
                upatedAt: new Date().toISOString()
            }
        });
        res.json({ message: "recorded" });
    }
    catch (err) {
        console.error("Failed to update payment status to \"Failed\"", err);
        res.status(500).json({ message: "Failed to record the failed payment" })
    }

})

v1Router.post("/mock/transfer/success", mockPowerPayRequestValidation, async (req, res) => {
    try {
        const { token } = req.body;

        if (token == undefined || typeof token !== "string") {
            res.status(411).json({
                message: "Invalid Parameters",
            })
            return
        }
        try {
            await prisma.$transaction(async (tnx) => {
                const withdrawalData = await tnx.bankWithdrawals.findUnique({ where: { token } });
                if (withdrawalData == undefined) {
                    throw new Error("NOT_FOUND");
                }
                await tnx.$queryRaw`SELECT * FROM balance WHERE "userId" = ${withdrawalData.userId} FOR UPDATE`;

                await tnx.balance.update({
                    where: {
                        userId: withdrawalData.userId
                    },
                    data: {
                        locked: {
                            decrement: withdrawalData.amount
                        }
                    }
                })

                await tnx.transactions.update({
                    where: {
                        token
                    },
                    data: {
                        status: "Success",
                        upatedAt: new Date().toISOString()
                    }
                })
                await tnx.bankWithdrawals.update({
                    where: { token },
                    data: {
                        status: "Success",
                        updatedAt: new Date().toISOString()
                    }
                });

            })

            res.json({
                message: "recorded"
            })
        }
        catch (error: any) {
            if (error.message == "NOT_FOUND") {
                res.status(404).json({
                    message: "Transfer Not Found"
                })
                return;
            }
            else {
                throw error
            }
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to record the failed transfer" })
    }
})

v1Router.post("/mock/transfer/failure", mockPowerPayRequestValidation, async (req, res) => {
    try {
        const { token } = req.body;

        if (token == undefined || typeof token !== "string") {
            res.status(411).json({
                message: "Invalid Parameters",
            })
            return
        }
        try {

            await prisma.$transaction(async (tnx) => {
                const withdrawalData = await tnx.bankWithdrawals.findUnique({ where: { token } });
                if (withdrawalData == undefined) {
                    console.log("Withdrawal Data not found");
                    throw new Error("NOT_FOUND");
                }
                await tnx.$queryRaw`SELECT * FROM balance WHERE "userId" = ${withdrawalData.userId} FOR UPDATE`;

                await tnx.balance.update({
                    where: {
                        id: withdrawalData.userId
                    },
                    data: {
                        amount: {
                            increment: withdrawalData.amount
                        },
                        locked: {
                            decrement: withdrawalData.amount
                        }
                    }
                })

                await tnx.transactions.update({
                    where: {
                        token
                    },
                    data: {
                        status: "Failure",
                        upatedAt: new Date().toISOString()
                    }
                })

                await tnx.transactions.create({
                    data: {
                        status: "Success",
                        userId: withdrawalData.userId,
                        statement: `Refund for Request wtb_${withdrawalData.id}`,
                        token: `rfd_wtb_${withdrawalData.id}`,
                        provider: "POWERPAY_MOCKBANK",
                        amount: withdrawalData.amount,
                        transactionType: "Credit",
                    }
                });

                await tnx.bankWithdrawals.update({
                    where: { token },
                    data: {
                        status: "Failure",
                        updatedAt: new Date().toISOString()
                    }
                });

            })

            res.json({
                message: "recorded"
            })
        }
        catch (error: any) {
            if (error.message == "NOT_FOUND") {
                res.status(404).json({
                    message: "Transfer Not Found"
                })
                return;
            }
            else {
                throw error
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to record the failed transfer" })
    }
})


export default v1Router;