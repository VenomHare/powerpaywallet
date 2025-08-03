"use server";

import { prisma } from "@powerpaywallet/db/client";
import axios from "axios";

const POWERPAY_MOCKBANK_TRANSFER = process.env.POWERPAY_MOCKBANK_TRANSFER;
const BANK_SECRET = process.env.BANK_SECRET;

if (!POWERPAY_MOCKBANK_TRANSFER) {
    throw new Error("POWERPAY_MOCKBANK_TRANSFER not Found");
}
if (!BANK_SECRET) {
    throw new Error("BANK_SECRET not Found");
}

export const handleBankWithdrawal = async (id: number) => {

    try {
        await prisma.$transaction(async (tnx) => {
            const transferData = await tnx.bankWithdrawals.findUnique({ where: { id }, include: { account: true } });
            if (!transferData) {
                throw new Error("Error 572: Transfer Data Not Found");
            }
            await tnx.$queryRaw`SELECT * FROM balance WHERE "userId" = ${transferData.userId} FOR UPDATE`;

            const userBalance = await tnx.balance.findUnique({ where: { userId: transferData.userId } });

            if (!userBalance) {
                throw new Error("Error 572: User Data Not Found");
            }

            if (userBalance.amount < transferData.amount) {
                throw new Error("Error 470: Insufficient Funds");
            }

            const { data: { token } } = await axios.post(POWERPAY_MOCKBANK_TRANSFER, {
                account_number: transferData.account.accountNumber,
                ifsc_code: transferData.account.bankCode,
                holder_name: transferData.account.holderName,
                amount: transferData.net_amount,
            }, {
                headers: {
                    Authorization: BANK_SECRET
                }
            });

            if (!token) {
                throw new Error("Error 572: Token not found");
            }

            await tnx.balance.update({
                where: {
                    userId: transferData.userId
                },
                data: {
                    amount: {
                        decrement: transferData.amount
                    },
                    locked: {
                        increment: transferData.amount
                    }
                }
            })
            
            await tnx.transactions.create({
                data: {
                    status: "Processing",
                    statement: "Withdrawal via Bank Transfer",
                    token,
                    provider: "POWERPAY_MOCKBANK",
                    amount: transferData.amount,
                    transactionType: "Debit",
                    userId: transferData.userId
                }
            })

            await tnx.bankWithdrawals.update({
                where: {
                    id
                },
                data: {
                    updatedAt: new Date().toISOString(),
                    token,
                    status: "Processing"
                }
            });
        })
        return true

    }
    catch (error: any) {
        console.log("Error while processing transfer request");
        throw error
    }

}



export const handleCancelBankWithdrawal = async (id: number) => {

    try {

        await prisma.$transaction(async (tnx) => {
            await tnx.bankWithdrawals.update({
                where: { id },
                data :{
                    updatedAt: new Date().toISOString(),
                    status: "NOT_APPROVED"
                }
            })
        })
        return true
    }
    catch (error: any) {
        console.log("Error while processing transfer request");
        throw error
    }

}

