import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { MockPayment, MockPaymentStore, MockPaymentTokenRequest } from "@powerpaywallet/schemas/webhook";
import { NextRequest, NextResponse } from "next/server";

function generatePaymentToken(length = 24) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = 'pay_tok_';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

const hostname = process.env.HOST || "http://localhost:3003"

export const POST = async (req: NextRequest) => {
    const { success, data, error } = MockPaymentTokenRequest.safeParse(await req.json());

    if (!success) {
        return NextResponse.json({
            message: "Invalid Parameters",
            error
        }, {
            status: 422
        })
    }

    const payment : MockPayment = {
        token: generatePaymentToken(),
        user_identifier: data.user_identifier,
        amount: data.amount,
        status: "processing",
        redirect_uri: data.redirect_uri
    }

    mockPaymentStorage.add(payment);
    console.log("added", mockPaymentStorage.getAll());

    return NextResponse.json({
        token: payment.token,
        url: `${hostname}/netbanking/transfer?token=${payment.token}`
    })
}

export const getPaymentByToken = (token: string) => {
    return mockPaymentStorage.get(token);
}

