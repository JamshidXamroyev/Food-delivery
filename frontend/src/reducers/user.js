import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: localStorage.getItem("token") || null
}

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        state.user = action.payload
        localStorage.setItem("token", action.payload)
    },

    logoutUser: (state) => {
        state.user = null
        localStorage.removeItem("token")
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = counterSlice.actions

export default counterSlice.reducer