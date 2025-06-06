import { createSlice } from '@reduxjs/toolkit'
export interface Alert {
    key: number,
    text: string
    type: 'none' | 'success' | 'error' | 'info'
}

const initialState : { alerts: Array<Alert>} = {
    alerts: []
}

const alertSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        showAlert: (state, action) => { 
            const key = Date.now();
            state.alerts.push({...action.payload, key});
            setTimeout(()=>{
                state.alerts = state.alerts.filter(a=> a.key !== key);
            },3000);
        }
    }
})

export const { showAlert} = alertSlice.actions
export default alertSlice.reducer
