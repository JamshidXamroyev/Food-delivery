import { useState } from "react"
import { menu_list } from "../../assets/frontend_assets/assets"

const Category = ({category, setCategory}) => {
  return (
    <section className="w-full" id="start">
      <h1 className="text-center lg:text-5xl md:text-4xl text-3xl font-bold my-3">Explore our menu</h1>
      <div className="flex overflow-x-scroll category items-center justify-between gap-12 my-12">
        {menu_list.map((item, index) => (
          <div key={index} >
            <img src={item.menu_image} alt={item.menu_name} onClick={() => category === item.menu_name ? setCategory("all") : setCategory(item.menu_name)} className={`cursor-grab select-none rounded-full w-[7.5vw] min-w-[80px] duration-150 ${item.menu_name === category ? "border-4 p-1 border-orange-600" : ""}`}/>
            <p className="font-semibold text-center mt-2">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category