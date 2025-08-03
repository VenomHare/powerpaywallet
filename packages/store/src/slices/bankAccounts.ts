import { SavedBankAccount } from '@powerpaywallet/schemas/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SavedBankAccountTabs = "select" | "add";

export interface BankAccountsState {
	isSavedBankAccountsPopupOpen: boolean,
	SavedBankAccountsBankTab: SavedBankAccountTabs,
	savedBankAccounts: SavedBankAccount[]
}

const initialState: BankAccountsState = {
	isSavedBankAccountsPopupOpen: false,
	SavedBankAccountsBankTab: "select",
	savedBankAccounts: []
	
}

export const updateSavedBankAccounts = createAsyncThunk("bank_accounts/refresh_saved", async (updateAccounts: ()=>Promise<SavedBankAccount[]>) => {
	const data = await updateAccounts();
	return data;
})	

const BankAccountsSlice = createSlice({
	name: "bank_accounts",
	initialState,
	reducers: {
		setIsSavedBankAccountsPopupOpen: (state, action: PayloadAction<boolean>) => {
			state.isSavedBankAccountsPopupOpen = action.payload;
		},
		setSavedBankAccountsTab: (state, action: PayloadAction<SavedBankAccountTabs>) => {
			state.SavedBankAccountsBankTab = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateSavedBankAccounts.fulfilled, (state, action) => {
				state.savedBankAccounts = action.payload
			})	
	}
})

export default BankAccountsSlice.reducer;
export const { setIsSavedBankAccountsPopupOpen, setSavedBankAccountsTab } = BankAccountsSlice.actions;
