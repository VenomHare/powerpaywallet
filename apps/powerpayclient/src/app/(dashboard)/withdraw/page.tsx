"use client";
import { useEffect, useState } from "react";
import { SavedBankAccount, WITHDRAWAL_OPTIONS } from "@powerpaywallet/schemas/client";
import { SquareCheckBig, Landmark } from "lucide-react";
import { WrapFadeTransition } from '../../../components/FadeInPageTransition';
import { SavedBankAccountsPopup } from "../../../components/saved-bank-accounts-popup";
import { useDispatch, useSelector } from "react-redux";
import { setIsSavedBankAccountsPopupOpen, update } from "@powerpaywallet/store/slices";
import { Button } from "@powerpaywallet/ui/button";
import { RootState } from "@powerpaywallet/store";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { signIn, useSession } from "next-auth/react";
import { alert } from "../../../components/alerts";
import SecurityPinPopUp from "../../../components/security-pin-popup";
import { createWithdrawalRequest } from "../../actions/bankWithdrawal/createRequest";

const WithdrawPage = () => {

	const [securityPinPopUp, setSecurityPinPopUp] = useState(false);
	const [withdrawRequestId, setWithdrawRequestId] = useState(0);
	const [withdrawOption, setWithdrawOption] = useState<WITHDRAWAL_OPTIONS>("BANK");
	const [selectedAccount, setSelectedAccount] = useState<SavedBankAccount | undefined>();
	const [amount, setAmount] = useState(NaN);
	const session = useSession();

	const { balance } = useSelector((state: RootState) => state.wallet)

	const appDispatch = useAppDispatch();
	const dispatch = useDispatch();

	useEffect(() => {

		if (session.status === "unauthenticated") {
			signIn();
		}

		if (balance == undefined) {
			appDispatch(update());
		}
	}, [balance, appDispatch, session.status])

	const handleWithdraw = async () => {

		if (amount < 100) {
			alert(appDispatch, "Minimum Amount for withdrawal is ₹100", "info", {
				duration: 5000
			})
			return
		}

		if (selectedAccount == undefined) {
			alert(appDispatch, "Select valid account for withdrawal", "info", {
				duration: 5000
			})
			return
		}

		try {
			const createRequestId = await createWithdrawalRequest(selectedAccount, amount*100);
			setWithdrawRequestId(createRequestId);
			setSecurityPinPopUp(true);
		}
		catch (error) {
			alert(appDispatch, "Something Went Wrong", "error");
		}


	}

	const OpenSelectAccountPopup = () => {
		dispatch(setIsSavedBankAccountsPopupOpen(true));
	}


	return (<>
		<SecurityPinPopUp
			open={securityPinPopUp}
			setOpen={setSecurityPinPopUp}
			onClose={() => { }}
			id={withdrawRequestId}
			action="BANK_WITHDRAWAL"
		/>
		<SavedBankAccountsPopup onSelect={setSelectedAccount} onClose={() => { }} />
		<div className="w-full h-[92dvh] p-4 overflow-y-auto">
			<div className="w-full py-2 my-5 font-[Manrope]">
				<h1 className="text-3xl sm:text-4xl h-[20%] w-full font-[Manrope] font-bold">Funds Withdrawal</h1>
			</div>

			<div className="w-full min-h-[75dvh] flex items-start justify-between flex-col md:flex-row-reverse gap-4">
				<div className="w-full md:w-1/3 lg:w-1/2 xl:w-2/3 h-fit md:h-[75dvh] rounded-md shadow-md shadow-slate-500 bg-slate-200 flex flex-col items-center justify-start">
					<h3 className="font-[Manrope] text-2xl py-3 px-2 font-medium text-center ">Withdraw Method</h3>
					<div className="w-full h-full p-5 flex flex-wrap gap-2 items-start justify-start">
						{/* Options are not Offen Changed So hard coding the options*/}
						<div className="w-[7.5rem] xl:w-[12rem] bg-neutral-300 p-3 border rounded-md flex flex-col items-center gap-2 " onClick={() => { setWithdrawOption("BANK") }}>
							<div className="w-full font-[Manrope] text-lg flex items-center justify-between ">
								<p>Bank</p>
								{
									withdrawOption == "BANK" &&
									<SquareCheckBig />
								}
							</div>
							<Landmark size={90} />
						</div>
					</div>
				</div>


				<div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-[75dvh] rounded-md bg-neutral-200 shadow-md shadow-neutral-500 p-4">
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

						<div className="flex flex-col " onClick={OpenSelectAccountPopup}>
							<label htmlFor="bank_acc_name">Account Holder's Name</label>
							<div id="bank_acc_name" className="border border-slate-400 shadow-md shadow-slate-400 bg-slate-200 w-full sm:w-2/3 p-2 rounded">
								{selectedAccount == undefined ? <p className="text-slate-400"> Select Bank Account </p> : selectedAccount.holderName}
							</div>
						</div>

						<div className="flex flex-col " onClick={OpenSelectAccountPopup}>
							<label htmlFor="bank_acc_no">Account Number</label>
							<div id="bank_acc_no" className="border border-slate-400 shadow-md shadow-slate-400 bg-slate-200 w-full sm:w-2/3 p-2 rounded">
								{selectedAccount == undefined ? <p className="text-slate-400"> Select Bank Account </p> : selectedAccount.accountNumber}
							</div>
						</div>

						<div className="flex flex-col " onClick={OpenSelectAccountPopup}>
							<label htmlFor="bank_acc_code"> Bank IFSC Code</label>
							<div id="bank_acc_code" className="border border-slate-400 shadow-md shadow-slate-400 bg-slate-200 w-full sm:w-2/3 p-2 rounded">
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
