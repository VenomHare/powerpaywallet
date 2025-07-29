"use server";
import { prisma } from "@powerpaywallet/db/client";
import { SavedBankAccount } from "@powerpaywallet/schemas/client";

export const getAccountById = async (id: number) => {
    try {
        const accountData = await prisma.savedBankAccounts.findUnique({ 
            where: { 
                id,
                isDeleted: false
            }, 
        })
        console.log("made database call");
        if (accountData == undefined) {
            return undefined
        }

        return {
            holderName: accountData.holderName,
            accountNumber: accountData.accountNumber,
            bankCode: accountData.bankCode,
            label: accountData.label,
            id: accountData.id
        }

    }
    catch (err) {
        console.log(err);
        return undefined
    }

}

export const editAccountData = async (data: Partial<SavedBankAccount>) => {
    try {
        if (!data.id) {
            throw new Error("Id Not Found");
        }
        const accountData = await prisma.savedBankAccounts.update({
            where: { 
                id: data.id,
                isDeleted: false
            },
            data
        })

        if (accountData == undefined) {
            return undefined
        }

        return {
            holderName: accountData.holderName,
            accountNumber: accountData.accountNumber,
            bankCode: accountData.bankCode,
            label: accountData.label,
            id: accountData.id
        }

    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteAccount = async (id: number) => {
    try {
        await prisma.savedBankAccounts.update({
            where: { 
                id,
                isDeleted: false
            },
            data: {
                isDeleted: true
            }
        })
        return true;
    }
    catch (err) {
        console.log(err);
        throw err;
    }

}