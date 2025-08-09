import { BankTransferRequestSchema } from "@powerpaywallet/schemas/client";
import { NextRequest, NextResponse } from "next/server";

const BANK_SECRET = process.env.BANK_SECRET!;
const TRANSFER_SUCCESS_WEBHOOK_URL = process.env.TRANSFER_SUCCESS_WEBHOOK_URL!;
const TRANSFER_FAILURE_WEBHOOK_URL = process.env.TRANSFER_FAILURE_WEBHOOK_URL!;

export const POST = async (req: NextRequest) => {
    try {
        const auth = req.headers.get("Authorization")?.replace("Bearer ", "");
        if (!auth || auth !== BANK_SECRET) {
            return NextResponse.json({
                message: "Unauthorized"
            }, {
                status: 401
            });
        }

        const body = await req.json();

        const { success } = BankTransferRequestSchema.safeParse(body);

        if (!success) {
            return NextResponse.json({
                message: "Invalid Request Parameters"
            }, {
                status: 406
            })
        }

        const token = generateTransferToken();

        //In Real Bank API it will verify ids and tokens and then process the transfer accordingly
        //Sine this is just mock bank api we process it right away and send a request to webhook (if error then refund money to user and if success change status of transaction)
        scheduleTask(token, async () => {
            try {
                // Keeping a 1/10 chance of a transfer failing
                if (Math.random() < 0.9) {
                    sendRequest(TRANSFER_SUCCESS_WEBHOOK_URL, token);
                }
                else {
                    sendRequest(TRANSFER_FAILURE_WEBHOOK_URL, token);
                }
            }
            catch (err) {
                console.log(err);
                sendRequest(TRANSFER_FAILURE_WEBHOOK_URL, token);
            }
        });

        return NextResponse.json({
            token
        });

    }
    catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 500
        })
    }
}

function generateTransferToken(length = 24) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = 'tfr_tok_';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

async function sendRequest(url: string, token: string) {
    await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            token
        }),
        headers: {
            "Authorization": process.env.WEBHOOK_SECRET || "",
            "Content-Type": "application/json"
        }
    })
}

//delay logic
const scheduled = new Set();

function scheduleTask(id: string, fn: () => void) {
    if (scheduled.has(id)) return;

    scheduled.add(id);

    const delay = Math.floor(Math.random() * 2 + 1) * 60 * 1000;
    setTimeout(() => {
        fn();
        scheduled.delete(id);
    }, delay);
}