// import {withAuth} from 'next-auth/middleware'
// import { NextResponse } from 'next/server';

import { NextResponse } from "next/server"

// export default withAuth(
//     function middleware(req){
//         return NextResponse.next()
//     },
//     {
//         callbacks: {
//             authorized({ token }) {
//                 return !token
//             }
//         }
//     }
// );

// export const config = {
//     // matcher: ["/api/wallet/:path*"]
// }

const middleware = () => {
    return NextResponse.next();
}

export default middleware