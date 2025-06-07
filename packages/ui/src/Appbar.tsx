'use client';
import { Button } from "./button";
import "./globals.css";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin?: any,
    onSignout?: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="sticky top-0 left-0 flex w-[100%] h-[8svh] bg-slate-500 px-10 py-2 justify-between border-b px-4">
        <div className="text-3xl font-bold flex flex-col justify-center italic">
            PowerPay
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}