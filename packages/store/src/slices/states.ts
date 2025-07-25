import { ProfileData, PROFILE_TABS } from "@powerpaywallet/schemas/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export interface States {
    loading: boolean,
    profileTab: PROFILE_TABS,
    editingProfileFieldId: string
    profileData: ProfileData | undefined
    addAccountInProfilePopup: boolean
}

const initialState: States = {
    loading: false,
    profileTab: "personal",
    editingProfileFieldId: "none",
    profileData: undefined,
    addAccountInProfilePopup: false
}

export const updateProfileData = createAsyncThunk("states/get_profile", async () => {
    const response = await axios.get("/api/profile");
    return response.data
});

const StatesSlice = createSlice({
    name: "states",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setProfileTab: (state, action: PayloadAction<PROFILE_TABS>) => {
            state.profileTab = action.payload;
        },
        setEditingFieldId: (state, action: PayloadAction<string>) => {
            state.editingProfileFieldId = action.payload;
        },
        setAddAccountInProfilePopup: (state, action : PayloadAction<boolean>) => {
            state.addAccountInProfilePopup = action.payload;
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileData.pending, (state) => {
                state.loading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<ProfileData>) => {
                state.loading = false
                state.profileData = action.payload

            })
            .addCase(updateProfileData.rejected, (state) => {
                state.loading = false
            })
    }

})


export const { setLoading, setProfileTab, setEditingFieldId, setAddAccountInProfilePopup } = StatesSlice.actions;
export default StatesSlice.reducer
