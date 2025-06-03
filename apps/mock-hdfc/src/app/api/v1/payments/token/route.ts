import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { MockPayment, MockPaymentTokenRequest } from "@powerpaywallet/schemas/webhook";
import { NextRequest, NextResponse } from "next/server";

/**
 * Generates a unique payment token with a specified length.
 * The token always starts with 'pay_tok_' followed by random characters.
 * 
 * @param length - The length of the random part of the token (default: 24)
 * @returns A unique payment token string
 * 
 * @example
 * ```typescript
 * const token = generatePaymentToken(); // e.g., "pay_tok_a1b2c3..."
 * ```
 */
function generatePaymentToken(length = 24) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = 'pay_tok_';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

/** The hostname for the bank's netbanking service */
const hostname = process.env.BANK_HOSTNAME || "http://localhost:3003"

/**
 * Handles POST requests to create a new payment token.
 * This endpoint validates the request body, generates a unique payment token,
 * stores the payment information, and returns the token with a redirect URL.
 * 
 * @param req - The incoming Next.js request object
 * @returns A JSON response containing the payment token and redirect URL
 * 
 * @example
 * ```typescript
 * // Request body
 * {
 *   "user_identifier": 123,
 *   "amount": 1000,
 *   "redirect_uri": "https://example.com/callback"
 * }
 * 
 * // Response
 * {
 *   "token": "pay_tok_abc123...",
 *   "url": "http://localhost:3003/netbanking/transfer?token=pay_tok_abc123..."
 * }
 * ```
 */
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
    }

    mockPaymentStorage.add(payment);

    return NextResponse.json({
        token: payment.token,
        url: `${hostname}/netbanking/transfer?token=${payment.token}`
    })
}
