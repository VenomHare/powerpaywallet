import express from "express";
import dotenv from  "dotenv";
import { prisma } from "@powerpaywallet/db/client";
import { hdfcWebhookRequestSchema } from "@powerpaywallet/schemas/webhook"

dotenv.config();
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json())

app.post("/hdfcWebhook", async(req, res) => {

    const { success } = hdfcWebhookRequestSchema.safeParse(req.body);

    if (!success){
        res.status(411).json({
            message:"Invalid Parameters"
        })
        return;
    }

    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
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
                    onRampStatus: "Success"
                }
            })
        ]);

        res.json({
            message: "captured"
        });
    }
    catch(error)
    {
        console.log(error);
        try {
            prisma.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    onRampStatus: "Failure"
                }
            });
        }
        catch(err)
        {
            console.error("Failed to update payment status to \"Failed\"")
        }
        res.status(411).json({
            message: "Error while processing Webhook Request"
        })
    }
})

app.listen(PORT, ()=>{
    console.log("Webhook is running on port "+PORT);
})