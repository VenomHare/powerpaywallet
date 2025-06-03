import { z } from "zod";

export const addFundsRequest = z.object({
    amount: z.number().describe("Amount for Transaction in paise ie 40Rs = 4000(40.00)"),
    provider: z.enum(["POWERPAY_MOCKBANK"]).describe("Name of Bank or Provider from which money is to be added to wallet")
})