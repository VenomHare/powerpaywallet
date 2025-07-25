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
            where: account,
            select: {
                id: true
            }
        })

        if (!accountData || !userId) {
            throw new Error("Error 572: Request Data Not Found")
        }

        const token = generateRequestToken(16);

        const request = await prisma.bankWithdrawals.create({
            data: {
                accountId: accountData.id,
                userId,
                token,
                amount,
            }
        })

        return request.id 
    }
    catch (error) {
        console.log(error);
        throw error
    }
}
function generateRequestToken(length = 24) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = 'BWD_';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}