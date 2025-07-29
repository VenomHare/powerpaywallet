"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";

export const SaveBankAccount = async (accountNumber: string, bankCode: string, holderName: string, label: string) => {
    try {
        const session = await getServerSession(authOptions);
        const userId = parseInt((session?.user as any)?.id);

        if (!session || !userId) {
            throw new Error("User not logged in!!");
        }

        await prisma.savedBankAccounts.create({
            data: {
                userId,
                accountNumber,
                bankCode,
                holderName,
                label
            }
        })

        return true
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

export const getSavedBankAccounts = async () => {
    try {
        const session = await getServerSession(authOptions);
        const userId = parseInt((session?.user as any)?.id);

        if (!session || !userId) {
            throw new Error("User not logged in!!");
        }

        const data = await prisma.savedBankAccounts.findMany({
            where: {
                userId,
                isDeleted: false
            },
        });

        return data;
    }
    catch (err) {
        console.log(err);
        return []
    }
}