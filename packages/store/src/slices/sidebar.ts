import { SidebarState } from "@powerpaywallet/schemas/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: SidebarState = {
    activeCategory: "closed",
    isOpen: false
}

const sidebar = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<string>) => { state.activeCategory = action.payload },
        setOpen: (state, action: PayloadAction<boolean>) => { state.isOpen = action.payload }
    }
})

export default sidebar.reducer;
export const { setActiveCategory, setOpen } = sidebar.actions;