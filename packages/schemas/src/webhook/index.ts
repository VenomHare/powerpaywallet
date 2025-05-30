import { z } from "zod";

export const MockPaymentSchema = z.object({
    token: z.string().describe("token of transaction"),
    user_identifier: z.number().describe("User Id of payee"),
    amount: z.number().describe("Amount of Transaction")
})
export const MockPaymentTokenRequest = z.object({
    redirect_uri: z.string().url().describe("url to redirect user after payment "),
    user_identifier: z.number().describe("User Id of payee"),
    amount: z.number().describe("Amount of Transaction")
})

export type MockPayment = {
    status : "processing"|"failed"|"completed",
    token : string,
    amount : number,
    user_identifier: number,
    redirect_uri: string
}

export type MockPaymentStore = Array<MockPayment>;
