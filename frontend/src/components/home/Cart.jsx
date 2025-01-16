import { assets } from "../../assets/frontend_assets/assets"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getAllAmmount, removecart } from "../../reducers/food"
import { useEffect } from "react"

const Cart = ({item,category, index}) => {
  const dispatch = useDispatch()
  const {getProduct} = useSelector(state => state.food)


  useEffect(() => {
    dispatch(getAllAmmount())
  }, [getProduct])


  if(category === "all"){
    return (
      <div className="flex flex-col items-center justify-start fadeIn" key={index}>
          <div className="max-md:w-full relative">
              <img src={item.image} alt={item.name} className="rounded-t-2xl w-full"/>
              {getProduct[item._id] === undefined || getProduct[item._id] === 0 ? (
              <div className="absolute bottom-1 right-4 flex items-center gap-2">
                <img src={assets.add_icon_white} alt={assets.add_icon_green} onClick={() => dispatch(addToCart(item._id))} className="w-[35px]"/>
              </div>
              ) : (
              <div className="absolute bottom-1 right-4 flex items-center gap-2">
                <img src={assets.add_icon_green} alt={assets.add_icon_green} onClick={() => dispatch(addToCart(item._id))}/>
                <p className="text-white font-semibold md:text-[20px]">{getProduct[item._id]}</p>
                <img src={ assets.remove_icon_red} alt={ assets.remove_icon_red} onClick={() => dispatch(removecart(item._id))}/>
              </div>
              )}
          </div>
          <div className="border py-2 px-1 w-full">
            <header className="flex justify-between items-center my-3">
              <h2 className="font-semibold">{item.name}</h2>
              <img src={assets.rating_starts} alt="Stars" />
            </header>
            <p>{item.description}</p>
            <p className="font-bold text-orange-600">{item.price}$</p>
          </div>
      </div>
    )
  } else if(item.category === category){
    return (
      <div className="flex flex-col items-center justify-start fadeIn" key={index}>
          <div className="max-md:w-full relative">
              <img src={item.image} alt={item.name} className="rounded-t-2xl w-full"/>
              {getProduct[item._id] === undefined || getProduct[item._id] === 0 ? (
              <div className="absolute bottom-1 right-4 flex items-center gap-2">
                <img src={assets.add_icon_white} alt={assets.add_icon_white} onClick={() => dispatch(addToCart(item._id))} className="w-[35px]"/>
              </div>
              ) : (
              <div className="absolute bottom-1 right-4 flex items-center gap-2">
                <img src={assets.add_icon_green} alt={assets.add_icon_green} onClick={() => dispatch(addToCart(item._id))}/>
                <p className="text-white font-semibold md:text-[20px]">{getProduct[item._id]}</p>
                <img src={ assets.remove_icon_red} alt={ assets.remove_icon_red} onClick={() => dispatch(removecart(item._id))}/>
              </div>
              )}
          </div>
          <div className="border py-2 px-1 w-full">
            <header className="flex justify-between items-center my-3">
              <h2 className="font-semibold">{item.name}</h2>
              <img src={assets.rating_starts} alt="Stars" />
            </header>
            <p>{item.description}</p>
            <p className="font-bold text-orange-600">{item.price}$</p>
          </div>
      </div>
    )
  }
}

export default Cart