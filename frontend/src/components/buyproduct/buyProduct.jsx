import { useDispatch, useSelector } from "react-redux"
import { removecart, getAllAmmount } from "../../reducers/food"
import { food_list } from "../../assets/frontend_assets/assets"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const BuyProduct = () => {
  const {getProduct, ammount} = useSelector(state => state.food)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllAmmount())
  }, [getProduct])

  return (
    <section className="mb-12">
        <h1 className="text-4xl font-bold text-center md:my-12 my-4">Your Products</h1>
        <table className="w-full border-b max-md:text-[14px]">
            <tr>
                <th>Items</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quently</th>
                <th>Total</th>
                <th>Remove</th>    
            </tr>
            {food_list.map((item, index) => {
                if(getProduct[item._id] > 0){
                    return (
                        <tr key={index} className="border-t w-full">
                            <td className="w-1/6">
                                <img src={item.image} alt={item.image} className="md:w-1/2 rounded-md"/>
                            </td>
                            <td className="md:w-1/6 w-full">{item.name}</td>
                            <td className="w-1/6">{item.price}$</td>
                            <td className="w-1/6">{getProduct[item._id]}</td>
                            <td className="w-1/6">{item.price * getProduct[item._id]}$</td>
                            <td className="cursor-pointer select-none font-bold md:text-2xl" onClick={() => dispatch(removecart(item._id))}>X</td>
                        </tr>
                    )
                }
            })}
        </table>
        <div className="my-8 flex justify-between md:flex-row flex-col-reverse max-md:gap-5 gap-20">
            <div className="md:w-1/2 w-full">
                <h2 className="text-2xl font-bold font-Title my-3">Cart Total</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <p>Subtotal</p>
                        <p>{ammount}$</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p>Delivery Fee</p>
                        <p>{ammount !== 0 ? 2 : 0}$</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <b>Total</b>
                        <b>{ammount !== 0 ? ammount + 2 : 0}$</b>
                    </div>
                </div>
                <button className="w-full py-1.5 my-2 rounded-sm bg-orange-500 active:bg-orange-800 text-white" onClick={() => navigate(ammount && '/order/payment')}>Procced To Checkout</button>
            </div>
            <div className="md:w-1/2 w-full flex justify-start flex-col gap-3">
                <p className="text-left">If you have a promo code. Enter it here</p>
                <div className="relative">
                    <input type="text" placeholder="Enter promo code.." className="w-full border-black outline-none focus:border-orange-600 border px-4 py-2 rounded-md"/>
                    <button className="w-[170px] absolute top-0 right-0 border select-none active:bg-gray-800 py-2 rounded-md bg-black text-white" >Submit</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BuyProduct