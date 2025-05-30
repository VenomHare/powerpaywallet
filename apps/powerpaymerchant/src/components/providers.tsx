"use client";

import { store } from "@powerpaywallet/store"
import { SessionProvider } from "next-auth/react"
import React from "react"
import { Provider } from "react-redux"

interface Props {
    children: React.ReactNode
}

export function Providers({children}:Props) {
    
    return (<>
        <Provider store={store}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </Provider>
    </>)
}