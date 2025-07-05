
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";
import { NextResponse } from "next/server";
import { ProfileData } from "@powerpaywallet/schemas/client";

export const GET = async () => {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({
                message: "User not logged in!",
            }, {
                status: 401
            });
        }
        const userId = parseInt((session.user as any).id);

        const data = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                pfp: true
            }
        });

        if (!data) {
            return NextResponse.json({
                message: "User not found"
            }, {
                status: 579
            })
        }

        const response: ProfileData = {
            phone: data.number,
            fullName: data.name,
            email: data.email,
            pfpUrl: data.pfp?.url
        }

        return NextResponse.json(response);
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