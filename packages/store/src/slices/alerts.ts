import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Alert {
    key: number
    text: string
    type?: 'none' | 'success' | 'error' | 'info'
}

export interface AlertsState {
    alerts: Array<Alert>
    removedAlerts: Array<Alert>
}

const initialState: AlertsState = {
    alerts: [],
    removedAlerts: []
}

const alertSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        showAlert: (state, action: PayloadAction<Alert>) => {
            state.alerts.push(action.payload)
        },
        removeAlertFromScreen: (state, action: PayloadAction<number>) => {
            const alert = state.alerts.find(a => action.payload == a.key);
            if (alert) {
                state.removedAlerts.push(alert);
            }
        },
        removeAlert: (state, action: PayloadAction<number>) => {
            state.alerts = state.alerts.filter(a => a.key !== action.payload)
        },
        clearScreenAlert: (state, action: PayloadAction<number>) => {
            state.removedAlerts = state.alerts.filter(a => a.key !== action.payload)
        },
    },
})

export const { showAlert, removeAlert, removeAlertFromScreen, clearScreenAlert } = alertSlice.actions
export default alertSlice.reducer
