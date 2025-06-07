import express, { Router } from "express";
import dotenv from "dotenv";
import { prisma } from "@powerpaywallet/db/client";
import { MockPaymentSchema } from "@powerpaywallet/schemas/webhook"
import { mockPowerPayRequestValidation } from "./middleware";

dotenv.config();
const PORT = process.env.WEBHOOK_PORT || 3002;

const app = express();
app.use(express.json());
app.use((req, _, next) => {
    console.log([req.method, req.url, JSON.stringify(req.body)].join(" "));
    next();
})


const v1Router = Router();
v1Router.post("/mock/powerpay/success", mockPowerPayRequestValidation, async (req, res) => {

    console.log(req.body);
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
        console.log(error);
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
        catch (err) {
            console.error("Failed to update payment status to \"Failed\"", err);
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
        console.log(update);
        res.json({ message: "recorded" });
    }
    catch (err) {
        console.error("Failed to update payment status to \"Failed\"", err);
        res.status(500).json({ message: "Failed to record the failed payment" })
    }

})

app.use("/v1", v1Router);
app.listen(PORT, () => {
    console.log("Webhook is running on port " + PORT);
})
