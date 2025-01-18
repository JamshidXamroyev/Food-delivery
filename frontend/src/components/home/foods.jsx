import axios from 'axios'
import Cart from "./Cart"
import { useEffect, useState } from "react"
import { addFood } from '../../reducers/food'
import { useDispatch, useSelector } from 'react-redux'

const Foods = ({category}) => {
  const dispatch = useDispatch()
  const {food_list} = useSelector(state => state.food) 

  const getAllFood = async () => {
    const response = await axios.get("/list")
    if(response.data){
      dispatch(addFood(response.data))
    }
  }
  useEffect(() => {
    getAllFood()
  }, [])
  return (
    <section className="pb-9">
        <h1 className="capitalize font-bold md:text-5xl text-3xl text-center my-12">{category} Foods</h1>
        {food_list ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-3 gap-7 ">
          {food_list && food_list.map((item, index) => (
                  <Cart item={item} category={category} index={index}/>
              ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <p id="finish"></p>
    </section>
  )
}

export default Foods