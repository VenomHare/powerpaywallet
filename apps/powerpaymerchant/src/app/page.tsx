"use client";
import { Button } from "@powerpaywallet/ui/button";
import { signIn } from "next-auth/react";


export default function Home() {
  return (
    <div>
      <div className="text-3xl bg-voilet-400">
        Hello Merchant
      </div>
      <Button onClick={signIn}>SignIN</Button>
    </div>
  );
}
