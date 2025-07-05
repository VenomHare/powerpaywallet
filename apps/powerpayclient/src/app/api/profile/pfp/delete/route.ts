import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const { id: public_id } = await req.json()

        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
        const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!;
        const apiSecret = process.env.CLOUDINARY_API_SECRET!;
        const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`;
        const basicAuth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

        const url = `${endpoint}?public_ids[]=${encodeURIComponent(public_id)}`;

        const response = await axios.delete(url, {
            headers: {
                Authorization: `Basic ${basicAuth}`,
                "Content-Type": "application/json",
            },
        })

        const result = response.data.deleted[public_id] == "deleted"

        return NextResponse.json({
            success: result
        })

    }
    catch (err) {
        console.log("----------------------------");
        console.log(JSON.stringify(err));

        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 500
        })
    }
}