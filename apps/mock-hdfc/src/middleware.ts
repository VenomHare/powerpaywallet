import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
    
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/api/v1")) {
        const token = request.headers.get('authorization')?.replace("Bearer ", "");
        console.log(token, process.env.BANK_SECRET);
        
        if (!token) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }
        // process token
        if (token === process.env.BANK_SECRET) {
            return NextResponse.next();
        }
        return NextResponse.json(
            { message: 'Unauthorized' },
            { status: 401 }
        );
    }
    
    return NextResponse.json({});
}

export const config = {
    matcher: ['/api/v1/payments/token']
} 