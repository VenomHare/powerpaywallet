import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import sidebarReducer from './slices/sidebar'
import walletReducer from './slices/wallet'
import alertsReducer from './slices/alerts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReducer,
    wallet: walletReducer,
    alerts: alertsReducer
  } 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch