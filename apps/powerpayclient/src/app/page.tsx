"use client";
import { Appbar } from "@powerpaywallet/ui/appbar";

export default function Home() {

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
