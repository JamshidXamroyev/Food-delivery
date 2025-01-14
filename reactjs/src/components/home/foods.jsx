import { food_list } from "../../assets/frontend_assets/assets"
import Cart from "./Cart"

const Foods = ({category}) => {
  return (
    <section className="pb-9">
        <h1 className="capitalize font-bold md:text-5xl text-3xl text-center my-12">{category} Foods</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-3 gap-7 ">
            {food_list.map((item, index) => (
                <Cart item={item} category={category} index={index}/>
            ))}
        </div>
    </section>
  )
}

export default Foods