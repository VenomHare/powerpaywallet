import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Wallet } from "@powerpaywallet/schemas/client"
import axios from "axios";


const initialState: Wallet = {
    status: "loading",
    balance: undefined,
    transactions: [],
    walletsSearchResult: []
}

export const update = createAsyncThunk("wallet/update", async () => {
    const req = await axios.get("/api/wallet/update");
    return req.data;
})

export const getWalletsByQuery = createAsyncThunk("wallet/getWalletByQuery", async (query: string) => {
    const req = await axios.get("/api/wallet/get?q="+query);
    return req.data;
})

const wallet = createSlice({
    name: "wallet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(update.pending, (state) => {
                state.status = "loading"
            })
            .addCase(update.rejected, (state) => {
                state.status = "failed"
            })
            .addCase(update.fulfilled, (state, action)=>{
                state.status = "success";
                state.balance = {
                    available: action.payload.balance.available,
                    locked: action.payload.balance.locked,
                    total: action.payload.balance.locked + action.payload.balance.available
                }
                state.transactions = action.payload.transactions
            })
            .addCase(getWalletsByQuery.fulfilled, (state, action) => {
                state.walletsSearchResult = action.payload;
            })
    }
})

export default wallet.reducer