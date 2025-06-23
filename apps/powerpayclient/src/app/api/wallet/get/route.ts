import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";


export const GET = async (req: NextRequest) => {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    try {
        const searchParams = req.nextUrl.searchParams;
        const query = searchParams.get("q") || "";
        console.log(query);

        const data = await prisma.user.findMany({
            where: {
                number: {
                    contains: query,
                },
                id: {
                    not: {
                        equals: parseInt((session.user as any).id)
                    }
                }
            }
        })

        if (data){
            const responseData = data.map((d)=>({
                number: d.number,
                name: d.name
            }));

            return NextResponse.json(responseData);
        }
        else{
            throw Error("data not found");
        }

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