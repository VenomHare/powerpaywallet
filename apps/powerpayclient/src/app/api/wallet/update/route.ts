import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";

export const GET = async (): Promise<NextResponse> => {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    try {
        //type casting string to number
        session.user.id = parseInt(session.user.id);

        const balance = await prisma.balance.findUnique({
            where: {
                userId: session.user.id
            }
        });
        if (!balance) {
            return NextResponse.json({ error: 'Wallet Account not Found' }, {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        const transaction = await prisma.onRampTransaction.findMany({
            where: {
                userId: session.user.id
            }
        });

        const response = {
            balance: {
                available: balance.amount,
                locked: balance.locked
            },
            transactions: transaction.map(t=> ({
                id: t.id,
                time: t.startTime,
                amount: t.amount,
                status: t.onRampStatus,
                provider: t.provider,
                type: t.transactionType,
                statement: t.Statement
            }))
        }

        return NextResponse.json(response)
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