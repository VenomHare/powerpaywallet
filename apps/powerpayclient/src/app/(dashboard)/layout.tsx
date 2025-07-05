"use client";
import React, { useEffect } from "react";
import { useSidebarConfig } from "../../hooks/useSidebar"
import { Sidebar } from "@powerpaywallet/ui/sidebar";
import { Appbar } from "@powerpaywallet/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { Providers } from "../../components/providers";
import { AlertContainer } from "../../components/alerts";
import { LoadingComponent } from "../../components/loading";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@powerpaywallet/store";
import { updateProfileData } from "@powerpaywallet/store/slices";

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Providers>
                <SubLayout>
                    {children}
                    <LoadingComponent />
                    <AlertContainer />
                </SubLayout>
            </Providers>
        </>
    )
}

const SubLayout = ({ children }: Props) => {

    const session = useSession();
    const { config } = useSidebarConfig();
    const appDispatch = useDispatch<AppDispatch>();
    const { profileData } = useSelector((state: RootState) => state.states);

    useEffect(()=>{
        if (profileData == undefined) {
            appDispatch(updateProfileData());
        }
    },[])

    return (<>
        <Appbar signIn={signIn} signOut={signOut} status={session.status} />
        <Sidebar config={config}>
            {children}
        </Sidebar>

    </>)
}