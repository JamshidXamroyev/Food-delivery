import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/navbar/navbar"
import SideBar from "./components/sideBar/side-bar"
import Add from "./pages/add"
import Order from './pages/order'
import List from './pages/list'

const App = () => {
  return (
    <>
        <Navbar />
        <ToastContainer />
        <hr />
        <div className="flex md:px-5">
          <SideBar />
          <Routes>
              <Route path="/add" element={<Add />}/>
              <Route path="/order" element={<Order />}/>
              <Route path="/list" element={<List />}/>
          </Routes>
        </div>
    </>
  )
}

export default App