'use client';

import { store } from "@powerpaywallet/store";
import { SessionProvider } from "next-auth/react";
import React, { Suspense } from "react";
import { Provider } from "react-redux";

interface Props {
    children: React.ReactNode;
}

export function Providers({children}: Props){
    return (<>
        <Provider store={store}>
            <Suspense>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </Suspense>
        </Provider>
    </>)    
}