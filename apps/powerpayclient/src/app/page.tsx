"use client";
// import { RootState } from "@powerpaywallet/store"; 
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "@powerpaywallet/store/slices";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@powerpaywallet/ui/appbar";
import { Sidebar } from "@powerpaywallet/ui/Sidebar";
import { useSidebarConfig } from "../hooks/useSidebar";

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();


  return (
    <>
          <Appbar />
        <div>
          {
              <div className="text-3xl bg-purple-400">Hello Client!</div>
          }
      </div>
    </>
  );
}
