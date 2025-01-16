import { useState } from "react"
import { assets } from "../../assets/frontend_assets/assets"

const Login = ({setOpen, open}) => {
    const [currState, setCurrState] = useState("Register")
  return (
    <section className={`w-[100vw] h-[100vh] flex justify-center fadeIn items-center absolute z-10 bg-[#000000c2] ${open ? "block" : "hidden"}`}>
        <div className="flex flex-col gap-4 bg-white p-5 md:w-1/2 w-full rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{currState}</h1>
                <img src={assets.cross_icon} alt={assets.cross_icon} onClick={() => setOpen(false)}/>
            </div>
            <form className="flex flex-col items-start md:gap-6 gap-4 md:w-full">
                {currState === "Login" ? <></> : <input type="text" placeholder="Enter Your  name.."  className="w-full border-black py-2 border px-2 rounded-sm" required/>}
                <input type="email" placeholder="Enter email" className="w-full border-black py-2 border px-2 rounded-sm"  required/>
                <input type="password" placeholder="Enter password.." className="w-full border-black py-2 border px-2 rounded-sm"  required/>
                <div className="flex gap-4">
                    <input type="checkbox" className="p-3"  required/>
                    <p>Siz bizning barcha qoidalaramizga rozilik bildirasizmi</p>
                </div>
                <button className="w-full border bg-orange-600 text-white py-2 rounded-md active:bg-orange-800 font-semibold">{currState}</button>
            </form>
            {currState === "Login"
            ? <p className="text-center">Create a new Account <span onClick={() => setCurrState("Register")} className="text-blue-600 cursor-pointer"> Click here</span></p> 
            : <p className="text-center">Login your Account <span onClick={() => setCurrState("Login")} className="text-blue-600 cursor-pointer"> Click here</span></p>}
            </div>
    </section>
  )
}

export default Login