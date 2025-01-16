import { configureStore } from '@reduxjs/toolkit'
import foodReducer from '../reducers/food'

export const store = configureStore({
  reducer: {
    food: foodReducer
  }
})