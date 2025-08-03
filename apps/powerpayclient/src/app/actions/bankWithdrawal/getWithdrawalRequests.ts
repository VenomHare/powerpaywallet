"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";
import { WithdrawalTransaction } from "@powerpaywallet/schemas/client";

export const getWithdrawalRequests = async () => {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        throw new Error('Error 401: Unauthorized');
    }

    try {
        const userId = parseInt((session.user as any).id);

        const requests = await prisma.bankWithdrawals.findMany({
            where: {
                userId,
                status: {
                    notIn: ["APPROVAL_PENDING", "NOT_APPROVED"]
                }
            },
            include: {
                account: true
            },
            orderBy: {
                updatedAt: "desc"
            }
        })

        const response : WithdrawalTransaction[] = requests.map(request => ({
            ...request,
            // Convert 'startedAt' to ISO string if it's a Date object
            startedAt: request.startedAt instanceof Date
                ? request.startedAt.toISOString()
                : request.startedAt, // Keep as is if not a Date object (e.g., already a string or null)

            // Convert 'updatedAt' to ISO string if it's a Date object
            updatedAt: request.updatedAt instanceof Date
                ? request.updatedAt.toISOString()
                : request.updatedAt // Keep as is if not a Date object
        }))

        return response;

    }
    catch (error) {
        console.log(error);
        throw error
    }
}