import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { MockPaymentSchema } from "@powerpaywallet/schemas/webhook";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = async (req: NextRequest) => {
    
    const token = req.nextUrl.searchParams.get("token");
    const payment = mockPaymentStorage.get(token||"");
    if (!token || !payment){
        return NextResponse.json("Token Not Found", {
            status: 422
        })
    }
    const url = process.env.SUCCESS_WEBHOOK_URL || "";
    const body : z.infer<typeof MockPaymentSchema> = {
        amount: payment.amount,
        user_identifier: payment.user_identifier,
        token: payment.token
    }
    try {
        const req = await fetch(url, {
            method:"POST",
            body: JSON.stringify(body),
            headers: {
                "Authorization": process.env.WEBHOOK_SECRET||"",
                "Content-Type": "application/json"
            }
        });
        console.log(JSON.stringify(await req.json())); 
        if (req.ok){
            mockPaymentStorage.set({...payment, status:"completed"});
            return NextResponse.json({message: "sent"})
        }
        return NextResponse.json({message: "ERROR"},{status: 503});
    }
    catch(err)
    {
        //If request fails retry it again after interval 
        console.log(err);
        return NextResponse.json({message: "ERROR"},{status: 500})
    }
} 