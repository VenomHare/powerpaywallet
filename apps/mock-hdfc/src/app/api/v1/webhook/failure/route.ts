import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { MockPaymentSchema } from "@powerpaywallet/schemas/webhook";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = async (req: NextRequest) => {
    
    const token = req.nextUrl.searchParams.get("token");
    const payment= mockPaymentStorage.get(token||"");
    if (!token || !payment){
        return NextResponse.json("Token Not Found", {
            status: 422
        })
    }
    const url = process.env.FAILURE_WEBHOOK_URL || "";
    const body : z.infer<typeof MockPaymentSchema> = {
        amount: payment.amount,
        user_identifier: payment.user_identifier,
        token: payment.token
    }
    try {
        await fetch(url, {
            method:"POST",
            body: JSON.stringify(body),
            headers:{ 
                "Authorization": process.env.WEBHOOK_SECRET||""
            }
        })
    }
    catch(err)
    {
        console.log(err);
    }
    mockPaymentStorage.set({...payment, status:"completed"});
} 