import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
    const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET!

    if (!cloudinaryApiSecret) {
        throw new Error("Cloudinary Secret Not Found");
    }

    try {
        const { params } = await req.json();
        const sortedParams = Object.keys(params)
            .sort()
            .map((key) => `${key}=${params[key]}`)
            .join('&')

        const signature = crypto
            .createHash('sha1')
            .update(sortedParams + cloudinaryApiSecret)
            .digest('hex')

        return NextResponse.json({ signature });
    }
    catch (err) {
        console.log("Something went wrong ::: " + err);
        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 500
        })
    }

}
