"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { CreateWalletTransferRequest } from "@powerpaywallet/schemas/client";
import { prisma } from "@powerpaywallet/db/client";

export const createTransfer = async (toNumber: string, amount: number) => {

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        throw new Error('Error 401: Unauthorized');
    }

    try {
        const id = (session.user as any).id;


        const { success, data, error } = CreateWalletTransferRequest.safeParse({
            id: parseInt(id),
            phone: toNumber,
            amount
        })

        if (!success) {
            console.log(error);
            throw new Error("Error 400: Validation Error")
        }

        const fromData = await prisma.user.findUnique({
            where: {
                id: data.id
            }
        })
        if (!fromData) {
            throw new Error("Error 572: User data not found")
        }
        const toData = await prisma.user.findUnique({
            where: {
                number: data.phone
            }
        })

        if (!toData) {
            throw new Error("Error 572: Reciever data not found");
        }

        const transfer = await prisma.walletTransfers.create({
            data: {
                to: toData.id,
                from: fromData.id,
                amount: data.amount*100,
                status: "Processing"
            }
        })

        return {
            id: transfer.id
        }

    }
    catch (err) {
        console.log(err);
        throw err
    }

}