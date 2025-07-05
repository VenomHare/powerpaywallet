"use server";

import { prisma } from "@powerpaywallet/db/client";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

export async function uploadPFPImage(file: File) {
    const timestamp = Math.floor(Date.now() / 1000);
    const upload_preset = "powerpay_profile_preset";

    const params = {
        timestamp,
        upload_preset
    }

    try {

        const session = await getServerSession(authOptions);

        if (!session) {
            throw new Error("User not logged in!");
        }
        const userId = parseInt((session.user as any).id);

        const userData = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        const res = await axios.post(process.env.NEXTAUTH_URL + "/api/profile/pfp/sign", { params }, {
            headers: { "Content-Type": "application/json" },
        })

        const { signature } = res.data;

        const formData = new FormData()
        formData.append("file", file)
        formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
        formData.append("timestamp", timestamp.toString())
        formData.append("signature", signature)
        formData.append("upload_preset", upload_preset)

        const uploadRes = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData)

        if (uploadRes.data.secure_url && uploadRes.data.public_id) {

            if (userData?.pfpPublicId !== undefined && userData?.pfpPublicId !== null) {
                const deleteResponse = await axios.post(process.env.NEXTAUTH_URL + "/api/profile/pfp/delete", {
                    id: userData.pfpPublicId
                })

                if (deleteResponse.data.success) {
                    await prisma.cloudinary_images.delete({
                        where: {
                            public_id: userData.pfpPublicId
                        }
                    });
                }
            }

            const imageData = await prisma.cloudinary_images.create({
                data: {
                    public_id: uploadRes.data.public_id,
                    url: uploadRes.data.secure_url
                }
            })

            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    pfpPublicId: imageData.public_id
                }
            })

            return true;
        }
        return false
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}