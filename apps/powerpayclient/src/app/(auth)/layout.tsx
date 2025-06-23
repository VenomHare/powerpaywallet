import React from "react"
import { AlertContainer } from "../../components/alerts"
import { Providers } from "../../components/providers"

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (<>
        <Providers>
            <AlertContainer />
            {children}
        </Providers>
    </>)
}

export default Layout