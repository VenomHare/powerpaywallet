import { z } from "zod";
import { $Enums, Prisma } from "@powerpaywallet/db"

export const addFundsRequest = z.object({
    amount: z.number().describe("Amount for Transaction in paise ie 40Rs = 4000(40.00)"),
    provider: z.enum(["POWERPAY_MOCKBANK"]).describe("Name of Bank or Provider from which money is to be added to wallet")
})

export type addFundsRequestSchema = z.infer<typeof addFundsRequest>;

export interface Wallet {
    status:
    | "loading"
    | "failed"
    | "success";
    balance: {
        locked: number
        available: number
        total: number
    } | undefined,
    transactions: Array<Transaction>,
    walletsSearchResult: Array<WalletsSearchResult>
}

export interface WalletsSearchResult {
    number: string,
    name: string
}

export type BANKSERVERS = "POWERPAY_MOCKBANK" | "SELECT"

export type PROFILE_TABS = "personal" | "bankaccounts"
export interface Transaction {
    id: number
    amount: number
    time: Date
    status: $Enums.Status
    type: $Enums.TransactionType
    statement: string
}
export interface SidebarState {
    activeCategory: string
    isOpen: boolean
}

export interface Alert {
    key: number
    text: string
    type?: 'none' | 'success' | 'error' | 'info'
}

export interface AlertsState {
    alerts: Array<Alert>
    removedAlerts: Array<Alert>
}


export type SecurityPinPopupActions = "WALLET_MONEY_TRANSFER" | "BANK_WITHDRAWAL";

export type SecurityPinPopupAction =
    |
    {
        type: "WALLET_MONEY_TRANSFER",
        toNumber: string,
        toName: string,
        amount: number,
    }
    |
    {
        type: "NO_ACTION"
    }
    |
    {
        type: "BANK_WITHDRAWAL",
        accountNumber: string,
        amount: number
    }


export const CreateWalletTransferRequest = z.object({
    phone: z.string().regex(/^\d{10}$/),
    amount: z.number().min(1),
    id: z.number(),
})

export interface ProfileData {
    fullName: string
    phone: string
    email: string
    pfpUrl?: string
}

export type SecurityPopUpProps =
    {
        open: boolean,
        setOpen: (open: boolean) => void,
        action: SecurityPinPopupActions,
        id: number,
        onClose: () => void
    }


export interface AppbarProps {
    signOut?: () => void
    signIn?: () => void
    status: "loading" | "unauthenticated" | "authenticated"
}

export type WITHDRAWAL_OPTIONS = "BANK"

export interface WithdrawalTransaction {
    id: number
    userId: number
    amount: number
    net_amount: number
    fee: number
    accountId: number
    account: SavedBankAccount
    gateway: $Enums.WithdrawalOption
    status: $Enums.ActionStatus
    startedAt: string
    updatedAt: string
}


export type SavedBankAccount = {
	holderName: string,
	accountNumber: string,
	bankCode: string,
	label: string,
    id: number
}


export const BankTransferRequestSchema = z.object({
    account_number: z.string(),
    ifsc_code: z.string(),
    holder_name: z.string(),
    amount: z.number()
})

export type BankTransferRequest = z.infer<typeof BankTransferRequestSchema>;