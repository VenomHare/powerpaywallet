"use client";
import { TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function FailPage(){

    const [timer, setTimer] = useState(15);

    useEffect(()=>{
        if (timer <= 0) {
            console.log("Closing window");
            window.close()
        }else{
            setTimeout(()=>{setTimer(t=>t-1)},1000);
        }
    },[timer]);

    return (<>
        <div className="w-svw h-svh overflow-hidden flex flex-col items-center md:justify-center bg-slate-100 text-black">
            <div className="w-[90%] sm:w-[45%] lg:w-[35%] xl:w-[30%] h-full  flex flex-col items-center py-5 gap-4">
                <div className="text-xl font-medium font-raleway">PowerPay MockBank</div>
                <div className="w-full h-fit min-h-20 rounded-xl shadow-xl border-2 border-red-700 bg-slate-200 flex flex-col items-center gap-3 p-2 text-center ">
                    <h1 className="text-3xl font-semibold flex items-center gap-2 text-red-700">
                        <TriangleAlert size={40}/>
                        Transfer Failed
                    </h1>
                    <p className="text-gray-700 mb-3 text-xl">
                        Unfortunately, the payment could not be completed due to a some error.
                    </p>

                    <p className="text-gray-600 text-sm">
                        If any amount was deducted, it will be automatically refunded to your bank account within <strong>24-48 hours</strong>.
                    </p>

                    <p className="">You can now close the window.This window will auto close in {timer}</p>
                </div>
            </div>
        </div>
    </>)
}