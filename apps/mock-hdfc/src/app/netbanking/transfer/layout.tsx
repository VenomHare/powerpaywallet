import React, { Suspense } from "react"

export default function TransferLayout({children}:{
    children: React.ReactNode
}){
    return (<>
        <Suspense>
            {children}  
        </Suspense>
    </>)
}