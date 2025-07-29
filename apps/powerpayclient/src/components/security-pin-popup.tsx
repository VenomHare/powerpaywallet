"use client";
import { SecurityPinPopupAction, SecurityPopUpProps } from "@powerpaywallet/schemas/client"
import { ShieldCheck } from "lucide-react"
import { useEffect, useState } from "react"
import { getWalletTransferData } from "../app/actions/security/walletTransfer"
import { useDispatch } from "react-redux"
import { setLoading } from "@powerpaywallet/store/slices"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { alert } from "./alerts"
import { VerifySecurityPin } from "../app/actions/security/verify";
import { getWithdrawalRequestData } from "../app/actions/security/withdrawalRequest";

const CANCELLED_TRANSFER_ERROR_CODES = ["461", "462", "470", "479", "572"]

const dataRequestHandlers = {
    WALLET_MONEY_TRANSFER: getWalletTransferData,
    NO_ACTION: () => ({ type: "NO_ACTION" }),
    BANK_WITHDRAWAL: getWithdrawalRequestData
}

const SecurityPinPopUp = ({ open, setOpen, action, id, onClose }: SecurityPopUpProps) => {

    const [pin, setPin] = useState("");
    const [cannceled, setCannceled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [actionData, setActionData] = useState<SecurityPinPopupAction>({ type: "NO_ACTION" });
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    useEffect(() => {
        const makeDataRequest = async () => {
            const handler = dataRequestHandlers[action];
            try {
                dispatch(setLoading(true));
                if (id == 0) return;
                const data = await handler(id);
                setActionData(data);
            }
            catch {
                setErrorMessage("Something went wrong!");
                alert(appDispatch, `Something went wrong`, "error", {
                    duration: 3000
                })
            }
            finally {
                dispatch(setLoading(false));
            }
        }

        makeDataRequest();
    }, [id, action, appDispatch, dispatch])


    const handleAuthorize = async () => {
        try {
            await VerifySecurityPin(pin, id, action);

            if (action == "WALLET_MONEY_TRANSFER" || action == "BANK_WITHDRAWAL") {
                onClose();
            }
            setErrorMessage("");
            setCannceled(false);

            setOpen(false);
        }
        catch (error) {
            const err = error as any;
            if (err.message && err.message.startsWith("Error ")) {
                const [code, message] = (err.message as string).split(":");
                if (code && message) {
                    setErrorMessage(message);
                    const errorCode = code.replace("Error ", "");
                    if (CANCELLED_TRANSFER_ERROR_CODES.includes(errorCode)) {
                        setCannceled(true);
                    }
                }
                else {
                    setErrorMessage("Something went wrong!");
                }
            }
            else {
                setErrorMessage("Something went wrong!");
            }

        }
    }

    if (!open) {
        return (<></>)
    }

    return (<>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center z-100">
            <div className="w-full sm:max-w-sm bg-slate-300 rounded-md border-1 border-slate-400/60 shadow-lg shadow-slate-400/60 p-4 flex flex-col items-center ">
                <h3 className="text-3xl font-bold flex flex-col justify-center italic">PowerPay Wallet</h3>
                <h4 className="text-md text-slate-500 font-normal flex flex-col justify-center">Security Checkpoint</h4>

                {/* Body */}
                <div className="w-full h-full flex flex-col items-center gap-4 my-5">
                    {action === "WALLET_MONEY_TRANSFER" && <MoneyTransferInfo actionData={actionData} />}
                    {action === "BANK_WITHDRAWAL" && <BankWithdrawInfo actionData={actionData} />}
                    {
                        !cannceled && <>
                            <div className="w-full flex flex-col items-center gap-2">
                                <label htmlFor="security_pin_input" className="font-[Manrope] font-semibold text-xl">Enter your Security Pin</label>
                                <input
                                    type="password"
                                    id="security_pin_input"
                                    placeholder="****"
                                    maxLength={4}
                                    onChange={(e) => { setPin(e.target.value) }}
                                    className="w-1/2 tracking-widest rounded text-4xl text-center border-1 border-slate-600 shadow-md shadow-slate-400"
                                    required />
                            </div>
                        </>
                    }
                    {
                        errorMessage !== "" &&
                        <div className="my-2 w-fit min-w-[80%] p-2 rounded  flex flex-col items-center font-[Manrope] font-semibold  border-1 border-red-500 bg-red-400/50 text-center text-balance">
                            {errorMessage}
                        </div>
                    }
                </div>
                <div className="my-4 w-full flex flex-col items-center font-[Manrope]">
                    {
                        cannceled ?
                            <>
                                <button onClick={() => {
                                    onClose();
                                    setErrorMessage("");
                                    setCannceled(false);
                                    setOpen(false)
                                }} className="flex items-center justify-center gap-2 border-1 border-slate-500 cursor-pointer w-full py-2 rounded-md text-slate-200 bg-slate-950 ">
                                    Close
                                </button>
                            </>
                            : <>
                                <button onClick={handleAuthorize} className="flex items-center justify-center gap-2 border-1 border-slate-500 cursor-pointer w-full py-2 rounded-md text-slate-200 bg-slate-950 ">
                                    <ShieldCheck />
                                    Authorize
                                </button>
                            </>
                    }
                </div>
            </div>
        </div>
    </>)
}

const MoneyTransferInfo = ({ actionData }: { actionData: SecurityPinPopupAction }) => {
    if (actionData.type === "WALLET_MONEY_TRANSFER") {
        return (<div className="w-full bg-slate-400 rounded p-2 my-2 flex flex-col items-center font-[Manrope]">
            <h4 className="font-semibold text-lg">Money Transfer</h4>
            <p className="font-semibold"><span className="text-slate-800 font-light">Beneficiary Name: </span>{actionData.toName}</p>
            <div className="w-full flex items-center justify-evenly">
                <p className="font-semibold"><span className="text-slate-800 font-light">To: </span>+91 {actionData.toNumber}</p>
                <p className="font-semibold"><span className="text-slate-800 font-light">Amount: </span>₹{actionData.amount} </p>
            </div>
        </div>
        )
    }
    else {
        return (<></>)
    }
}

const BankWithdrawInfo = ({ actionData }: { actionData: SecurityPinPopupAction }) => {

    if (actionData.type == "BANK_WITHDRAWAL") {
        return (<div className="w-full bg-slate-400 rounded p-2 my-2 flex flex-col items-center font-[Manrope]">
            <h4 className="font-semibold text-lg">Withdrawal Request</h4>
            <p className="font-semibold"><span className="text-slate-800 font-light">Account Number: </span>{actionData.accountNumber}</p>
            <p className="font-semibold"><span className="text-slate-800 font-light">Amount: </span>₹{actionData.amount / 100}</p>

        </div>)
    }
    else {
        return (<></>)
    }
}

export default SecurityPinPopUp

