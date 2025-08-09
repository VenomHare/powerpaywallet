import { withCors } from "@/lib/cors";
import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { MockPaymentSchema } from "@powerpaywallet/schemas/webhook";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = async (req: NextRequest) => {

    const token = req.nextUrl.searchParams.get("token");
    if (!token) {
        const res = NextResponse.json("Token Not Found", {
            status: 422
        })
        return withCors(req, res);
    }
    const payment = mockPaymentStorage.get(token);

    if (!payment) {
        const res = NextResponse.json("Payment Not Found", {
            status: 422
        })
        return withCors(req, res);
    }
    const url = process.env.SUCCESS_WEBHOOK_URL || "";
    const body: z.infer<typeof MockPaymentSchema> = {
        amount: payment.amount,
        user_identifier: payment.user_identifier,
        token: payment.token
    }
    try {
        const request = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Authorization": process.env.WEBHOOK_SECRET || "",
                "Content-Type": "application/json"
            }
        });
        console.log(JSON.stringify(await request.text()));
        if (request.ok) {
            mockPaymentStorage.set({ ...payment, status: "completed" });
            const res = NextResponse.json({ message: "sent" })
            return withCors(req, res);
        }
        const res = NextResponse.json({ message: "ERROR" }, { status: 503 });
        return withCors(req, res);
    }
    catch (err) {
        //If request fails retry it again after interval 
        console.log(err);
        const res = NextResponse.json({ message: "ERROR" }, { status: 500 })
        return withCors(req, res);
    }
} 