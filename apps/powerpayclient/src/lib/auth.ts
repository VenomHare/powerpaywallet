import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { prisma } from "@powerpaywallet/db/client";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "1231231231" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    if (!credentials?.password || !credentials?.phone) {
                        console.log("No Password or phone")
                        return null
                    }
                    if (!req.body) {
                        console.log("No Body")
                        return null
                    }

                    const { pin, name, email, action } = req.body;

                    if (action == "signup") {
                        return await handleSignUp(credentials.phone, credentials.password, pin, name, email);
                    }
                    else if (action == "signin") {
                        return await handleSignIn(credentials.phone, credentials.password);
                    }
                    else {
                        return null
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
        async session({ token, session }: any) {
            (session.user as { id: string }).id = token.sub!;
            return session
        },
    },
    pages: {
        signIn: "/login"
    }

}

const handleSignIn = async (number: string, password: string) => {

    const existingUser = await prisma.user.findUnique({
        where: {
            number
        }
    });
    if (existingUser) {
        const passwordComparison = await bcrypt.compare(password, existingUser.password);
        if (passwordComparison) {
            return {
                id: existingUser.id.toString(),
                name: existingUser.name,
                email: existingUser.email
            }
        }
        console.log("Signin Return")
        return null

    }
    else {
        console.log("Signin Return")
        return null
    }

}

const handleSignUp = async (number: string, password: string, pin: string, name: string, email: string) => {

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPin = await bcrypt.hash(pin, 10);

    const existingUser = await prisma.user.findUnique({
        where: {
            number
        }
    });

    if (existingUser) {
        console.log("Signup Return")
        return null
    }

    // user doesn't exists
    const user = await prisma.user.create({
        data: {
            number,
            password: hashedPassword,
            securityPin: hashedPin,
            name,
            email
        }
    })

    await prisma.balance.create({
        data: {
            userId: user.id,
        }
    });
    
    return {
        id: user.id.toString(),
        name: user.name,
        email: user.email
    }


}