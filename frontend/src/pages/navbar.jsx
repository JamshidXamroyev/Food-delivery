import { useEffect, useState } from "react"
import {assets} from '../assets/frontend_assets/assets'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Navbar = ({setOpen}) => {
  const navbar_lists = ["home", "menu", "mobile app", "contact us"]
  const [active, setActive] = useState("home")
  const {getProduct} = useSelector(state => state.food)
  const [dot, setDot] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    for(let i = 0; i < 32; i++){
      if(getProduct[i] > 0){
        setDot(true)
      }
    }
  }, [getProduct])

  return (
    <nav className="flex justify-between items-center py-4 border-b">
      <div className="lg:text-5xl md:text-4xl text-3xl font-bold text-orange-600 cursor-pointer" onClick={() => setActive("home")}>
        <img src={assets.logo} alt="logo" className="max-md:w-[120px]" onClick={() => navigate("/")}/>
      </div>
      <div className="flex justify-center items-center gap-5 text-[20px]">
        {navbar_lists.map((item, i) => (
          <li key={i} onClick={() => setActive(item)} className={`list-none md:block hidden hover:border-b-2 border-black cursor-pointer select-none ${active === item && "border-b-2 border-black"}`}>{item}</li>
        ))}
      </div>
      <div className="flex justify-center items-center md:gap-6 gap-3 text-gray-700">
        <i class="fa-solid fa-magnifying-glass md:text-2xl cursor-pointer"></i>
        <i class="fa-solid fa-basket-shopping md:text-2xl cursor-pointer relative" onClick={() => navigate('/order')}>
        {dot ? <div className="absolute -top-1 -right-1 p-1.5 rounded-full bg-orange-600"></div> : ""}
        </i>
        <button className="md:px-6 px-3 py-1 rounded-3xl text-center border hover:bg-gray-200" onClick={() => setOpen(true)}>Sign in</button>
        {/* <i class="fa-solid fa-user md:text-2xl cursor-pointer"></i> */}
      </div>
    </nav>
  )
}

export default Navbar