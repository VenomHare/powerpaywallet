import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import sidebarReducer from './slices/sidebar'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
