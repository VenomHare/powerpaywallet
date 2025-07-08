"use client";
import { BsPersonFill } from "react-icons/bs"
import { FormEvent, useEffect, useState } from "react";
import { SelectWalletPopup } from "../../../components/select-wallet-popup";
import { signIn, useSession } from "next-auth/react";
import { WalletsSearchResult } from "@powerpaywallet/schemas/client";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { alert } from "../../../components/alerts";
import SecurityPinPopUp from "../../../components/security-pin-popup";
import { createTransfer } from "../../actions/walletTransfer/createTransfer";
import { WrapFadeTransition } from '../../../components/FadeInPageTransition';


const TransferPage = () => {

    const [amount, setAmount] = useState(0);
    const [selectPopup, setSelectPopup] = useState(false);
    const [securityPopup, setSecurityPopup] = useState(false);
    const [transferId, setTransferId] = useState(0);
    const [recieverData, setRecieverData] = useState<WalletsSearchResult>({
        name: "",
        number: ""
    })

    const appDispatch = useAppDispatch();
    const session = useSession();

    useEffect(() => {
        if (session.status == "loading") {
            return
        }

        if (session.status == "unauthenticated") {
            signIn()
        }
    }, [session])

    const handleTransfer = async (e: FormEvent) => {
        e.preventDefault();
        if (recieverData.name == "" || recieverData.number == "") {
            alert(appDispatch, `Select a valid Reciever Wallet`, "info", {
                duration: 3000
            });
            return
        }

        console.log("Start Transfer");

        try {
            const data = await createTransfer(recieverData.number, amount);
            if (!data.id) {
                console.log("No Transfer Id Found");
            }
            else {
                setTransferId(data.id);
                setSecurityPopup(true);
            }
        }
        catch (err) {
            console.log(err);
            alert(appDispatch, "Something went wrong", "error", {
                duration: 3000
            });
        }

    }

    return (<>
        <SecurityPinPopUp
            open={securityPopup}
            setOpen={setSecurityPopup}
            action={"WALLET_MONEY_TRANSFER"}
            id={transferId}
            onClose={() => {
                setAmount(0);
                setRecieverData({
                    name: "",
                    number: ""
                })
            }}
        />

        <div className="w-full h-[92dvh] overflow-x-hidden relative ">
            <SelectWalletPopup isPopupOpen={selectPopup} onClose={() => { setSelectPopup(false) }} setData={setRecieverData} />
            <div className="w-full h-full flex flex-col items-center justify-center ">
                <div className="w-full max-w-sm h-fit border-1 border-slate-400/40 shadow-xl shadow-slate-400/40 rounded-lg bg-slate-200 p-4">
                    <form onSubmit={handleTransfer} className="w-full h-fit flex flex-col items-center gap-0">
                        <div className="text-3xl font-semibold font-[Manrope]">
                            {"Transfer Money"}
                        </div>
                        <div className="w-3/4 text-md text-center text-slate-400 font-semibold font-[Manrope]">
                            {"Transfer money from your wallet someone's wallet"}
                        </div>
                        <div className="flex flex-col w-full mt-4">
                            <label htmlFor="amount" className="text-md font-semibold font-[Manrope]">Amount</label>

                            <div className="w-full flex items-center gap-4">
                                <input id="amount"
                                    value={amount}
                                    type="number"
                                    min={1}
                                    required
                                    onChange={(e) => { if (/^\d+(\.\d{0,2})?$/.test(e.target.value)) { setAmount(parseInt(e.target.value)) } }}
                                    className='w-1/2 my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-2xl' />

                                <p className="text-2xl font-semibold font-[Manrope]">INR</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full mt-4">
                            <label className="text-md font-semibold font-[Manrope]">Reciever's Name</label>

                            <div className="w-full flex items-center gap-4">
                                <div
                                    onClick={() => { setSelectPopup(true) }}
                                    className='w-2/3 my-2 text-slate-700 border border-slate-500 bg-slate-400/40 p-2 rounded font-semibold font-[Manrope] text-xl flex items-center gap-2'
                                >
                                    <BsPersonFill />
                                    {
                                        recieverData.name !== "" && <>
                                            <p>{recieverData.name}</p>
                                        </>
                                    }
                                </div>
                            </div>

                            <label className="text-md font-semibold font-[Manrope]">Reciever's Number</label>

                            <div className="w-full flex items-center gap-4">
                                <div
                                    onClick={() => { setSelectPopup(true) }}
                                    className='w-2/3 my-2 text-slate-700 border border-slate-500 bg-slate-400/40 p-2 rounded font-semibold font-[Manrope] text-xl flex items-center gap-2'
                                >
                                    <BsPersonFill />
                                    {
                                        recieverData.number !== "" && <>
                                            <p>+91 {recieverData.number}</p>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-3 cursor-pointer py-2 font-[Manrope] text-lg bg-slate-900 text-slate-300 rounded-md">Transfer</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default WrapFadeTransition(TransferPage);
