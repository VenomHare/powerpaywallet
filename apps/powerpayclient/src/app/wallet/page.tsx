"use client";
import React from 'react'
import { History } from "lucide-react"

const WalletPage = () => {


    return (
        <div className='w-full min-h-[85svh] p-10 flex flex-col gap-5'>
            <div className="text-4xl h-[20%] w-full font-[Manrope] font-bold">Wallet</div>
            <div className="w-full flex gap-4">
                <div className="w-1/3 flex flex-col gap-5">
                    <div className="min-h-[10svh] h-auto w-full rounded-xl shadow-lg shadow-slate-400 border border-slate-400 p-5 flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold font-[Manrope]">Balance</h3>
                        <hr className='text-slate-400' />

                        <div className="flex items-center justify-between mt-5 pb-2 mx-4 border-b-1 border-slate-400">
                            <div className="text-lg font-medium font-[Manrope]">Available Balance: </div>
                            <div className="text-lg font-semibold font-[Manrope]">{"400.00 INR"}</div>
                        </div>

                        <div className="flex items-center justify-between mt-2 pb-2 mx-4 border-b-1 border-slate-400">
                            <div className="text-lg font-medium font-[Manrope]">Locked Balance: </div>
                            <div className="text-lg font-semibold font-[Manrope]">{"1000.00 INR"}</div>
                        </div>
                        {/* <hr className='text-slate-400'/> */}

                        <div className="flex items-center justify-between mt-5 px-2">
                            <div className="text-xl font-medium font-[Manrope]">Total Balance: </div>
                            <div className="text-3xl font-semibold font-[Manrope]">{"1400.00 INR"}</div>
                        </div>

                    </div>
                    <div className="min-h-[10svh] h-auto w-full rounded-xl shadow-lg shadow-slate-400 border border-slate-400 p-5 flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold font-[Manrope]">Add Money</h3>
                        <hr className='text-slate-400' />
                        <form className='w-full h-full'>
                            <div className="flex flex-col w-full mt-4">
                                <label htmlFor="amount" className="text-md font-semibold font-[Manrope]">Amount</label>
                                <input id="amount" type="number"
                                    onChange={(e)=>{/^\d+(\.\d{0,2})?$/.test(e.target.value)}}
                                    className='my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-2xl' />
                                <div className="w-full flex gap-1">
                                    <button className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border'>+50</button>
                                    <button className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border'>+100</button>
                                    <button className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border'>+250</button>
                                    <button className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border'>+500</button>
                                    <button className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border'>+1000</button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-4">
                                <label htmlFor="bank" className="text-md font-semibold font-[Manrope]">Bank</label>
                                <select className="my-2 border border-slate-500 bg-slate-400/40 p-1 rounded font-semibold font-[Manrope] text-xl" id="bank" required>
                                    <option className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border' value="SELECT">--SELECT--</option>
                                    <option className='bg-slate-500/30 cursor-pointer text-lg w-full font-medium px-3 rounded border' value="POWERPAY_MOCKBANK">PowerPay MockBank</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full mt-4">
                                <button type='submit' className='w-full border border-slate-500 rounded bg-slate-900 text-slate-300 py-2 font-[Manrope] font-medium cursor-pointer'>Add Money</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="h-[75svh] p-6 w-full rounded-xl shadow-xl shadow-slate-400 border border-slate-400 flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold font-[Manrope]">Transaction History</h3>
                        <hr className='text-slate-400' />
                        {
                            false &&
                                <div className="w-full h-full flex flex-col items-center justify-center text-lg text-slate-500 font-[Manrope] gap-4">
                                    <History size={65} className='text-slate-400' />
                                    Looks like you haven't made any transactions yet
                                </div>
                        }
                        <div className="w-full h-full flex flex-col text-lg text-slate-500 font-[Manrope] gap-2 overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300">
                            <OnRampTransaction id={1} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={2} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={3} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <OnRampTransaction id={4} label='Recieved Cash' date='Sat Mar 30 2025' amount={40040} />
                            <button className='w-full h-[7svh] rounded bg-slate-900 text-slate-300 font-semibold p-2 my-4 cursor-pointer shadow shadow-slate-500'>
                                View All Transactions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface TransactionProps {
    id: number
    label: string
    date: string
    amount: number
}
const OnRampTransaction = ({ id, label, date, amount }: TransactionProps) => {

    return (<>
        <div className='min-h-[7svh] h-fit rounded border-[1px] border-slate-400/20 shadow p-2'>
            <div className="flex justify-between w-full h-full">
                <div className="flex flex-col">
                    <div className="text-slate-950 font-medium">{label}</div>
                    <div className="text-sm text-slate-500 ">#{id}</div>
                </div>

                <div className="flex flex-col items-end">
                    <div className="text-slate-950 font-medium"> {"+"} {amount / 100} INR</div>
                    <div className="text-sm text-slate-500 ">{date}</div>
                </div>
            </div>
        </div>
    </>)
}

export default WalletPage