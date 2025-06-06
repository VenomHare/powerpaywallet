import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { prisma } from "@powerpaywallet/db/client";
import { NextRequest } from "next/server";


export const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "1231231231" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {

                    if (!credentials?.password || !credentials.phone) {
                        return null
                    }

                    const hashedPassword = await bcrypt.hash(credentials?.password, 10);
                    const existingUser = await prisma.user.findUnique({
                        where: {
                            number: credentials?.phone
                        }
                    });
                    if (existingUser) {
                        const passwordComparison = await bcrypt.compare(credentials.password, existingUser.password);
                        if (passwordComparison) {
                            return {
                                id: existingUser.id.toString(),
                                name: existingUser.name,
                                email: existingUser.email
                            }
                        }
                        return null

                    }
                    // user doesn't exists
                    const user = await prisma.user.create({
                        data: {
                            number: credentials?.phone,
                            password: hashedPassword,
                        }
                    })

                    await prisma.balance.create({
                        data: {
                            userId: user.id,
                        }
                    })

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }

                }
                catch (error) {
                    console.error(error);
                    return null
                }
            },
        })
    ],
    secret: process.env.CLIENT_JWT_SECRET || "secret",
    callbacks: {
        async session({token, session}: any){
            session.user.id = token.sub;

            return session
        },
    }
}

