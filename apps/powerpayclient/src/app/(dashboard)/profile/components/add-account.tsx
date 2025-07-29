"use client";
import { AppDispatch, RootState } from "@powerpaywallet/store";
import { Button } from "@powerpaywallet/ui/button"
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alert } from "../../../../components/alerts";
import { getSavedBankAccounts, SaveBankAccount } from "../../../actions/mislaneous/BankAccount";
import { setAddAccountInProfilePopup, updateSavedBankAccounts } from "@powerpaywallet/store/slices";
import { ArrowLeft } from "lucide-react";

const IFSC_CODE_PATTERN = /^[A-Z]{4}0[A-Z0-9]{6}$/

export const AddAccountPopupForProfilePage = () => {
    const { savedBankAccounts } = useSelector((state: RootState) => state.bankAccounts)
    const { addAccountInProfilePopup } = useSelector((state: RootState) => state.states)
    const dispatch = useDispatch();
    const appDispatch = useDispatch<AppDispatch>();

    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIFSCCode] = useState("");
    const [holderName, setHolderName] = useState("");
    const [label, setLabel] = useState("");

    useEffect(() => {
        if (savedBankAccounts.length == 0) {
            refreshAccounts();
        }

    }, [savedBankAccounts.length, appDispatch])


    const handleAddAccount = async (e: FormEvent) => {
        e.preventDefault();

        try {
            if (!IFSC_CODE_PATTERN.test(ifscCode)) {
                alert(appDispatch, "Invalid IFSC Code", "error");
                return
            }
            if (!/^\d{9,18}$/.test(accountNumber)) {
                alert(appDispatch, "Invalid Account Number", "error");
                return
            }

            await SaveBankAccount(accountNumber, ifscCode, holderName, label);
            resetForm();
            alert(appDispatch, "Added Bank Account", "success");
            refreshAccounts();

        }
        catch (err) {
            console.log(err);
            alert(appDispatch, "Something went wrong", "error");
        }
    }

    const refreshAccounts = () => {
        appDispatch(updateSavedBankAccounts(getSavedBankAccounts))
    }

    const resetForm = () => {
        setAccountNumber("");
        setHolderName("");
        setIFSCCode("");
        setLabel("");
    }

    const ClosePopup = () => {
        resetForm();
        dispatch(setAddAccountInProfilePopup(false))
    }

    if (!addAccountInProfilePopup) {
        return (<></>)
    }

    return (<>
        <div className="z-[99] w-dvw h-dvh fixed top-0 left-0 bg-black/80 flex items-end sm:items-center justify-center">
            <div className="w-[85dvw] md:w-[70dvw] lg:w-[50dvw] h-[85dvh] sm:h-[80dvh] bg-slate-300 rounded-xl p-4">
                <p className="flex items-center gap-1 text-slate-500 cursor-pointer" onClick={ClosePopup}> <ArrowLeft /> Go Back</p>

                <h3 className="text-2xl font-medium font-[Manrope]">Add New Bank Account</h3>
                <form className="w-full max-h-full ps-5 overflow-y-auto" onSubmit={handleAddAccount}>
                    <div className="flex flex-col font-[Manrope] py-5 ">
                        <label htmlFor="accountNumber" className="">Account Number </label>
                        <div className="text-xs text-slate-400 font-sans">Please double-check your account number to avoid failed transactions.</div>
                        <input
                            type="text"
                            className=" border border-slate-400 shadow-md shadow-slate-400 p-1 px-2 w-[90%] sm:w-2/3 md:w-1/2 rounded mt-2"
                            id="accountNumber"
                            autoComplete="off"
                            required
                            value={accountNumber}
                            onChange={(e) => { setAccountNumber(e.target.value) }}
                            min={11}
                        />
                    </div>

                    <div className="flex flex-col font-[Manrope] py-2 ">
                        <div className="flex gap-2 items-center ">
                            <label htmlFor="ifscCode" className="">IFSC Code</label>
                            <Link href={"https://www.rbi.org.in/Scripts/IFSCMICRDetails.aspx"} target="blank" className="text-xs text-blue-400 bg-blue-200 p-[2px] px-2 rounded">How to Find?</Link>
                        </div>
                        <div className="text-xs text-slate-400 font-sans">Check Passbook or use the above button to find IFSC Code.</div>
                        <input
                            type="text"
                            className=" border border-slate-400 shadow-md shadow-slate-400 p-1 px-2 w-[90%] sm:w-2/3 md:w-1/2 rounded mt-2"
                            id="ifscCode"
                            autoComplete="off"
                            value={ifscCode}
                            onChange={(e) => { setIFSCCode(e.target.value) }}
                            required
                        />
                    </div>

                    <div className="flex flex-col font-[Manrope] py-5 ">
                        <label htmlFor="holderName" className="">Account Holder's Name</label>
                        <div className="text-xs text-slate-400 font-sans">Include full name as per bank documents, without abbreviations.</div>
                        <input
                            type="text"
                            className=" border border-slate-400 shadow-md shadow-slate-400 p-1 px-2 w-[90%] sm:w-2/3 md:w-1/2 rounded mt-2"
                            id="holderName"
                            autoComplete="off"
                            value={holderName}
                            onChange={(e) => { setHolderName(e.target.value) }}
                            required
                        />
                    </div>

                    <div className="flex flex-col font-[Manrope] py-5 ">
                        <label htmlFor="label" className="">Nickname</label>
                        <div className="text-xs text-slate-400 font-sans">Give this account a nickname like "Main Account" or "Travel Wallet".</div>
                        <input
                            type="text"
                            className=" border border-slate-400 shadow-md shadow-slate-400 p-1 px-2 w-[90%] sm:w-2/3 md:w-1/2 rounded mt-2"
                            id="label"
                            autoComplete="off"
                            value={label}
                            onChange={(e) => { setLabel(e.target.value) }}
                            maxLength={80}
                            required
                        />
                    </div>

                    <Button type="submit" onClick={() => { }}>
                        Add Bank Account
                    </Button>

                </form>
            </div>
        </div>
    </>)
}