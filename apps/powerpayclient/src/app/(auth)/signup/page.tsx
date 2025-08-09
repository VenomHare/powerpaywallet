"use client";
import { FormEvent, useEffect, useState } from "react"
import { alert } from "../../../components/alerts";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SignUpPage = () => {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/wallet";

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pin, setPin] = useState("");

    const appDispatch = useAppDispatch();
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status == "authenticated") {
            router.push("/dashboard");
        }
    }, [session.status, router])

    const handleSignUp = (e: FormEvent) => {
        e.preventDefault();
        if (!number || !password) {
            alert(appDispatch, `Number or Password not found`, "error", {
                duration: 3000
            });
            return
        }
        if (Number.isNaN(parseInt(pin))) {
            alert(appDispatch, `Invalid Security Pin \n Use Numbers `, "error", {
                duration: 3000
            });
            return
        }

        signIn("credentials", {
            action: "signup",
            phone: number,
            email,
            name,
            password,
            pin,
            callbackUrl: callbackUrl
        })
    }

    return (<>
        <div className="w-dvw h-dvh bg-slate-50 flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold flex flex-col justify-center italic">PowerPay</h1>
            <form className="sm:max-w-sm w-full rounded-md bg-slate-200/70 border-1 border-slate-400/60 shadow-lg shadow-slate-400/60 p-4 flex flex-col items-center gap-2" onSubmit={handleSignUp}>
                <div className="text-2xl font-semibold font-[Manrope]">
                    {"Sign Up"}
                </div>
                <div className="w-3/4 text-sm text-center text-slate-400 font-semibold font-[Manrope]">
                    {"Enter Credentials to create your new account"}
                </div>
                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="amount" className="text-md font-semibold font-[Manrope]">Phone Number</label>

                    <div className="w-full flex items-center gap-4">
                        <p className="text-2xl font-semibold font-[Manrope]">+91</p>
                        <input id="number"
                            type="tel"
                            pattern="[0-9]{10}"
                            onChange={(e) => { setNumber(e.target.value) }}
                            required
                            className='w-full my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-2xl' />
                    </div>
                </div>
                <div className="flex flex-col w-full ">
                    <label htmlFor="name" className="text-md font-semibold font-[Manrope]">Full Name</label>

                    <div className="w-full flex items-center gap-4">
                        <input id="name"
                            type="text"
                            onChange={(e) => { setName(e.target.value) }}
                            required
                            className='w-full border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-xl' />
                    </div>
                </div>

                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="email" className="text-md font-semibold font-[Manrope]">Email Id</label>

                    <div className="w-full flex items-center gap-4">
                        <input id="email"
                            type="email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                            className='w-full  border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-xl' />
                    </div>
                </div>
                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="email" className="text-md font-semibold font-[Manrope]">Password</label>

                    <div className="w-full flex items-center gap-4">
                        <input id="password"
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                            className='w-full border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-xl py-1' />
                    </div>
                </div>

                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="pin" className="text-md font-semibold font-[Manrope]">Security Code (4 digit)</label>

                    <div className="w-full flex items-center gap-4">
                        <input id="pin"
                            type="password"
                            onChange={(e) => { setPin(e.target.value) }}
                            maxLength={4}
                            required
                            className='w-full border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-xl py-1' />
                    </div>
                </div>

                <button className="w-full rounded bg-slate-950 text-slate-200 font-semibold cursor-pointer font-[Manrope] py-2 ">Sign Up</button>
                <Link href={"/login"} className="font-[Manrope] font-semibold">Already have Account? Log In</Link>
            </form>
        </div>
    </>)
}

export default SignUpPage