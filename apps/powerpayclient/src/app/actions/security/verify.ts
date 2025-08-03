"use server";
import bcrypt from "bcrypt"
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";
import { SecurityPinPopupActions } from "@powerpaywallet/schemas/client";
import { handleCancelWalletTransfer, handleWalletTransfer } from "../walletTransfer/handleTransfer";
import { handleBankWithdrawal, handleCancelBankWithdrawal } from "../bankWithdrawal/handleRequest";

const SuccessEventHandlers = {
    NO_ACTION: () => { return true },
    WALLET_MONEY_TRANSFER: handleWalletTransfer,
    BANK_WITHDRAWAL: handleBankWithdrawal
}

const CancelEventHandlers = {
    NO_ACTION: () => { return false },
    WALLET_MONEY_TRANSFER: handleCancelWalletTransfer,
    BANK_WITHDRAWAL: handleCancelBankWithdrawal
}

export const VerifySecurityPin = async (pin: string, id: number, action: SecurityPinPopupActions) => {

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        throw new Error('Error 401: Unauthorized')
    }

    try {
        const userId = parseInt((session.user as any).id);

        const userData = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!userData) {
            throw new Error("Error 572: User data not found");
        }

        if (userData.lastFailedPinTry) {
            if (isOlderThan24Hours(userData.lastFailedPinTry)) {
                // 24hrs past means reset counter
                await prisma.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        failedPinTries: 0
                    }
                });
                // Pass the Compairison
            }
        }

        // Check if the user has timeout or not 
        console.log(userData.failedPinTries);
        if (userData.failedPinTries > 3) {
            // Could be a better logic for handling fail calls here
            const cancelHandler = CancelEventHandlers[action]
            await cancelHandler(id);
            throw new Error("Error 461: You've made 3 incorrect security PIN attempts in a 1 day. For your safety, further attempts are temporarily disabled. Please try again after 24 hours.")
        
        }

        const pinCompare = await bcrypt.compare(pin, userData.securityPin);
        if (pinCompare) {
            // correct pin access
            const processHandler = SuccessEventHandlers[action]
            if (!processHandler) {
                throw new Error("Error 571: Succes Event Handler not found for EVENT : " + action);
            }
            try {
                const process = await processHandler(id);

                if (process) {
                    return {
                        success: true
                    }
                }
                else {
                    throw new Error("Error 550: Failed to Transfer Money");
                }
            }
            catch (err) {
                const cancelHandler = CancelEventHandlers[action]
                await cancelHandler(id);
                throw err;
            }
        }
        else {
            const data = await prisma.user.update({
                where: { id: userId },
                data: {
                    lastFailedPinTry: new Date().toISOString(),
                    failedPinTries: {
                        increment: 1
                    },
                },
                select: {
                    failedPinTries: true
                }
            });

            if (data.failedPinTries < 3) {
                throw new Error(`Error 460: Incorrect PIN! You have used ${data.failedPinTries} out of 3 attempts.`)
            }
            else {
                const cancelHandler = CancelEventHandlers[action]
                await cancelHandler(id);
                throw new Error("Error 462: You've made 3 incorrect security PIN attempts in a 1 day. For your safety, further attempts are temporarily disabled. Please try again after 24 hours.")
            }
        }
    }
    catch (err) {
        console.log(err);
        throw err
    }

}

function isOlderThan24Hours(date: Date): boolean {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const hours24InMs = 24 * 60 * 60 * 1000;
    return diffInMs > hours24InMs;
}
