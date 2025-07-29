"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { SavedBankAccount } from "@powerpaywallet/schemas/client";
import { prisma } from "@powerpaywallet/db/client";

export const createWithdrawalRequest = async (account: SavedBankAccount, amount: number) => {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        throw new Error('Error 401: Unauthorized');
    }
    try {
        const userId = parseInt((session.user as any).id);

        const accountData = await prisma.savedBankAccounts.findFirst({
            where: {
                ...account,
                isDeleted: false
            },
            select: {
                id: true
            }
        })

        if (!accountData || !userId) {
            throw new Error("Error 572: Request Data Not Found")
        }

        let tnxId = NaN;

        await prisma.$transaction(async (tnx) => {
            const fee = amount * 0.0075;
            const net_amount = amount - fee;

            const createReq = await tnx.bankWithdrawals.create({
                data: {
                    accountId: accountData.id,
                    userId,
                    amount,
                    fee,
                    net_amount,
                    gateway: "bank_transfer",
                },
                select: {
                    id: true
                }
            })

            tnxId = createReq.id
        })

        return tnxId

    }
    catch (error) {
        console.log(error);
        throw error
    }
}