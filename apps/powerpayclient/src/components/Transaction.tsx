import { Transaction, WithdrawalTransaction } from "@powerpaywallet/schemas/client";

type Props = {
    type: "tnx"
    transaction: Transaction
    className?: string
} | {
    type: "wtb"
    transaction: WithdrawalTransaction
    className?: string
}


export function TransactionBlock({ transaction, type, className="" }: Props) {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (<>
        <div className={`min-h-[7dvh] h-fit rounded border-[1px] font-[Manrope] border-slate-400/20 shadow p-2 shrink-0 ${transaction.status == "Failure" && " bg-red-400/10"} ${className}`} key={transaction.id}>
            <div className="flex justify-between w-full h-full">
                <div className="flex flex-col w-2/3 sm:w-1/2 md:w-auto">
                    <div className={"text-slate-950 font-medium text-sm md:text-lg "}>
                        {
                            type == "wtb" ?
                                transaction.account.label
                                :
                                transaction.statement
                        }
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className='text-sm text-slate-500 '>
                            {
                                type == "tnx" ?
                                    `#${transaction.id}`
                                :
                                    `wtb_${transaction.id}`
                            }
                        </div>
                        <div className='block sm:hidden'>
                            {
                                // transaction.status == "Success" &&
                                // <div className='text-2xs sm:text-sm text-green-600'>Success</div>
                            }
                            {
                                transaction.status == "Processing" &&
                                <div className='text-2xs sm:text-sm text-yellow-600'>Processing</div>
                            }
                            {
                                transaction.status == "Failure" &&
                                <div className='text-2xs sm:text-sm text-red-600'>Failed</div>
                            }
                        </div>

                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    {
                        // transaction.status == "Success" &&
                        // <div className='hidden sm:block text-2xs sm:text-sm text-green-600'>Success</div>
                    }
                    {
                        transaction.status == "Processing" &&
                        <div className='hidden sm:block text-2xs sm:text-sm text-yellow-600'>Processing</div>
                    }
                    {
                        transaction.status == "Failure" &&
                        <div className='hidden sm:block text-2xs sm:text-sm text-red-600'>Failed</div>
                    }
                    <div className="flex flex-col items-end">
                        <div className={"text-slate-950 font-medium text-sm sm:text-lg "}> {type == "tnx" && ( transaction.type == "Credit" ? "+" : "-" )} ₹{transaction.amount / 100} </div>
                        <div className="text-2xs sm:text-xs md:text-sm text-slate-500 text-right">
                            {
                                
                                new Date(type == "wtb" ? transaction.startedAt : transaction.time).toLocaleString("en-IN", {
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
                    </div>
                </div>
            </div>
        </div>
    </>)
}
