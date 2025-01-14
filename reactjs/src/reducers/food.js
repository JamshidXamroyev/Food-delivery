import { createSlice } from '@reduxjs/toolkit'
import { food_list } from '../assets/frontend_assets/assets'


const initialState = {
  getProduct: JSON.parse(localStorage.getItem("product")) || {},
  ammount: 0
}

export const counterSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const _id = action.payload
      if(!state.getProduct[_id]){
        state.getProduct = {...state.getProduct, [_id]:1} 
      } else{
        state.getProduct = {...state.getProduct, [_id]: state.getProduct[_id] + 1}
      }

      
      localStorage.setItem("product", JSON.stringify(state.getProduct))
    },
    removecart: (state, action) => {
      const _id = action.payload
      state.getProduct = {...state.getProduct, [_id]: state.getProduct[_id] - 1} 
      localStorage.setItem("product", JSON.stringify(state.getProduct))
    },
    getAllAmmount: (state) => {
      let ammount = 0
      for(const item in state.getProduct){
        if(state.getProduct[item] > 0){
          let itemInfo = food_list.find((product) => product._id === item)
          ammount += itemInfo.price * state.getProduct[item]
        }
      }
      
      state.ammount = ammount
    }
  },
})

// Action creators are generated for each case reducer function
export const { removecart, addToCart, getAllAmmount } = counterSlice.actions

export default counterSlice.reducer