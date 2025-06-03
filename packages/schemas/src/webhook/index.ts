import { z } from "zod";

export const MockPaymentSchema = z.object({
    token: z.string().describe("token of transaction"),
    user_identifier: z.number().describe("User Id of payee"),
    amount: z.number().describe("Amount of Transaction")
})
export const MockPaymentTokenRequest = z.object({
    user_identifier: z.number().describe("User Id of payee"),
    amount: z.number().describe("Amount of Transaction")
});

export type MockPaymentTokenSchema = z.infer<typeof MockPaymentTokenRequest>;

export type MockPayment = {
    status : "processing"|"failed"|"completed",
    token : string,
    amount : number,
    user_identifier: number,
}

export type MockPaymentStore = Array<MockPayment>;
