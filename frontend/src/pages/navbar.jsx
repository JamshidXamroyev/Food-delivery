import { useEffect, useState } from "react"
import {assets} from '../assets/frontend_assets/assets'
import { useDispatch, useSelector } from "react-redux"
import {logoutUser} from '../reducers/user';
import { useNavigate } from "react-router-dom"

const Navbar = ({setOpen}) => {
  const navbar_lists = [
    {name: "home", link: "home"},
    {name: "menu", link: "start"},
    {name: "mobile app", link: "finish"},
    {name: "contact us", link: "footer"}
  ]
  const [active, setActive] = useState("home")
  const {ammount} = useSelector(state => state.food)
  const dispatch = useDispatch()
  const [userpanel, setUserpanel] = useState(false)
  const [dot, setDot] = useState(false)
  const navigate = useNavigate()
  const {user} = useSelector(state => state.user)

  useEffect(() => {
    if(ammount > 0){
      setDot(true)
    }else{
      setDot(false)
    }
  }, [ammount])

  useEffect(() => {
    let screenWidth = window.innerWidth;
    let image = document.getElementById("responsive-img");
    if (screenWidth <= 768) {
      image.src = assets.middleLogo;
    } else if(screenWidth > 768){
      image.src = assets.logo;
    }
  }, [])

  return (
    <nav id="header" className="flex justify-between items-center md:py-6 py-2 border-b z-[11] bg-white">
      <div className="lg:text-5xl md:text-4xl text-3xl font-bold text-orange-600 cursor-pointer" onClick={() => setActive("home")}>
        <img src={assets.logo} alt="logo" id="responsive-img" className="max-md:w-[40px] ml-2 w-[180px]" onClick={() => navigate("/")}/>
      </div>
      <div className="flex justify-center items-center gap-5 text-[20px]">
        {navbar_lists.map((item, i) => (
          <a key={item.name} href={`#${item.link}`} onClick={() => setActive(item.name)} className={`list-none md:block hidden hover:border-b-2 border-black cursor-pointer select-none ${active === item && "border-b-2 border-black"}`}>{item.name}</a>
        ))}
      </div>
      <div className="flex justify-center items-center md:gap-6 gap-3 text-gray-700">
        <i class="fa-solid fa-magnifying-glass text-2xl cursor-pointer"></i>
        <i class="fa-solid fa-basket-shopping text-2xl cursor-pointer relative" onClick={() => navigate('/order')}>
        {dot ? <div className="absolute -top-1 -right-1 p-1.5 rounded-full bg-orange-600"></div> : ""}
        </i>
        {user ? (
          <>
            <i class="fa-solid fa-user text-2xl cursor-pointer" onClick={() => setUserpanel(prev => !prev)}></i>
            <div className={`absolute ${userpanel ? "top-16" : "-top-[20%]"} z-10 flex justify-normal flex-col gap-2 duration-300 border-2 border-orange-600 max-md:right-2 lg:right-44 p-4 rounded-md bg-white`}>
              <li className="flex justify-between items-center gap-3 w-full cursor-pointer">
                <img src={assets.bag_icon} alt="" />
                <h1>Orders</h1>
              </li>
              <hr />
              <li className="flex justify-between items-center gap-3 w-full cursor-pointer" onClick={() => dispatch(logoutUser())}>
                <img src={assets.logout_icon} alt="" />
                <h1>Orders</h1>
              </li>
            </div>
          </>
        ): (
          <button className="md:px-6 px-3 py-1 rounded-3xl text-center border hover:bg-gray-200" onClick={() => setOpen(true)}>Sign in</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar