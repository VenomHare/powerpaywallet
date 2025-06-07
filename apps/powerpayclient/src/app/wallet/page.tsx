"use client";
import React, { FormEvent, useEffect, useState } from 'react'
import { History, RefreshCcw } from "lucide-react"
import { addFundsRequestSchema, BANKSERVERS, Transaction } from '@powerpaywallet/schemas/client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@powerpaywallet/store';
import { showAlert, update } from '@powerpaywallet/store/slices';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import axios, { AxiosError } from 'axios';
import { alert } from '../../components/alerts';

const ADD_MONEY_BUTTONS = [50, 100, 250, 500, 1000]

const WalletPage = () => {

    const [amount, setAmount] = useState(50);
    const [bank, setBank] = useState<BANKSERVERS>("SELECT")
    const { status, balance, transactions } = useSelector((state: RootState) => state.wallet);
    const appDispatch = useAppDispatch();
    // const dispatch = useDispatch();

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
        appDispatch(update())
    }, []);

    return (
        <div className='w-full min-h-[85svh] p-10 flex flex-col gap-5'>
            <div className='w-full flex justify-between px-5'>
                <h1 className="text-4xl h-[20%] w-full font-[Manrope] font-bold">Wallet</h1>
                <button onClick={()=>{appDispatch(update())}} className='px-5 rounded-md cursor-pointer flex gap-2 items-center justify-center bg-slate-800 text-slate-100 text-md'>
                    <RefreshCcw size={20} /> Refresh
                </button>
            </div>
            <div className="w-full flex gap-4">
                <div className="w-1/3 flex flex-col gap-5">
                    <div className="min-h-[10svh] h-auto w-full rounded-xl shadow-lg shadow-slate-400 border border-slate-400 p-5 flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold font-[Manrope]">Balance</h3>
                        <hr className='text-slate-400' />
                        {
                            (balance !== undefined && status == "success") && <>
                                <div className="flex items-center justify-between mt-5 pb-2 mx-4 border-b-1 border-slate-400">
                                    <div className="text-lg font-medium font-[Manrope]">Available Balance: </div>
                                    <div className="text-lg font-semibold font-[Manrope]">{balance.available / 100} INR</div>
                                </div>

                                <div className="flex items-center justify-between mt-2 pb-2 mx-4 border-b-1 border-slate-400">
                                    <div className="text-lg font-medium font-[Manrope]">Locked Balance: </div>
                                    <div className="text-lg font-semibold font-[Manrope]">{balance.locked / 100} INR</div>
                                </div>
                                <div className="flex items-center justify-between mt-5 px-2">
                                    <div className="text-xl font-medium font-[Manrope]">Total Balance: </div>
                                    <div className="text-3xl font-semibold font-[Manrope]">{balance.total / 100} INR</div>
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
                    <div className="min-h-[10svh] h-auto w-full rounded-xl shadow-lg shadow-slate-400 border border-slate-400 p-5 flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold font-[Manrope]">Add Money</h3>
                        <hr className='text-slate-400' />
                        <form className='w-full h-full' onSubmit={addMoney}>
                            <div className="flex flex-col w-full mt-4">
                                <label htmlFor="amount" className="text-md font-semibold font-[Manrope]">Amount</label>

                                <input id="amount"
                                    value={amount}
                                    type="number"
                                    min={50}
                                    onChange={(e) => { /^\d+(\.\d{0,2})?$/.test(e.target.value) && setAmount(parseInt(e.target.value)) }}
                                    className='my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-2xl' />

                                <div className="w-full flex gap-1">
                                    {
                                        ADD_MONEY_BUTTONS.map(val =>
                                            <button
                                                type="button"
                                                key={val}
                                                className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border'
                                                onClick={(e) => { setAmount(am => am + val) }}
                                            >
                                                +{val}
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-4">
                                <label htmlFor="bank" className="text-md font-semibold font-[Manrope]">Bank</label>
                                <select
                                    className="my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-xl"
                                    id="bank" required
                                    onChange={(e) => { setBank(e.target.value as BANKSERVERS) }}
                                    value={bank}
                                >
                                    <option className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border' value="SELECT">--SELECT--</option>
                                    <option className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border' value="POWERPAY_MOCKBANK">PowerPay MockBank</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full mt-4">
                                <button type='submit' className='w-full border border-slate-500 rounded bg-slate-900 text-slate-300 py-2 font-[Manrope] font-medium cursor-pointer'>
                                    Add Money
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="h-[75svh] p-6 w-full rounded-xl shadow-xl shadow-slate-400 border border-slate-400 flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold font-[Manrope]">Transaction History</h3>
                        <hr className='text-slate-400' />
                        {
                            transactions.length < 1 ?
                                <div className="w-full h-full flex flex-col items-center justify-center text-lg text-slate-500 font-[Manrope] gap-4">
                                    <History size={65} className='text-slate-400' />
                                    Looks like you haven't made any transactions yet
                                </div>
                                :
                                <div className="w-full h-full flex flex-col text-lg text-slate-500 font-[Manrope] gap-2 overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300">
                                    {
                                        transactions.map((tx, i) => (i <= 10) &&
                                            <OnRampTransaction transaction={tx} key={tx.id} />
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


const OnRampTransaction = ({ transaction }: { transaction: Transaction }) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (<>
        <div className='min-h-[7svh] h-fit rounded border-[1px] border-slate-400/20 shadow p-2' key={transaction.id}>
            <div className="flex justify-between w-full h-full">
                <div className="flex flex-col">
                    <div className={"text-slate-950 font-medium" + ` ${transaction.status == "Failure" && "line-through"}`}>{transaction.statement}</div>
                    <div className="text-sm text-slate-500 ">#{transaction.id}</div>
                </div>
                <div className="flex gap-4 items-center">
                    {
                        transaction.status == "Success" &&
                        <div className='text-sm text-green-600'>Success</div>
                    }
                    {
                        transaction.status == "Processing" &&
                        <div className='text-sm text-yellow-600'>Processing</div>
                    }
                    {
                        transaction.status == "Failure" &&
                        <div className='text-sm text-red-600'>Failed</div>
                    }
                    <div className="flex flex-col items-end">
                        <div className={"text-slate-950 font-medium " + ` ${transaction.status == "Failure" && "line-through"}`}> {transaction.type == "Credit" ? "+" : "-"} {transaction.amount / 100} INR</div>
                        <div className="text-sm text-slate-500 ">{new Date(transaction.time).toLocaleString("en-IN", {
                            timeZone: userTimeZone,
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                        })}</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default WalletPage