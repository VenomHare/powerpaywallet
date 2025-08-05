"use client";
import { useEffect, useState } from "react";
import { SavedBankAccount, Transaction, WITHDRAWAL_OPTIONS, WithdrawalTransaction } from "@powerpaywallet/schemas/client";
import { SquareCheckBig, Landmark, RefreshCcw } from "lucide-react";
import { WrapFadeTransition } from '../../../components/FadeInPageTransition';
import { SavedBankAccountsPopup } from "../../../components/saved-bank-accounts-popup";
import { useDispatch, useSelector } from "react-redux";
import { setIsSavedBankAccountsPopupOpen, update, updateWithrawalRequests } from "@powerpaywallet/store/slices";
import { Button } from "@powerpaywallet/ui/button";
import { RootState } from "@powerpaywallet/store";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { signIn, useSession } from "next-auth/react";
import { alert } from "../../../components/alerts";
import SecurityPinPopUp from "../../../components/security-pin-popup";
import { createWithdrawalRequest } from "../../actions/bankWithdrawal/createRequest";
import { getWithdrawalRequests } from "../../actions/bankWithdrawal/getWithdrawalRequests";
import { TransactionBlock } from "../../../components/Transaction";
import Image from "next/image";

const WithdrawPage = () => {

	const [securityPinPopUp, setSecurityPinPopUp] = useState(false);
	const [withdrawRequestId, setWithdrawRequestId] = useState(0);
	const [dataRequestSent, setDataRequestSent] = useState(false);
	const [selectedAccount, setSelectedAccount] = useState<SavedBankAccount | undefined>();
	const [amount, setAmount] = useState(NaN);
	const session = useSession();

	const { balance } = useSelector((state: RootState) => state.wallet)
	const { withdrawalRequests } = useSelector((state: RootState) => state.states)


	const appDispatch = useAppDispatch();
	const dispatch = useDispatch();



	useEffect(() => {

		if (session.status === "unauthenticated") {
			signIn();
		}

		if (balance == undefined) {
			appDispatch(update());
		}

		if (withdrawalRequests.length == 0 && !dataRequestSent) {
			appDispatch(updateWithrawalRequests(getWithdrawalRequests));
			setDataRequestSent(true);
		}


	}, [balance, appDispatch, session.status, withdrawalRequests])

	const handleWithdraw = async () => {

		if (amount < 100) {
			alert(appDispatch, "Minimum Amount for withdrawal is ₹100", "error", {
				duration: 5000
			})
			return
		}

		if (selectedAccount == undefined) {
			alert(appDispatch, "Select valid account for withdrawal", "error", {
				duration: 5000
			})
			return
		}

		try {
			const createRequestId = await createWithdrawalRequest(selectedAccount.id, amount * 100);
			setWithdrawRequestId(createRequestId);
			setSecurityPinPopUp(true);
		}
		catch (error: any) {
			if (error.message.startsWith("Error 473")) {
				alert(appDispatch, (error.message.replace("Error 473:", "")), "error");
			}
			else {
				alert(appDispatch, "Something Went Wrong", "error");
			}
		}


	}

	const OpenSelectAccountPopup = () => {
		dispatch(setIsSavedBankAccountsPopupOpen(true));
	}

	const refresh = () => {
		appDispatch(update());
		appDispatch(updateWithrawalRequests(getWithdrawalRequests));
	}


	return (<>
		<SecurityPinPopUp
			open={securityPinPopUp}
			setOpen={setSecurityPinPopUp}
			onClose={() => { refresh(); }}
			id={withdrawRequestId}
			action="BANK_WITHDRAWAL"
		/>
		<SavedBankAccountsPopup onSelect={setSelectedAccount} onClose={() => { }} />
		<div className="overflow-y-auto w-full min-h-[85svh] p-3 sm:p-10 flex flex-col gap-5 ">
			<div className='w-full flex justify-between items-center flex-col sm:flex-row sm:px-5 gap-2'>
				<h1 className="text-2xl sm:text-4xl h-[20%] text-center font-[Manrope] font-bold">Funds Withdrawal</h1>
				<button onClick={refresh} className='w-full sm:w-auto px-5 py-2 h-fit lg:h-auto rounded-md cursor-pointer flex gap-2 items-center justify-center bg-slate-800 text-slate-100 text-sm sm:text-md'>
					<RefreshCcw size={20} /> Refresh
				</button>
			</div>

			<div className="w-full min-h-[75dvh] flex items-start justify-between flex-col-reverse lg:flex-row-reverse gap-4">
				<div className="w-full lg:w-3/5 xl:w-2/3 h-fit md:h-[75dvh] p-3 sm:p-6  rounded-xl shadow-xl shadow-slate-400 border border-slate-400 flex flex-col gap-2">
					<h3 className="text-lg sm:text-2xl font-semibold font-[Manrope]">Withdrawal History</h3>
					<hr className='text-slate-400' />
					{
						withdrawalRequests.length == 0 ?
							<div className="w-full h-full flex flex-col items-center justify-center text-lg text-slate-500 font-[Manrope] text-center text-balance gap-4">
								<Image src={"/not_found.png"} alt='Not Found' width={256} height={256} />
								{/* <History size={65} className='text-slate-400' /> */}
								Looks like you haven't made any withdrawals yet
							</div>
							:
							<div className="w-full max-h-full overflow-y-auto overflow-x-hidden flex flex-col gap-2 p-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300">
								{
									withdrawalRequests.map((req) =>
										<TransactionBlock
											key={req.id}
											type={"wtb"}
											transaction={req}
										/>
									)
								}
							</div>
					}

				</div>


				<div className="w-full lg:w-2/5 xl:w-1/3 h-[75dvh] rounded-md bg-neutral-200 shadow-md shadow-neutral-500 p-4">
					{/* Notice*/}
					<div className="w-full h-fit p-2 rounded-sm border border-slate-500 bg-slate-400 text-slate-700 font-[Manrope]">
						<p>Minimum Withdrawal Amount : ₹100 INR</p>
						<p>Withdrawal fee: 0.75%</p>
					</div>

					<div className="w-full h-fit flex flex-col py-2 sm:py-5 gap-3 sm:gap-4 font-[Manrope] overflow-y-auto xs:overflow-y-none" >
						<div className="flex items-center text-2xl">
							<label htmlFor="wlt_balance" className="text-xl">Wallet Balance :</label>
							<div id="wlt_balance" className="p-2 font-medium">₹{balance ? balance.available / 100 : 0}</div>
						</div>
						<div className="flex flex-col ">
							<label htmlFor="withdraw_amt">Amount*</label>
							<input
								type="number"
								autoComplete="off"
								id="withdraw_amt"
								className="border border-slate-400 shadow-md shadow-slate-400 bg-slate-200 w-full sm:w-2/3 p-2"
								min={balance ? 100 : 0}
								max={balance ? balance.available : 0}
								onChange={(e) => { setAmount(parseInt(e.target.value)) }}
								value={isNaN(amount) ? 0 : amount}
								required
							/>
						</div>
						{
							!isNaN(amount) &&
							<div className="flex items-center text-lg text-slate-600">
								<label htmlFor="wlt_balance" className="text-sm">Receivable Amount (After Charges):</label>
								<div id="wlt_balance" className=" font-medium">₹{(amount - (amount * 0.0075)).toFixed(2)} </div>
							</div>
						}

						<div className="flex flex-col cursor-pointer" onClick={OpenSelectAccountPopup}>
							<label htmlFor="bank_acc_name">Account Holder's Name</label>
							<div id="bank_acc_name" className="border border-slate-400 shadow-md shadow-slate-400 bg-slate-300 w-full sm:w-2/3 p-2 rounded">
								{selectedAccount == undefined ? <p className="text-slate-400"> Select Bank Account </p> : selectedAccount.holderName}
							</div>
						</div>

						<div className="flex flex-col cursor-pointer" onClick={OpenSelectAccountPopup}>
							<label htmlFor="bank_acc_no">Account Number</label>
							<div id="bank_acc_no" className="border border-slate-400 shadow-md shadow-slate-400 bg-slate-300 w-full sm:w-2/3 p-2 rounded">
								{selectedAccount == undefined ? <p className="text-slate-400"> Select Bank Account </p> : selectedAccount.accountNumber}
							</div>
						</div>

						<div className="flex flex-col cursor-pointer" onClick={OpenSelectAccountPopup}>
							<label htmlFor="bank_acc_code"> Bank IFSC Code</label>
							<div id="bank_acc_code" className="border border-slate-400 shadow-md shadow-slate-400 bg-slate-300 w-full sm:w-2/3 p-2 rounded">
								{selectedAccount == undefined ? <p className="text-slate-400"> Select Bank Account </p> : selectedAccount.bankCode}
							</div>
						</div>

						<Button type="submit" onClick={handleWithdraw} className="py-3 sm:py-2">Withdraw Money</Button>
					</div>
				</div>
			</div>

		</div>
	</>)
}


export default WrapFadeTransition(WithdrawPage);
