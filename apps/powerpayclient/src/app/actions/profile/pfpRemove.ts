"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@powerpaywallet/db/client";
import axios from "axios";

export const removePfp = async () => {

    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            throw new Error("User not Logged in");
        }

        const userId = parseInt((session.user as any).id);

        const userData = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (userData?.pfpPublicId == undefined || userData.pfpPublicId == null) {
            return false;
        }

        const deleteResponse = await axios.post(process.env.NEXTAUTH_URL + "/api/profile/pfp/delete", {
            id: userData.pfpPublicId
        })

        if (!deleteResponse.data.success) {
            return false;
        }

        await prisma.cloudinary_images.delete({
            where: {
                public_id: userData.pfpPublicId
            }
        });

        await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                pfpPublicId: undefined
            }
        })

        return true;

    }
    catch (err) {
        console.log(err);
        throw err;
    }

}