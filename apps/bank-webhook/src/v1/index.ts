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
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    id: paymentInformation.userId
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
                }
            }),
            prisma.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    onRampStatus: "Success",
                    upatedAt: new Date()
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
            prisma.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    onRampStatus: "Failure",
                    upatedAt: new Date()
                }
            });
        }
        catch{
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
        const update = await prisma.onRampTransaction.update({
            where: {
                token: data.token
            },
            data: {
                onRampStatus: "Failure",
                upatedAt: new Date()
            }
        });
        res.json({ message: "recorded" });
    }
    catch (err) {
        console.error("Failed to update payment status to \"Failed\"", err);
        res.status(500).json({ message: "Failed to record the failed payment" })
    }

})


export default v1Router