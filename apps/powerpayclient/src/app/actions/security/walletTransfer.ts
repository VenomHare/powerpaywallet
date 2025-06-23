"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";
import { SecurityPinPopupAction } from "@powerpaywallet/schemas/client";

export const getWalletTransferData = async (id: number) => {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        throw new Error('Error 401: Unauthorized');
    }

    try {
        const userId = parseInt((session.user as any).id);
        const data = await prisma.walletTransfers.findUnique({
            where: {
                id,
                from: userId
            },
            select: {
                ToUser: true,
                amount: true,
                status: true
            }
        })

        if (!data) {
            throw new Error("Error 572: Data not Found");
        }

        if (data.status !== "Processing") {
            throw new Error("Error 479: Transfer Already Processed")
        }

        const ResponseData: SecurityPinPopupAction = {
            type: "WALLET_MONEY_TRANSFER",
            amount: data.amount,
            toName: data.ToUser.name,
            toNumber: data.ToUser.number
        }

        return ResponseData

    }
    catch (err) {
        console.log(err);
        throw err
    }
}