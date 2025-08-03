import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slices/sidebar'
import walletReducer from './slices/wallet'
import alertsReducer from './slices/alerts'
import statesReducer from './slices/states'
import bankAccountsReducer from './slices/bankAccounts'
import transactionReducer from './slices/transactions'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    wallet: walletReducer,
    alerts: alertsReducer,
    states: statesReducer,
    bankAccounts: bankAccountsReducer,
    transactions: transactionReducer
  } 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
