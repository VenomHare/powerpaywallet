import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Wallet } from "@powerpaywallet/schemas/client"
import axios from "axios";


const initialState: Wallet = {
    status: "loading",
    balance: undefined,
    transactions: []
}

export const update = createAsyncThunk("wallet/update", async () => {
    const req = await axios.get("/api/wallet/update");
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
    }
})

export default wallet.reducer