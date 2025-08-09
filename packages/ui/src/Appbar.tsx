'use client';
import { Menu } from "lucide-react";
import { Button } from "./button";
import "./globals.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "@powerpaywallet/store/slices";
import { RootState } from "@powerpaywallet/store";
import { AppbarProps } from "@powerpaywallet/schemas/client";
import { ProfileImage } from "./ProfileImage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export const Appbar = ({
    signIn,
    signOut,
    status
}: AppbarProps) => {

    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.sidebar);
    const { profileData } = useSelector((state: RootState) => state.states);
    const [profileOptionsPopup, setProfileOptionsPopup] = useState(false);
    const router = useRouter();
  
    const closeOptions = () => {
        setProfileOptionsPopup(false)
    }

    return <div className="sticky z-[101] top-0 left-0 flex w-[100%] min-h-[55px] h-[8svh] bg-slate-200 px-4 sm:px-10 py-2 justify-between shadow-lg shadow-slate-300  ">
        <div className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4 italic">
            {
                status == "authenticated" &&
                <div className="sm:hidden" onClick={() => { dispatch(setOpen(!isOpen)) }}><Menu /></div>
            }
            <Link href={"/"}>PowerPay</Link>
        </div>
        <div className="flex flex-col justify-center pt-2 ">

            {
                status == "unauthenticated" &&
                    <Button onClick={() => signIn !== undefined ? signIn() : router.push("/login") }> Login</Button>
            }

            {
                (status == "authenticated" && profileData !== undefined) &&
                <>
                    <ProfileImage onClick={() => { setProfileOptionsPopup(!profileOptionsPopup) }} profileName={profileData?.fullName || ""} url={profileData?.pfpUrl || "/user_placeholder.png"} size="small" />
                </>
            }
        </div>
        {
            profileOptionsPopup &&
            <div  className="z-[100] absolute top-[110%] right-[5dvw] sm:right-10 w-[65%] sm:w-60 min-h-20 bg-slate-200 rounded-md shadow-xl border border-slate-400/60 flex flex-col items-center gap-1">
                <div className="w-full flex items-center justify-between p-2 px-3 font-[Manrope]">
                    <ProfileImage profileName={profileData?.fullName || ""} url={profileData?.pfpUrl || "/user_placeholder.png"} size="small" />
                    <div className="flex flex-col items-end justify-around">
                        <div className="font-medium">{profileData?.fullName}</div>
                        <div className="font-light text-xs">{profileData?.email}</div>
                    </div>
                </div>
                <div className="bg-slate-400/50 w-full h-[1px]" />
                <button className="font-[Manrope] font-medium my-1 w-full cursor-pointer text-red-500" onClick={() => {
                    closeOptions();
                    signOut?.();
                    signIn?.();
                }}>Logout</button>
            </div>
        }
    </div>
}
