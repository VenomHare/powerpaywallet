import { SavedBankAccount } from "@powerpaywallet/schemas/client";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@powerpaywallet/store"
import { Button } from "@powerpaywallet/ui/button";
import { ArrowLeft } from "lucide-react";
import { setIsSavedBankAccountsPopupOpen, setSavedBankAccountsTab, update, updateSavedBankAccounts } from "@powerpaywallet/store/slices";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { alert } from "./alerts";
import { getSavedBankAccounts, SaveBankAccount } from "../app/actions/mislaneous/BankAccount";

interface Props {
	onSelect: (Account: SavedBankAccount) => void
	onClose?: () => void
}

const IFSC_CODE_PATTERN = /^[A-Z]{4}0[A-Z0-9]{6}$/


export const SavedBankAccountsPopup = ({ onSelect, onClose }: Props) => {
	const { isSavedBankAccountsPopupOpen, SavedBankAccountsBankTab, savedBankAccounts } = useSelector((state: RootState) => state.bankAccounts)
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
			dispatch(setSavedBankAccountsTab("select"));

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
		onClose?.();
		resetForm();
		dispatch(setIsSavedBankAccountsPopupOpen(false));
	}

	const handleTabBtnClick = () => {

		if (SavedBankAccountsBankTab === "add") {
			resetForm();
			dispatch(setSavedBankAccountsTab("select"))
		}
		else {
			dispatch(setSavedBankAccountsTab("add"))
		}

	}

	const handleSelectClick = (acc: SavedBankAccount) => {
		onSelect(acc);
		ClosePopup();
	}

	if (!isSavedBankAccountsPopupOpen) {
		return (<></>)
	}

	return (<>
		<div className="w-dvw h-dvh fixed top-0 left-0 bg-black/55 flex items-center justify-center z-[51]">
			<div className="w-[80dvw] lg:w-[60dvw] h-[80dvh] rounded-lg border border-slate-400 shadow-lg shadow-slate-700 bg-slate-100 flex flex-col items-start justify-start p-4 ">
				<p className="flex items-center gap-1 text-slate-500 cursor-pointer" onClick={ClosePopup}> <ArrowLeft /> Go Back</p>

				<div className="flex flex-col xs:flex-row justify-between w-full gap-2">
					<h3 className="font-[Manrope] font-medium text-xl sm:text-3xl p-2 rounded">
						{
							SavedBankAccountsBankTab === "select" ?
								<>Select Bank Account</>
								:
								<>Add New Bank Account</>
						}

					</h3>
					<Button onClick={handleTabBtnClick} className="sm:w-[10rem] ">
						{
							SavedBankAccountsBankTab === "select" ?
								<>Add Account</>
								:
								<>Cancel</>
						}

					</Button>
				</div>
				<div className="w-full h-full overflow-hidden ">
					<div className="w-[200%] h-full flex transition-all duration-500 relative " style={{ left: `${SavedBankAccountsBankTab === "select" ? "0" : "-100%"}` }}>
						<div className="w-full max-h-full h-fit sm:h-auto rounded mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 py-4 overflow-y-auto  " >
							{
								savedBankAccounts.map((acc, i) => (
									<div onClick={()=>handleSelectClick(acc)} key={i} className="aspect-[2.59/1] py-2 px-4 w-full xs:w-3/4 sm:w-full duration-500 transition-all animate-fadein bg-red-400 bg-repeat-none bg-cover rounded-lg flex flex-col items-start justify-between cursor-pointer" style={{ backgroundImage: "url('/bank-account-bg.png')" }}>
										<div className="flex flex-col font-[Manrope] text-sm sm:text-xs md:text-sm lg:text-sm 2xl:text-md text-zinc-700 uppercase">
											<p>{acc.accountNumber}</p>
											<p>{acc.holderName}</p>
										</div>
										<div className="text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-xl 2xl:text-2xl font-[Manrope]">
											{acc.label}
										</div>
									</div>
								))
							}
						</div>
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
                            		maxLength={80}
									onChange={(e) => { setLabel(e.target.value) }}
									required
								/>
							</div>

							<Button type="submit" onClick={() => { }}>
								Add Bank Account
							</Button>

						</form>
					</div>
				</div>
			</div>
		</div>
	</>)
}
