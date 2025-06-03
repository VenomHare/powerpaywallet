import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../../../../../lib/auth";
import { MockPaymentTokenSchema } from "@powerpaywallet/schemas/webhook"
import { addFundsRequest } from "@powerpaywallet/schemas/client"
import axios, { AxiosError } from "axios";
import { getTokenURL } from "../../../../../lib/utils";
import { prisma } from "@powerpaywallet/db/client";

const BANK_SECRET = process.env.BANK_SECRET;

export const POST = async (req: NextRequest) => {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({
            message: "Unauthorized"
        }, {
            status: 403
        })
    }
    session.user.id = parseInt(session?.user.id);

    try {
        const body = await req.json();
        const { success, data } = addFundsRequest.safeParse(body);

        if (!success) {
            return NextResponse.json({
                message: "Invalid Request"
            }, {
                status: 406
            });
        }

        try {
            const body: MockPaymentTokenSchema = {
                user_identifier: session?.user.id,
                amount: data.amount
            }

            if (!BANK_SECRET) {
                throw new Error("[ENV VARS]: BANK SECRET NOT FOUNT");
            }

            const req = await axios.post(getTokenURL(data.provider), body, {
                headers: {
                    Authorization: `Bearer ${BANK_SECRET}`
                }
            })

            await prisma.onRampTransaction.create({
                data : {
                    token: req.data.token,
                    provider: data.provider,
                    userId: session.user.id,
                    onRampStatus: "Processing",
                    amount: data.amount
                }
            })

            return NextResponse.json({
                url: req.data.url
            })
        }
        catch (err) {
            if (err instanceof AxiosError) {
                return NextResponse.json({
                    "error": "Bad Gateway",
                    "message": "Bank server did not respond successfully.",
                    "suggestion": "Please try again later or contact support if the issue persists."
                }, {
                    status: 502
                })
            }
            else {
                throw err
            }
        }

    }
    catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong",
        }, {
            status: 500
        });
    }
}

export const GET = () => {
    return NextResponse.json({ messsage: "Working" });
}