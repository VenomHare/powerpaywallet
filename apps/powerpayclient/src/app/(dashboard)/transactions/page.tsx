"use client";
import { WrapFadeTransition } from "../../../components/FadeInPageTransition"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@powerpaywallet/store";
import { TransactionBlock } from "../../../components/Transaction";
import { useEffect, useState } from "react";
import { setCurrentPage, updateFilteredTransactions } from "@powerpaywallet/store/slices";
import { Transaction } from "@powerpaywallet/schemas/client";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

const TransactionsPage = () => {
    const [dataRequestSent, setDataRequestSent] = useState(false);

    const { currentPage, limit, transactions, numberOfTransactions } = useSelector((state: RootState) => state.transactions);
    const appDispatch = useDispatch<AppDispatch>();
    const session = useSession();

    useEffect(() => {
        if (session.status == "unauthenticated") {
            signIn();
        }
    }, [session.status])


    useEffect(() => {
        if ((transactions.length == 0 && !dataRequestSent) || isNaN(numberOfTransactions)) {
            appDispatch(updateFilteredTransactions({ page: currentPage, limit }));
            setDataRequestSent(true)
        }
    }, [transactions, numberOfTransactions, appDispatch, currentPage, dataRequestSent, limit])

    const refresh = () => {
        appDispatch(updateFilteredTransactions({ limit, page: currentPage }));
    }


    return (<>
        <div className="w-full h-[92dvh] p-4 font-[Manrope] flex flex-col gap-2 bg-slate-100">
            <div className='w-full min-h-[10dvh] flex justify-between items-center flex-col sm:flex-row sm:px-5 gap-2'>
                <h1 className="text-2xl sm:text-4xl h-[20%] text-center font-[Manrope] font-bold">Transactions</h1>
                <button onClick={refresh} className='w-full sm:w-auto px-5 py-2 h-fit lg:h-auto rounded-md cursor-pointer flex gap-2 items-center justify-center bg-slate-800 text-slate-100 text-sm sm:text-md'>
                    <RefreshCcw size={20} /> Refresh
                </button>
            </div>
            {
                /*             
                Filters will added later
                <div className="w-full h-[5dvh]">
                    <Button onClick={() => { }}>Filters</Button>
                </div>
                 */
            }
            <div className="relative w-full h-full bg-red-400w-full max-h-full overflow-y-auto overflow-x-hidden flex flex-col ps-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300">
                {
                    transactions.length == 0 ? <>
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <Image src={"/not_found.png"} alt={"Not Found"} height={512} width={512} />
                            <p className="text-md xs:text-lg sm:text-2xl md:text-3xl text-balance text-center">No Transactions Found</p>
                        </div>
                    </> : <>
                        <TransactionsManager />
                    </>
                }
            </div>
        </div>
    </>)
}

const TransactionsManager = () => {
    const { transactions, currentPage, limit } = useSelector((state: RootState) => state.transactions);
    const appDispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        console.log(currentPage, limit);
        appDispatch(updateFilteredTransactions({ page: currentPage, limit }));
    }, [currentPage, limit, appDispatch])


    return (<>
        <div className="w-full hidden xs:grid xs:grid-cols-[0.25fr_1.5fr_0.75fr_2.5fr_0.75fr_0.75fr] md:grid-cols-[0.25fr_1.75fr_0.75fr_2.5fr_1fr_1fr] lg:grid-cols-[0.5fr_1.25fr_0.5fr_2.5fr_1fr_1fr] 2xl:grid-cols-[0.5fr_1fr_0.5fr_3fr_1fr_1fr] text-sm md:text-md lg:text-lg xl:text-lg font-semibold min-h-[5dvh] shadow p-2 sticky top-0 bg-slate-100">
            <p className="">ID</p>
            <p className="">Time</p>
            <p className="">Type</p>
            <p className="">Statement</p>
            <p className="">Status</p>
            <p className="">Amount</p>
        </div>
        {
            transactions.map((tnx) => <TransactionItem transaction={tnx} key={tnx.id} />)
        }
        {
            transactions.map(tnx =>
                <TransactionBlock
                    key={tnx.id}
                    type="tnx"
                    transaction={tnx}
                    className="xs:hidden"
                />
            )
        }
        <Pagination />
    </>)
}

const Pagination = () => {
    const { currentPage, limit, numberOfTransactions } = useSelector((state: RootState) => state.transactions);
    const [pages, setPages] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        setPages(Math.ceil(numberOfTransactions / limit));
    }, [numberOfTransactions, limit]);

    if (pages == 1) {
        return (<></>)
    }

    return (<>
        <div className="w-full min-h-[5dvh] text-xs md:text-lg mt-5 flex items-center justify-center gap-1">
            <div className="font-light pe-3 cursor-pointer" onClick={() => {
                if (currentPage > 1) {
                    dispatch(setCurrentPage(currentPage - 1));
                }
            }}>Previous</div>
            {
                Array.from({ length: pages }).map((_, i) =>
                    <button key={i} className={`cursor-pointer ${currentPage == (i + 1) ? "bg-slate-700 text-slate-100" : "bg-slate-300"} p-1 px-2 rounded-sm`} onClick={() => { dispatch(setCurrentPage(i + 1)) }}>{i + 1}</button>
                )
            }
            <div className="font-light ps-3 cursor-pointer" onClick={() => {
                if (currentPage < pages) {
                    dispatch(setCurrentPage(currentPage + 1));
                }
            }}>Next</div>
        </div>
    </>)
}

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (<>
        <div className="w-full hidden xs:grid xs:grid-cols-[0.25fr_1.5fr_0.75fr_2.5fr_0.75fr_0.75fr] md:grid-cols-[0.25fr_1.75fr_0.75fr_2.5fr_1fr_1fr] lg:grid-cols-[0.5fr_1.25fr_0.5fr_2.5fr_1fr_1fr] 2xl:grid-cols-[0.5fr_1fr_0.5fr_3fr_1fr_1fr] text-xs md:text-sm lg:text-md xl:text-md min-h-[6.5dvh] shadow shadow-slate-500/15 p-2 gap-2">
            <div className="flex items-center">{transaction.id}</div>
            <div className="flex items-center text-2xs md:text-sm text-balance">
                {
                    new Date(transaction.time).toLocaleString("en-IN", {
                        timeZone: userTimeZone,
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })

                }
            </div>
            <div className="flex items-center">{transaction.type == "Credit" ? "Recieved" : "Sent"}</div>
            <div className="flex items-center text-balance">{transaction.statement}</div>
            <div className={`flex items-center text-2xs md:text-sm ${transaction.status == "Success" && "text-green-600"} ${transaction.status == "Processing" && "text-yellow-600"} ${transaction.status == "Failure" && "text-red-600"}`}>
                {transaction.status == "Success" && "Processed"}
                {transaction.status == "Processing" && "Processing"}
                {transaction.status == "Failure" && "Failed"}
            </div>
            <div className="flex items-center">₹{transaction.amount / 100}</div>
        </div>
    </>)
}

export default WrapFadeTransition(TransactionsPage) 