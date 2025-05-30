import { NextRequest, NextResponse } from "next/server";
import { mockPaymentStorage } from "@/lib/MockPaymentStorage";

export const GET = (req: NextRequest) => {
    const token = req.nextUrl.searchParams.get("token");
    const data = mockPaymentStorage.get(token || "");
    console.log(mockPaymentStorage.getAll());
    if (data){
        return NextResponse.json(data);
    }
    else{
        return NextResponse.json("Not found",{
            status: 422
        })
    }
} 