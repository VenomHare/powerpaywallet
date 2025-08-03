"use client";
import React, { FormEvent, useEffect, useState } from 'react'
import { History, RefreshCcw } from "lucide-react"
import { addFundsRequestSchema, BANKSERVERS, Transaction } from '@powerpaywallet/schemas/client';
import { useSelector } from 'react-redux';
import { RootState } from '@powerpaywallet/store';
import { update } from '@powerpaywallet/store/slices';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import axios, { AxiosError } from 'axios';
import { alert } from '../../../components/alerts';
import { signIn, useSession } from 'next-auth/react';
import { WrapFadeTransition } from '../../../components/FadeInPageTransition';
import { TransactionBlock } from '../../../components/Transaction';

const ADD_MONEY_BUTTONS = [50, 100, 250, 500, 1000]

const WalletPage = () => {

    const [amount, setAmount] = useState(50);
    const [bank, setBank] = useState<BANKSERVERS>("SELECT")
    const { status, balance, transactions } = useSelector((state: RootState) => state.wallet);
    const appDispatch = useAppDispatch();
    // const dispatch = useDispatch();
    const session = useSession();

    const addMoney = async (e: FormEvent) => {
        e.preventDefault();
        if (bank == "SELECT") {
            return
        }
        const body: addFundsRequestSchema = {
            amount: amount * 100,
            provider: bank
        }
        try {
            const req = await axios.post("/api/wallet/funds/add", body, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const w = 400;
            const h = 600;

            const left = window.screenX + (window.innerWidth - w) / 2;
            const top = window.screenY + (window.innerHeight - h) / 2;

            window.open(
                req.data.url,
                "_blank",
                `width=${w},height=${h},left=${left},top=${top}`
            );
            appDispatch(update());
            alert(appDispatch, `Complete the Payment in Popped Up window to procced`, "info", {
                duration: 10000
            });

        }
        catch (err) {
            if (err instanceof AxiosError) {
                alert(appDispatch, `${err.response?.data.message}`, "error", {
                    duration: 3000
                });
            }
            else {
                alert(appDispatch, `Something Went Wrong`, "error", {
                    duration: 3000
                });
            }
        }

    }

    useEffect(() => {
        if (session.status == "unauthenticated") {
            signIn()
        }
    }, [session])


    useEffect(() => {
        appDispatch(update())
    }, [appDispatch]);

    return (
        <div className='w-full min-h-[85svh] p-3 sm:p-10 flex flex-col gap-5 '>
            <div className='w-full flex justify-between px-5'>
                <h1 className="text-3xl sm:text-4xl h-[20%] w-full font-[Manrope] font-bold">Wallet</h1>
                <button onClick={() => { appDispatch(update()) }} className='px-5 rounded-md cursor-pointer flex gap-2 items-center justify-center bg-slate-800 text-slate-100 text-sm sm:text-md'>
                    <RefreshCcw size={20} /> Refresh
                </button>
            </div>
            <div className="w-full flex flex-col xl:flex-row gap-4">
                <div className="w-full xl:w-[40%] 2xl:w-1/3 flex flex-col lg:flex-row xl:flex-col items-center lg:items-start gap-5">
                    <div className="min-h-[10svh] max-w-lg lg:max-w-[none] h-fit xl:h-auto w-full rounded-md shadow-lg shadow-slate-400 border border-slate-400 p-3 sm:p-5 flex flex-col gap-2 bg-gradient-to-tl from-slate-50 via-slate-400/30 to-slate-100">
                        <h3 className="text-xl sm:text-2xl font-semibold font-[Manrope]">Balance</h3>
                        <hr className='text-slate-400' />
                        {
                            (balance !== undefined && status == "success") && <>
                                <div className="flex items-center justify-between mt-5 pb-2 mx-4 border-b-1 border-slate-400">
                                    <div className="text-sm sm:text-lg font-medium font-[Manrope]">Available Balance: </div>
                                    <div className="text-md sm:text-lg font-semibold font-[Manrope]">₹{balance.available / 100}</div>
                                </div>

                                <div className="flex items-center justify-between mt-2 pb-2 mx-4 border-b-1 border-slate-400">
                                    <div className="text-sm sm:text-lg font-medium font-[Manrope]">Locked Balance: </div>
                                    <div className="text-md sm:text-lg font-semibold font-[Manrope]">₹{balance.locked / 100}</div>
                                </div>
                                <div className="flex items-center justify-between mt-5 px-2">
                                    <div className="text-lg sm:text-xl font-medium font-[Manrope]">Total Balance: </div>
                                    <div className="text-2xl sm:text-3xl font-semibold font-[Manrope]">₹{balance.total / 100}</div>
                                </div>
                            </>
                        }
                        {
                            (status == "failed") && <div className='p-3 w-full h-full flex items-center justify-center text-lg font-[Manrope] text-red-500 font-semibold'>
                                Failed to Fetch Balance
                            </div>
                        }
                        {
                            (status == "loading") && <div className='p-3 w-full h-full flex items-center justify-center text-lg font-[Manrope] text-slate-500 font-semibold'>
                                Loading Wallet Balance...
                            </div>
                        }

                    </div>
                    <div className="min-h-[10svh] max-w-lg lg:max-w-[none]  h-auto w-full rounded-xl shadow-lg shadow-slate-400 border border-slate-400 p-3 sm:p-5 flex flex-col gap-2">
                        <h3 className="text-xl sm:text-2xl font-semibold font-[Manrope]">Add Money</h3>
                        <hr className='text-slate-400' />
                        <form className='w-full h-full' onSubmit={addMoney}>
                            <div className="flex flex-col w-full mt-4">
                                <label htmlFor="amount" className="text-sm sm:text-md font-semibold font-[Manrope]">Amount</label>

                                <input id="amount"
                                    value={amount}
                                    type="number"
                                    min={50}
                                    onChange={(e) => { if (/^\d+(\.\d{0,2})?$/.test(e.target.value)) { setAmount(parseInt(e.target.value)) } }}
                                    className='my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-lg sm:text-2xl' />

                                <div className="w-full flex flex-wrap sm:flex-nowrap gap-1">
                                    {
                                        ADD_MONEY_BUTTONS.map(val =>
                                            <button
                                                type="button"
                                                key={val}
                                                className='bg-slate-500/30 cursor-pointer text-md sm:text-lg w-fit sm:w-full font-medium px-3 rounded border'
                                                onClick={() => { setAmount(am => am + val) }}
                                            >
                                                +{val}
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-4">
                                <label htmlFor="bank" className="text-sm sm:text-md font-semibold font-[Manrope]">Bank</label>
                                <select
                                    className="my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-md sm:text-xl"
                                    id="bank" required
                                    onChange={(e) => { setBank(e.target.value as BANKSERVERS) }}
                                    value={bank}
                                >
                                    <option className='bg-slate-500/30 cursor-pointer text-sm sm:text-lg w-full font-medium px-3 rounded border' value="SELECT">--SELECT--</option>
                                    <option className='bg-slate-500/30 cursor-pointer text-sm sm:text-lg w-full font-medium px-3 rounded border' value="POWERPAY_MOCKBANK">PowerPay MockBank</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full mt-4 text-sm sm:text-lg">
                                <button type='submit' className='w-full border border-slate-500 rounded bg-slate-900 text-slate-300 py-2 font-[Manrope] font-medium cursor-pointer'>
                                    Add Money
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full xl:w-[60%] 2xl:w-2/3 ">
                    <div className="h-[75svh] p-3 sm:p-6 w-full rounded-xl shadow-xl shadow-slate-400 border border-slate-400 flex flex-col gap-2">
                        <h3 className="text-lg sm:text-2xl font-semibold font-[Manrope]">Transaction History</h3>
                        <hr className='text-slate-400' />
                        {
                            transactions.length < 1 ?
                                <div className="w-full h-full flex flex-col items-center justify-center text-lg text-slate-500 font-[Manrope] gap-4">
                                    <History size={65} className='text-slate-400' />
                                    Looks like you haven't made any transactions yet
                                </div>
                                :
                                <div className="w-full h-full flex flex-col text-lg pe-1 text-slate-500 font-[Manrope] gap-2 overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300">
                                    {
                                        transactions.map((tx, i) => (i < 10) &&
                                            <TransactionBlock type={'tnx'} transaction={tx} key={tx.id} />
                                        )
                                    }
                                    {
                                        transactions.length > 10 &&
                                        <button className='w-full h-[7svh] rounded bg-slate-900 text-slate-300 font-semibold p-2 my-4 cursor-pointer shadow shadow-slate-500'>
                                            View All Transactions
                                        </button>
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WrapFadeTransition(WalletPage);
