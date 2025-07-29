import { AppDispatch, RootState } from "@powerpaywallet/store";
import { setAddAccountInProfilePopup, setLoading, updateSavedBankAccounts } from "@powerpaywallet/store/slices";
import { Button } from "@powerpaywallet/ui/button"
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { AlertDialog, AlertParent, AlertTrigger } from "../../../components/dialog-alert";
import { deleteAccount } from "../../actions/profile/bankAccount";
import { alert } from "../../../components/alerts";
import { getSavedBankAccounts } from "../../actions/mislaneous/BankAccount";

export const SavedBankAccountsProfileTab = () => {

    const { savedBankAccounts } = useSelector((state: RootState) => state.bankAccounts);
    const dispatch = useDispatch();
    const appDispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleDelete = async (id: number) => {
        try {
            dispatch(setLoading(true))
            await deleteAccount(id);
            appDispatch(updateSavedBankAccounts(getSavedBankAccounts));
            dispatch(setLoading(false))
            alert(appDispatch,"Deleted Account Successfully" ,"success");
        }
        catch(error){
            console.log(error);
            alert(appDispatch, "Something went wrong", "error");
            dispatch(setLoading(false))
        }
    }

    return (<>
        <div className="min-h-[30dvh] animate-fadein ">
            <div className="flex flex-col md:flex-row w-full items-center justify-between gap-2">
                <h2 className="text-2xl font-medium">View all added Bank Accounts</h2>
                <Button onClick={() => { dispatch(setAddAccountInProfilePopup(true)) }}>Add New Account</Button>

            </div>
            {
                savedBankAccounts.length <= 0 ?
                    <div className="h-[25dvh] w-full flex items-center justify-center ">
                        <p className="text-slate-400 text-center">You haven't added any Bank Account yet.</p>
                    </div>
                    :
                    <>
                        <div className="w-full flex flex-wrap gap-2 py-2">
                            {
                                savedBankAccounts.map((acc, i) =>
                                    <div key={i} className="w-[30rem] bg-slate-200 border border-slate-400 shadow-md p-2 text-xl rounded-xs flex justify-between">
                                        <p>{acc.label}</p>
                                        <div className="flex items-center gap-2 ">
                                            <AccountActionButton onClick={() => {
                                                router.push(`/profile/editaccount?acid=${acc.id}`)
                                            }}>Edit</AccountActionButton>
                                            <AlertParent>
                                                <AlertTrigger className="flex items-center">
                                                    <AccountActionButton>Delete</AccountActionButton>
                                                </AlertTrigger>
                                                <AlertDialog 
                                                    onApprove={() => {handleDelete(acc.id)}}
                                                    title={`Delete ${acc.label}`}
                                                    description="Sure you want to delete it?"    
                                                />
                                            </AlertParent>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </>
            }
        </div>
    </>)
}
interface AccountActionButtonProps {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void
}
const AccountActionButton = ({ children, onClick }: AccountActionButtonProps) => {

    return (<button className={"underline text-sm hover:text-slate-500 cursor-pointer"} onClick={onClick}>
        {children}
    </button>)
}