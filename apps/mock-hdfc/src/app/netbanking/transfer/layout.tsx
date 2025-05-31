import React, { Suspense } from "react"

export default ({children}:{
    children: React.ReactNode
}) => {
    return (<>
        <Suspense>
            {children}  
        </Suspense>
    </>)
}