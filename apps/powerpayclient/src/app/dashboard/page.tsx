"use client";

import { useSession } from "next-auth/react";

// import { RootState } from "@powerpaywallet/store"; 
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "@powerpaywallet/store/slices";

export default function Home() {
    // const count = useSelector((state: RootState) => state.counter.value);
    // const dispatch = useDispatch();

    const session = useSession();

    return (
        <>
            <div>
                {
                    session.data?.user ?
                        <div className="text-3xl bg-purple-400">Hello {session.data.user.name}</div> :
                        <div className="text-3xl bg-purple-400">Hello Client!</div>
                }
            </div>
        </>
    );
}
