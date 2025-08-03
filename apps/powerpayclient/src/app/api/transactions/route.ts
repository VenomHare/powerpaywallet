import { prisma } from "@powerpaywallet/db/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

const DEFAULT_LIMIT = "25";

export const GET = async (req: NextRequest) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({
                message: "You aren't logged in!"
            }, {
                status: 401
            })
        }
        const userId = parseInt((session.user as any).id)
        const params = req.nextUrl.searchParams;
        const limit = parseInt(params.get("limit") || DEFAULT_LIMIT);
        const page = parseInt(params.get("page") || "1");

        const count = await prisma.transactions.count({
            where: { userId }
        });

        const data = await prisma.transactions.findMany({
            skip: page > 1 ? ((page - 1) * limit) : 0,
            take: limit,
            where: {
                userId
            },
            orderBy: {
                upatedAt: "desc" 
            }
        })

        return NextResponse.json({
            transactions: data,
            count
        })
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 500
        })
    }

}