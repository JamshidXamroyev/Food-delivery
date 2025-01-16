import { NavLink } from "react-router-dom"
import { assets } from "../../admin_assets/assets"

const SideBar = () => {
  return (
    <aside className="min-h-[100vh] justify-end md:w-[20vw] w-[15vw] max-md:mr-4 border-r-2">
        <div className="pt-[20%] flex flex-col gap-4">
          <NavLink to={'/add'} className="flex gap-3 cursor-pointer select-none p-2 ml-[20%] border-2 duration-300">
            <img src={assets.add_icon} alt="Plus" />
            <h2 className="md:block hidden">Add Items</h2>
          </NavLink>

          <NavLink to={'/list'} className="flex gap-3 cursor-pointer select-none p-2 ml-[20%] border-2 duration-300">
            <img src={assets.order_icon} alt="Plus" />
            <h2 className="md:block hidden">List Items</h2>
          </NavLink>

          <NavLink to={"/order"} className="flex gap-3 cursor-pointer select-none p-2 ml-[20%] border-2 duration-300">
            <img src={assets.order_icon} alt="Plus" />
            <h2 className="md:block hidden">Orders</h2>
          </NavLink>
        </div>
    </aside>
  )
}

export default SideBar