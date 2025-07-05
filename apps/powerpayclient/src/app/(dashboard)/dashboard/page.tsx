"use client";
import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react";

const DashboardPage = () => {

    const session = useSession();

    useEffect(() => {
        if (session.status == "unauthenticated") {
            signIn();
        }
    }, [session])


    return (<>
        <div className="w-full h-full flex flex-col p-4">
            <h3 className="text-3xl font-semibold font-[Manrope] ">
                Welcome Back, {session.data?.user?.name}
            </h3>
        </div>
    </>)
}

export default DashboardPage