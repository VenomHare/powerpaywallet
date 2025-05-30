import { TriangleAlert } from "lucide-react";
import { FormEvent } from "react";

interface Props {
    onSuccess : () => void;
    onFailure : () => void
}

export const CompleteForm = ({onSuccess, onFailure}: Props) => {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
  return (
    <>
      <form onSubmit={onSubmit} className="w-full h-fit min-h-20 rounded-xl shadow-xl border border-slate-300 flex flex-col items-center p-2 gap-5">
        <h3 className="text-xl font-semibold">Complete Transfer</h3>
        <h4>Processing Payment...</h4>
        <div className="w-[80%] flex flex-col lg:flex-row gap-2 ">
            <button className="border p-2 w-full rounded-lg text-slate-200 border-green-400 bg-green-600/80 cursor-pointer" onClick={onSuccess}>Success</button>
            <button className="border p-2 w-full rounded-lg text-slate-200 border-red-400 bg-red-700/80 cursor-pointer" onClick={onFailure}>Failure</button>
        </div>

      </form>
      <div className="w-full h-fit min-h-20 rounded-xl shadow-xl border-2 border-yellow-400 bg-yellow-500/40 flex flex-col items-center p-2">
        <h3 className="text-lg font-medium text-yellow-900 border-b-0 underline border-yellow-700 mb-2 flex items-center gap-2"><TriangleAlert/>MockBank Notice</h3>
        <p className="text-center text-yellow-700">Please select the transaction result to proceed with the mock transfer.</p>
      </div>
    </>
  );
};
