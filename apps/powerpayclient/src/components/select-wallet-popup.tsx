"use client";
import { WalletsSearchResult } from "@powerpaywallet/schemas/client"
import { AppDispatch, RootState } from "@powerpaywallet/store"
import { getWalletsByQuery } from "@powerpaywallet/store/slices"
import useTextDebounce from "@powerpaywallet/ui/useTextDebounce"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
interface Props {
    onClose: () => void
    isPopupOpen: boolean
    setData: (data: WalletsSearchResult) => void
}

export const SelectWalletPopup = ({ onClose, isPopupOpen, setData }: Props) => {

    const [input, setInput] = useState("")

    const text = useTextDebounce(input, 400);
    const { walletsSearchResult } = useSelector((state: RootState) => state.wallet);
    const appDispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        appDispatch(getWalletsByQuery(text));
    }, [text, appDispatch]);

    if (!isPopupOpen) {
        return (<></>)
    }
    
    const handleClick = (data: WalletsSearchResult) => {
        setData(data);
        onClose();
    }

    return (<>
        <div className="absolute top-0 right-0 w-full h-full bg-black/50 backdrop-blur-xs flex flex-col items-center justify-center ">
            <div onClick={() => { }} className="w-full max-w-sm h-[75%] bg-slate-200 border-1 border-slate-400/50 shadow-lg shadow-slate-400/50 rounded-lg animate-fadein flex flex-col items-center p-4 gap-2">
                <h3 className="text-2xl font-semibold font-[Manrope] ">Select Wallet </h3>

                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="wallet-search" className="text-md font-semibold font-[Manrope]">Enter Wallet Number</label>

                    <div className="w-full flex items-center gap-4">
                        <p className="text-2xl font-semibold font-[Manrope]">+91</p>
                        <input id="wallet-search"
                            type="number"
                            onChange={(e) => { setInput(e.target.value) }}
                            className='w-full my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-2xl' />
                    </div>
                </div>

                <div className="w-full overflow-y-auto min-h-[10dvh] h-full flex flex-col items-center font-[Manrope] p-1 gap-1">

                    {
                        walletsSearchResult.length == 0 ?
                            <p className="text-slate-700">No Results Found</p>
                            :
                            <>

                                {
                                    walletsSearchResult.map((wallet, i) => (
                                        <div onClick={()=>{handleClick(wallet)}} className="w-full h-fit p-2 rounded shadow-md shadow-slate-400/60 border-1 border-slate-400/60 flex flex-col items-center justify-around cursor-pointer hover:shadow-slate-900/60 transition-all duration-500" key={i}>
                                            <div className="w-full text-xl font-semibold">
                                                {wallet.name}
                                            </div>
                                            <div className="w-full text-lg text-slate-600">
                                                +91 {wallet.number} 
                                            </div>
                                        </div>
                                    ))
                                }

                            </>
                    }

                </div>

                <button onClick={onClose} className="w-full cursor-pointer py-2 font-[Manrope] text-lg bg-slate-900 text-slate-300 rounded-md">Nevermind</button>
            </div>
        </div>
    </>)
}
