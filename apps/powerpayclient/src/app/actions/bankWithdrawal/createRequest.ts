"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { SavedBankAccount } from "@powerpaywallet/schemas/client";
import { prisma } from "@powerpaywallet/db/client";

export const createWithdrawalRequest = async (id: number, amount: number) => {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        throw new Error('Error 401: Unauthorized');
    }
    try {

        let tnxId = NaN;

        await prisma.$transaction(async (tnx) => {
            const userId = parseInt((session.user as any).id);

            const pendingReq = await tnx.bankWithdrawals.findMany({
                where: {
                    status: {
                        in: ["Processing", "APPROVAL_PENDING"]
                    }
                }
            })
            
            if (pendingReq.length !== 0) {
                throw new Error("Error 473: Cannot create a new requset when some transaction is pending ")
            }

            const accountData = await tnx.savedBankAccounts.findFirst({
                where: {
                    id,
                    isDeleted: false
                },
                select: {
                    id: true
                }
            })

            if (!accountData || !userId) {
                throw new Error("Error 572: Request Data Not Found")
            }

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