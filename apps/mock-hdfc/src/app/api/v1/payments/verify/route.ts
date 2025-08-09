import { NextRequest, NextResponse } from "next/server";
import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { withCors } from "@/lib/cors";


export const GET = (req: NextRequest) => {
    const token = req.nextUrl.searchParams.get("token");
    
    console.log(mockPaymentStorage.getAll());
    
    const data = mockPaymentStorage.get(token || "");
    
    if (data && data.status == "processing"){
        const res = NextResponse.json(data);
        return withCors(req, res);
    }

    else{
        const res = NextResponse.json({message: "Not found"},{
            status: 422
        })
        return withCors(req, res);
    }
} 