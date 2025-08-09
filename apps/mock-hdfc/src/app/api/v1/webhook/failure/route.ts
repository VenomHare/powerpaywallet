import { withCors } from "@/lib/cors";
import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {

    const token = req.nextUrl.searchParams.get("token");
    const payment = mockPaymentStorage.get(token || "");
    if (!token || !payment) {
        const res = NextResponse.json("Token Not Found", {
            status: 422
        })
        return withCors(req, res);
    }
    const url = process.env.FAILURE_WEBHOOK_URL || "";
    const body = {
        amount: payment.amount,
        user_identifier: payment.user_identifier,
        token: payment.token
    }
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Authorization": process.env.WEBHOOK_SECRET || "",
                "Content-Type": "application/json"
            }
        })
    }
    catch (err) {
        console.log(err);
    }
    mockPaymentStorage.set({ ...payment, status: "completed" });
    
    const res = NextResponse.json({
        message: "Sent"
    })
    return withCors(req, res);
} 