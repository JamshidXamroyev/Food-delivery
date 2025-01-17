import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()

  const fetchList = async() => {
    setLoad(true)
    const response = await axios.get("/list")
    setList(response.data)
    setLoad(false)
  }

  const deleteHandler = async id => {
    setLoad(true)
    await axios.delete(`/remove/${id}`)
    setLoad(false)
    navigate("/")
  }
  
  useEffect(() => {
    fetchList()
  }, [])

  return (
    <section className="w-full md:px-4">
      <h2 className="my-2">All Food Lists</h2>
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-5 items-center gap-2 max-sm:text-[12px] border-t bg-gray-200 p-2">
          <b>Images</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {load ? (
          <div className="w-full h-[10vh] flex justify-center items-center">
            <div className="spinner"></div>
          </div>
        ) : (
          <div>
              {list.length !== 0 ? list.map((item, index) => (
              <div className="grid grid-cols-5 items-center gap-2 max-sm:text-[12px] border-y p-2 border-black">
                <img src={`http://localhost:2008/images/${item.image}`} alt="Images" className="w-[90px]"/>
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}$</p>
                <p className="cursor-pointer text-xl select-none" onClick={() => deleteHandler(item._id)}>x</p>
              </div>
            )) : (
              <div className="text-center">
                <h1 className="font-bold font-title my-2 md:text-4xl text-2xl"><span className="text-orange-800">No</span> Any Food</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default List