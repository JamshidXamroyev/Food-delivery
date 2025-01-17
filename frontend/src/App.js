import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Main from "./components/home/main"
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import { useState } from "react"
import Login from "./components/login/login"
import BuyProduct from "./components/buyproduct/buyProduct"
import Order from "./components/order/order"

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <ToastContainer />
    <Login setOpen={setOpen} open={open}/>
      <div className="lg:w-[80%] md:w-[90%] w-[98%] mx-auto">
        <Navbar setOpen={setOpen}/>
        <Routes>
          <Route path="/" element={<Main />} loader="Salom"/>
          <Route path="/order" element={<BuyProduct />}/>
          <Route path="/order/payment" element={<Order />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App