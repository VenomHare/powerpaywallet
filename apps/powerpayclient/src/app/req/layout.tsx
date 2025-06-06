import React from "react";
import { Providers } from "../../components/providers";

interface Props {
    children: React.ReactNode
}
export default function Layout({children}: Props){
    return (<>
        <Providers>
            {children}
        </Providers>
    </>)
}