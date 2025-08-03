import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Transaction } from "@powerpaywallet/schemas/client"
import axios from "axios";

export interface TransactionsData {
    transactions: Transaction[],
    currentPage: number,
    limit: number,
    numberOfTransactions: number
}

const initialState: TransactionsData = {
    transactions: [],
    limit: 25,
    currentPage: 1,
    numberOfTransactions: NaN
}

export const updateFilteredTransactions = createAsyncThunk("transactions/update-filter-transactions", async ({ page, limit }: { page: number, limit: number }) => {
    const request = await axios.get(`/api/transactions?page=${page}&limit=${limit}`);
    const transactions = request.data.transactions.map((t: any) => ({
        id: t.id,
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider,
        type: t.transactionType,
        statement: t.statement
    }));

    return {
        transactions,
        count: request.data.count
    };
})

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateFilteredTransactions.fulfilled, (state, action: PayloadAction<{transactions : Transaction[], count: number}>) => {
                state.transactions = action.payload.transactions;
                state.numberOfTransactions = action.payload.count;
            })
    }
})


export const { setCurrentPage, setLimit } = transactionsSlice.actions
export default transactionsSlice.reducer