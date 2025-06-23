import { z } from "zod";
import { $Enums } from "@powerpaywallet/db"

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


export type SecurityPinPopupActions = "WALLET_MONEY_TRANSFER";

export type SecurityPinPopupAction =
    |   
        {
            type: "WALLET_MONEY_TRANSFER",
            toNumber: string,
            toName: string,
            amount: number
        }
    |   
        {
            type: "NO_ACTION"
        }   


export const CreateWalletTransferRequest = z.object({
    phone: z.string().regex(/^\d{10}$/),
    amount: z.number().min(1),
    id: z.number(),
})