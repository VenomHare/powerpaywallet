"use client";

import { setLoading, setProfileTab, updateSavedBankAccounts } from "@powerpaywallet/store/slices";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editAccountData, getAccountById } from "../../../actions/profile/bankAccount";
import { Button } from "@powerpaywallet/ui/button";
import Link from "next/link";
import { AppDispatch } from "@powerpaywallet/store";
import { alert } from "../../../../components/alerts";
import { getSavedBankAccounts } from "../../../actions/mislaneous/BankAccount";


const EditAccountPage = () => {

    const searchParams = useSearchParams();
    const accountId = searchParams.get("acid")
    const router = useRouter();
    const dispatch = useDispatch();
    const appDispatch = useDispatch<AppDispatch>();

    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIFSCCode] = useState("");
    const [holderName, setHolderName] = useState("");
    const [label, setLabel] = useState("");

    const getAccountData = async (id: number) => {
        dispatch(setLoading(true));
        const data = await getAccountById(id);
        dispatch(setLoading(false));
        if (data == undefined) {
            cancelEdit();
        }
        else {
            setAccountNumber(data.accountNumber);
            setHolderName(data.holderName);
            setIFSCCode(data.bankCode);
            setLabel(data.label);
        }
    }

    const cancelEdit = () => {
        dispatch(setProfileTab("bankaccounts"));
        router.push("/profile");
    }

    const handleAddAccount = async (e: FormEvent) => {
        e.preventDefault();
        if (!accountId) {
            return
        }
        try {
            await editAccountData({
                id: parseInt(accountId),
                holderName,
                accountNumber,
                bankCode: ifscCode,
                label
            })
            alert(appDispatch, "Saved Account changes", "success");
            appDispatch(updateSavedBankAccounts(getSavedBankAccounts))
            cancelEdit();
        }
        catch (error) {
            console.log(error);
            alert(appDispatch, "Something went wrong", "error");
        }
    }

    useEffect(() => {
        if (accountId == undefined || accountId == null) {
            cancelEdit();
        }
        else {
            getAccountData(parseInt(accountId));
        }

    }, [accountId])



    return (<>
        <form className="w-full max-h-full ps-5 py-5 overflow-y-auto bg-slate-200" onSubmit={handleAddAccount}>

            <h2 className="text-3xl font-bold font-[Manrope]">
                Edit your account details
            </h2>
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

            <div className="flex flex-col font-[Manrope] pb-5 ">
                <label htmlFor="label" className="">Nickname</label>
                <div className="text-xs text-slate-400 font-sans">Give this account a nickname like "Main Account" or "Travel Wallet".</div>
                <input
                    type="text"
                    className=" border border-slate-400 shadow-md shadow-slate-400 p-1 px-2 w-[90%] sm:w-2/3 md:w-1/2 rounded mt-2"
                    id="label"
                    autoComplete="off"
                    value={label}
                    onChange={(e) => { setLabel(e.target.value) }}
                    required
                />
            </div>
            <div className="flex gap-2">
                <Button variant={"ghost"} onClick={cancelEdit}>
                    Cancel
                </Button>
                <Button type="submit" onClick={() => {}}>
                    Save Changes
                </Button>
            </div>

        </form>
    </>)
}

export default EditAccountPage