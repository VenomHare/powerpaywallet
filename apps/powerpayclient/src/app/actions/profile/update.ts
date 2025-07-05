"use server";
import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";

export const updateField = async (id: "phone"|"email"|"name", val: string) => {
    const session = await getServerSession(authOptions);
    
    if (!session){
        throw new Error("User Not logged in ");
    }

    try {
        const userId = parseInt((session.user as any).id);

        if (id == "email") {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    email: val
                }
            })
        }
        else if (id == "name") {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    name: val
                }
            })
        }
        else {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    number: val
                }
            })
        }
    }
    catch(err)
    {
        console.log(err);
        throw err
    }
}