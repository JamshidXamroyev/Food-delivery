import { configureStore } from '@reduxjs/toolkit'
import foodReducer from '../reducers/food'
import userReducer from '../reducers/user'

export const store = configureStore({
  reducer: {
    food: foodReducer,
    user: userReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
  // enhancers: [devToolsEnhancer({ realtime: true })],
})