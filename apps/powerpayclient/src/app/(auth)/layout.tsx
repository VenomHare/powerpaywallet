import React from "react"
import { AlertContainer } from "../../components/alerts"
import { Providers } from "../../components/providers"
import { LoadingComponent } from "../../components/loading"

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (<>
        <Providers>
            {children}
            <AlertContainer />
            <LoadingComponent />
        </Providers>
    </>)
}

export default Layout