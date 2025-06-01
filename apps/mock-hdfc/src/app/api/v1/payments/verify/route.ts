import { NextRequest, NextResponse } from "next/server";
import { mockPaymentStorage } from "@/lib/MockPaymentStorage";

/**
 * Handles GET requests to verify a payment token.
 * This endpoint retrieves payment information using the token from the URL query parameters.
 * 
 * @param req - The incoming Next.js request object
 * @returns A JSON response containing either:
 *          - The payment data if found
 *          - An error message with 422 status if not found
 * 
 * @example
 * ```typescript
 * // Request URL
 * GET /api/v1/payments/verify?token=pay_tok_abc123...
 * 
 * // Success Response
 * {
 *   "token": "pay_tok_abc123...",
 *   "user_identifier": 123,
 *   "amount": 1000,
 *   "status": "processing",
 *   "redirect_uri": "https://example.com/callback"
 * }
 * 
 * // Error Response
 * {
 *   "message": "Not found"
 * }
 * ```
 */
export const GET = (req: NextRequest) => {
    const token = req.nextUrl.searchParams.get("token");
    const data = mockPaymentStorage.get(token || "");
    console.log(mockPaymentStorage.getAll());
    if (data){
        return NextResponse.json(data);
    }
    else{
        return NextResponse.json({message: "Not found"},{
            status: 422
        })
    }
} 