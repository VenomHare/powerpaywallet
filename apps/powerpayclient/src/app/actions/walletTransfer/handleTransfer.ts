"use server";

import { prisma } from "@powerpaywallet/db/client";

export const handleWalletTransfer = async (id: number) => {

    try {

        await prisma.$transaction(async (tx) => {

            const transferData = await tx.walletTransfers.findUnique({
                where: { id },
                include: {
                    FromUser: true,
                    ToUser: true,
                }
            });

            if (!transferData) {
                throw new Error("Error 572: Transfer Data Not Found");
            }

            await tx.$queryRaw`SELECT * FROM balance WHERE "userId" = ${transferData.from} FOR UPDATE`;

            const FromBalance = await tx.balance.findUnique({ where: { userId: transferData.from } });

            if (!FromBalance) {
                throw new Error("Error 572: User's Wallet Account Not Found");
            }

            if (FromBalance.amount < transferData.amount) {
                throw new Error("Error 470: Insufficient Funds");
            }

            // Transfer Money
            await tx.balance.update({
                where: {
                    userId: transferData.from
                },
                data: {
                    amount: {
                        decrement: transferData.amount
                    }
                }
            });

            await tx.balance.update({
                where: {
                    userId: transferData.to
                },
                data: {
                    amount: {
                        increment: transferData.amount
                    }
                }
            });

            // Add Transaction Entry to users
            await tx.transactions.createMany({
                data: [
                    {
                        userId: transferData.to,
                        status: "Success",
                        statement: `Recieved Money From ${transferData.FromUser.name}`,
                        token: `wal_tfr_${transferData.id}_${generatePaymentToken(10)}`,
                        provider: "POWERPAY_WALLET",
                        amount: transferData.amount,
                        transactionType: "Credit",
                        startTime: transferData.startedAt,
                    },
                    {
                        userId: transferData.from,
                        status: "Success",
                        statement: `Sent Money to ${transferData.ToUser.name}`,
                        token: `wal_tfr_${transferData.id}_${generatePaymentToken(10)}`,
                        provider: "POWERPAY_WALLET",
                        amount: transferData.amount,
                        transactionType: "Debit",
                        startTime: transferData.startedAt,
                    },
                ]
            })

            await prisma.walletTransfers.update({
                where: { id },
                data: {
                    status: "Success"
                }
            })
        })
        return true
    }
    catch (err) {
        console.log(err);
        throw err
    }

}

export const handleCancelWalletTransfer = async (id: number) => {

    try {
        await prisma.walletTransfers.update({
            where: { id },
            data: {
                status: "Failure"
            }
        });

        return true
    }
    catch (err) {
        console.log(err);
        return false
    }
}
function generatePaymentToken(length = 24) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}