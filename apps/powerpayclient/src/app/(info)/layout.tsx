import React from "react"
import { Providers } from "../../components/providers"
import { Appbar } from "@powerpaywallet/ui/appbar"
import Footer from "../../components/footer"

interface Props {
    children: React.ReactNode
}
const Layout = ({ children }: Props) => {

    return (<>
        <Providers>
            <Appbar status={"unauthenticated"} />
            {children}
            <Footer />
        </Providers>
    </>)
}

export default Layout