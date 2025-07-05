"use client";
import { RootState } from "@powerpaywallet/store"
import { useSelector } from "react-redux"

export const LoadingComponent = () => {
    const loading = useSelector((state: RootState) => state.states.loading);

    if (!loading) return (<></>);

    return (<div className="w-dvw h-svh bg-black/85 fixed top-0 left-0 flex items-center justify-center z-[100]">
        <div className="spinner"></div>
    </div>)

}