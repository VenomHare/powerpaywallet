"use client";
import { CompleteForm } from "@/components/complete-form";
import { Loading } from "@/components/loading";
import { LoginForm } from "@/components/login-form";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r=>r.json());

export default function() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const { data, error, isLoading } = useSWR(`/api/v1/payments/verify?token=${token}`,fetcher);


    const onLoginSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(res=>setTimeout(res,400));
        setLoggedIn(true);
        setLoading(false);
    }

    const success = async () => {
        setLoading(true);
        fetch(`/api/v1/webhook/success?token=${token}`);
        setLoading(false);
        router.push("/netbanking/transfer/success");
    }
    const failure = async () => {
        setLoading(true);
        fetch(`/api/v1/webhook/failure?token=${token}`);
        setLoading(false);
        router.push("/netbanking/transfer/fail"); 
    }
    
    if (isLoading)
        return <Loading loading/>

    if (!token || data.amount === undefined) {
        return <>
            <div className="text-3xl font-medium">PowerPay MockBank</div>
            <div className="text-xl font-medium">Transfer Not Found</div>
        </>
    }

    
    return (<>
    <Loading loading={loading} />
    <div className="w-svw h-svh overflow-hidden flex flex-col items-center md:justify-center bg-slate-100 text-black">
        <div className="w-[90%] sm:w-[45%] lg:w-[35%] xl:w-[30%] h-full  flex flex-col items-center py-5 gap-4">
            <div className="text-xl font-medium font-raleway">PowerPay MockBank</div>
            <div className="w-full h-fit min-h-20 rounded-xl shadow-xl border border-slate-300 flex flex-col items-center gap-2 p-2 bg-slate-700 text-slate-200">
                <h2 className="text-xl">Money Transfer</h2>
                <div className="flex gap-1">
                    <p className="text-slate-400">Transfer Amount:</p><p className="font-semibold ">{data.amount} INR </p>
                </div>
                <div className="flex gap-1">
                    <p className="text-slate-400">Beneficiary Name:</p><p className="font-semibold ">PowerPayWallet </p>
                </div>
            </div>
            {
                loggedIn ?
                    <CompleteForm onFailure={failure} onSuccess={success}/>
                :
                    <LoginForm onSubmit={onLoginSubmit}/> 
            }
        </div>
    </div>
    </>)
}
