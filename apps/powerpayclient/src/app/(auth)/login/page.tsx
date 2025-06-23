"use client";
import { FormEvent, useState } from "react"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/wallet";
    const error = searchParams.get("error");
    
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const req = await signIn("credentials", {
            action: "signin",
            phone: number,
            password,
            callbackUrl: callbackUrl
        })
        console.log(req);
    }


    return (<>
        <div className="w-dvw h-dvh bg-slate-50 flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold flex flex-col justify-center italic">PowerPay</h1>
            <form className="sm:max-w-sm w-full rounded-md bg-slate-200/70 border-1 border-slate-400/60 shadow-lg shadow-slate-400/60 p-4 flex flex-col items-center gap-2" onSubmit={handleLogin}>
                <div className="text-2xl font-semibold font-[Manrope]">
                    {"Login"}
                </div>
                <div className="w-3/4 text-sm text-center text-slate-400 font-semibold font-[Manrope]">
                    {"Enter Credentials to login into your account"}
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

                {
                    error == "CredentialsSignin" && <p className="text-red-600 font-semibold font-[Manrope]">Invalid number or password</p>
                }

                <button className="w-full rounded bg-slate-950 text-slate-200 font-semibold cursor-pointer font-[Manrope] py-2 mt-2 ">Login</button>
                <Link href={"/signup"} className="font-[Manrope] font-semibold">Don't have a Account? Sign Up</Link>
            </form>
        </div>
    </>)
}

export default LoginPage