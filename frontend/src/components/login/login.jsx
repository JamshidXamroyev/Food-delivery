import { useState } from "react"
import { assets } from "../../assets/frontend_assets/assets"
import {useNavigate} from "react-router-dom";
import axios from "axios"
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux'
import {loginUser, logoutUser} from '../../reducers/user'

const Login = ({setOpen, open}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [currState, setCurrState] = useState("register")
    const [load, setLoad] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data, [name]: value}))
    }

    const onsubmitHandler = async event => {
        setLoad(true)
        let newUrl = `/${currState}`
        event.preventDefault()
        try {
            const response = await axios.post(newUrl, data)
            if(response.data.ok){
                navigate("/")
                dispatch(loginUser(response.data.token))
                toast.success(response.data.message)
                setOpen(false)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
        } finally{
            setData({name: "", email: "", password: "",})
        }
        setLoad(false)
    }
  return (
    <section className={`w-[100vw] h-[100vh] flex justify-center fadeIn items-center absolute z-10 bg-[#000000c2] ${open ? "block" : "hidden"}`}>
        <div className="flex flex-col gap-4 bg-white p-5 md:w-1/2 lg:w-1/4 w-full rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold capitalize">{currState}</h1>
                <img src={assets.cross_icon} alt={assets.cross_icon} onClick={() => setOpen(false)}/>
            </div>
            <form className="flex flex-col items-start md:gap-6 gap-4 md:w-full" onSubmit={onsubmitHandler}>
                {currState === "login" ? <></> : <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Enter Your  name.."  className="w-full border-black py-2 border px-2 rounded-sm" required/>}
                <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Enter email" className="w-full border-black py-2 border px-2 rounded-sm"  required/>
                <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Enter password.." className="w-full border-black py-2 border px-2 rounded-sm"  required/>
                <div className="flex gap-4">
                    <input type="checkbox" className="p-3"  required/>
                    <p>Siz bizning barcha qoidalaramizga rozilik bildirasizmi</p>
                </div>
                <button type="submit" className="w-full border capitalize bg-orange-600 text-white py-2 rounded-md active:bg-orange-800 font-semibold flex justify-center items-center gap-5">{currState}{load && <p className="spinner"></p>}</button>
            </form>
            {currState === "login"
            ? <p className="text-center">Create a new Account <span onClick={() => setCurrState("register")} className="text-blue-600 cursor-pointer"> Click here</span></p> 
            : <p className="text-center">Login your Account <span onClick={() => setCurrState("login")} className="text-blue-600 cursor-pointer"> Click here</span></p>}
            </div>
    </section>
  )
}

export default Login