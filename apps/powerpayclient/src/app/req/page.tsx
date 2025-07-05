"use client";
import { Appbar } from "@powerpaywallet/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

type Result = {
    type: "response",
    response: AxiosResponse 
} | {
    type: "error",
    error: AxiosError
}

export default function Req(){
    
    const [url, setURL] = useState("http://localhost:3001/api/");
    const [json, setJson] = useState("");
    const [method, setMethod] = useState<"POST"|"GET">("POST");
    const [result, setResult] = useState<Result>();
    
    const session = useSession();

    const SendReq = async (e: FormEvent) => {
        e.preventDefault();
        try{ 
            const res = await axios({
                url,
                method,
                data: json
            });
            setResult({
                type: "response",
                response: res
            });
        }
        catch(err){
            if (err instanceof AxiosError){
                setResult({
                    type: "error",
                    error: err
                })
            }
            else{
                console.error(err);
            }
        }
    }

    return(<>
        <Appbar signIn={signIn} signOut={signOut} status={session.status} />
        <div className="w-full flex justify-center">
            <form onSubmit={SendReq} className="flex flex-col w-[90%] md:w-2/3 lg:w-1/2 gap-2">
                <label htmlFor="url" >URL</label>
                <input type="text" name="url" id="url" className="border rounded p-1 shadow shadow-slate-500" value={url} onChange={(e)=>{setURL(e.target.value)}} />
                <label htmlFor="json">Body</label>
                <textarea name="json" id="json" value={json} onChange={(e)=>{setJson(e.target.value)}} spellCheck={false}
                    className="border rounded p-1 shadow shadow-slate-500"
                >
                </textarea>
                <select name="req" id="req" className="border rounded p-1 shadow shadow-slate-500" onChange={(e)=>{setMethod(e.target.value as "GET"|"POST")}}>
                    <option value="POST">POST</option>
                    <option value="GET">GET</option>
                </select>
                <button type="submit" className="border rounded shadow p-1 shadow-slate-500 bg-slate-950 text-slate-200">SEND</button>
            </form>
        </div>
        <div className="flex flex-col w-full items-center ">
            { 
                (result?.type == "response") && <>    
                    <h2>Result</h2>
                    <div className="flex flex-col w-[90%] md:w-2/3 lg:w-1/2 gap-2 border shadow rounded p-2">
                        <p>STATUS: {result.response.status} {result.response.statusText }</p>
                        <p>BODY</p>
                        <code className="w-full overflow-auto border rounded p-2 shadow bg-slate-300">
                            {JSON.stringify(result.response.data)}
                        </code>
                    </div>
                </>
            }
            {
                (result?.type == "error") && <>    
                <h2>Result</h2>
                <div className="flex flex-col w-[90%] md:w-2/3 lg:w-1/2 gap-2 border shadow rounded p-2">
                    <p>STATUS: {result.error.status} {result.error.response?.statusText }</p>
                    <p>BODY</p>
                    <code className="w-full overflow-auto border rounded p-2 shadow bg-slate-300">
                            {JSON.stringify(result.error.response?.data)}
                    </code>
                </div>
            </>
            }
        </div>
    </>)
}