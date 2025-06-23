import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface States {
    loading: boolean
}

const initialState : States = {
    loading: false
}

const StatesSlice = createSlice({
    name:"states",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
})


export const { setLoading } = StatesSlice.actions;
export default StatesSlice.reducer