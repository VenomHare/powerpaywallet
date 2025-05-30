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
    const url = process.env.SUCCESS_WEBHOOK_URL || "";
    const body : z.infer<typeof MockPaymentSchema> = {
        amount: payment.amount,
        user_identifier: payment.user_identifier,
        token: payment.token
    }
    try {
        await fetch(url, {
            method:"POST",
            body: JSON.stringify(body)
        })
    }
    catch(err)
    {
        //If request fails retry it again after interval 
        console.log(err);
    }
    mockPaymentStorage.set({...payment, status:"completed"});
    return NextResponse.json({message: "sent"})
} 