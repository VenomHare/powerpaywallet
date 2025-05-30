import { TriangleAlert } from "lucide-react";
import React, { FormEvent } from "react";

interface Props {
  onSubmit: (e: FormEvent) => void;
}

export const LoginForm = ({ onSubmit }: Props) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="w-full h-fit min-h-20 rounded-xl shadow-xl border border-slate-300 flex flex-col items-center p-2 gap-1"
      >
        <h3 className="text-xl font-semibold">Complete Transfer</h3>
        <label htmlFor="loginid">Login Id</label>
        <input
          type="number"
          name="loginid"
          placeholder="123XXXXXXX"
          id="loginid"
          required
          className="w-[80%] text-xl py-1 rounded border border-slate-400 text-center"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-[80%] py-1 text-xl rounded border border-slate-400 text-center"
          required
        />
        <button
          className="w-[80%] py-2 mt-4 bg-slate-800 text-slate-50 rounded mb-3"
          type="submit"
        >
          Login to Net Banking
        </button>
      </form>
      <div className="w-full h-fit min-h-20 rounded-xl shadow-xl border-2 border-yellow-400 bg-yellow-500/40 flex flex-col items-center p-2">
        <h3 className="text-lg font-medium flex gap-2 items-center text-yellow-900 border-b-0 underline border-yellow-700 mb-2">
          <TriangleAlert/>MockBank Notice
        </h3>
        <p className="text-center text-yellow-700">
          Use any Login id and password for mock testing
        </p>
      </div>
    </>
  );
};
