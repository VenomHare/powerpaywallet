import { z } from "zod";

export const hdfcWebhookRequestSchema = z.object({
    token: z.string().describe("token of transaction"),
    userId: z.number().describe("User Id of payee"),
    amount: z.number().describe("Amount of Transaction")
})