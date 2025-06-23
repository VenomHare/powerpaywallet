import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@powerpaywallet/db/client";
import { authOptions } from "../../../../lib/auth";

export const GET = async (): Promise<NextResponse> => {

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return NextResponse.json({ error: 'Unauthorized' }, {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    try {
        const id = parseInt((session.user as any).id);
        //type casting string to number

        const balance = await prisma.balance.findUnique({
            where: {
                userId: id
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
        const transaction = await prisma.transactions.findMany({
            where: {
                userId: id
            },
            orderBy: {
                upatedAt: "desc"
            }
        });

        const response = {
            balance: {
                available: balance.amount,
                locked: balance.locked
            },
            transactions: transaction.map(t => ({
                id: t.id,
                time: t.startTime,
                amount: t.amount,
                status: t.status,
                provider: t.provider,
                type: t.transactionType,
                statement: t.statement
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