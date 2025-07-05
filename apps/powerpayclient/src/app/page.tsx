"use client";
import { store } from "@powerpaywallet/store";
import { Appbar } from "@powerpaywallet/ui/appbar";
import { Provider } from "react-redux";

export default function Home() {

  return (
    <>
        <Provider store={store}>
          <Appbar status={"loading"} />
        </Provider>
        <div>
          {
              <div className="text-3xl bg-purple-400">Hello Client!</div>
          }
      </div>
    </>
  );
}
