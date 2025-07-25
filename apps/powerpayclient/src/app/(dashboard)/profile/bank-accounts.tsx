import { RootState } from "@powerpaywallet/store";
import { setAddAccountInProfilePopup } from "@powerpaywallet/store/slices";
import { Button } from "@powerpaywallet/ui/button"
import { useDispatch, useSelector } from "react-redux"

export const SavedBankAccountsProfileTab = () => {

    const { savedBankAccounts } = useSelector((state: RootState) => state.bankAccounts);
    const dispatch = useDispatch();

    return (<>
        <div className="min-h-[30dvh] animate-fadein ">
            <div className="flex flex-col md:flex-row w-full items-center justify-between gap-2">
                <h2 className="text-2xl font-medium">View all added Bank Accounts</h2>
                <Button onClick={() => { dispatch(setAddAccountInProfilePopup(true)) }}>Add New Account</Button>

            </div>
            {
                savedBankAccounts.length == 0 &&
                <div className="h-[25dvh] w-full flex items-center justify-center ">
                    <p className="text-slate-400 text-center">You haven't added any Bank Account yet.</p>
                </div>
            }
        </div>
    </>)
}