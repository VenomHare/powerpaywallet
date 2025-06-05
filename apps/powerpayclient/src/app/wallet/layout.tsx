"use client";
import React from "react";
import { useSidebarConfig } from "../../hooks/useSidebar"
import { Sidebar } from "@powerpaywallet/ui/sidebar";
import { Appbar } from "@powerpaywallet/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { Providers } from "../../components/providers";

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Providers>
                <SubLayout>
                    {children}
                </SubLayout>
            </Providers>
        </>
    )
}

const SubLayout = ({children}: Props) => {
    const session = useSession();
    const { config } = useSidebarConfig();

    return (<>
        <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
        <Sidebar config={config}>
            {children}
        </Sidebar>

    </>)
}