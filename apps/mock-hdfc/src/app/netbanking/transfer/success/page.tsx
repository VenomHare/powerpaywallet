"use client";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";

export default function SuccessPage(){

    const [timer, setTimer] = useState(10);

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
                <div className="w-full h-fit min-h-20 rounded-xl shadow-xl border-2 border-green-700 bg-slate-200 flex flex-col items-center gap-3 p-2 text-center ">
                    <h1 className="text-3xl font-semibold flex items-center gap-2 text-green-700">
                        <CircleCheckBig size={40}/>
                        Transfer Completed
                    </h1>
                    <p className="text-gray-600 text-sm">
                        You can now return to your application. This window will close automatically.
                    </p>

                    <div className="mt-4 text-sm text-gray-500 italic">
                        Thank you for using MockBank by PowerPay.
                    </div>

                    <p className="">This window will auto close in {timer}</p>
                </div>
            </div>
        </div>
    </>)
}