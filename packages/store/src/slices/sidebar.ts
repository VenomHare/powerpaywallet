import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
    activeCategory: string
}

const initialState = {
    activeCategory: "closed"
}

const sidebar = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<string>) => { state.activeCategory = action.payload }
    }
})

export default sidebar.reducer;
export const {setActiveCategory} = sidebar.actions;