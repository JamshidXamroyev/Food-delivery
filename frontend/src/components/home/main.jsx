import { useEffect, useState } from "react"
import Category from "./category"
import Header from "./header"
import Foods from "./foods"

const Main = () => {
  const [category, setCategory] = useState("all")

  return (
    <div>
        <Header />
        <Category category={category} setCategory={setCategory}/>
        <Foods category={category}/>
    </div>
  )
}

export default Main