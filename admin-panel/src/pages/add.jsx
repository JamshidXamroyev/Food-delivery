import { useState } from 'react'
import {assets} from '../admin_assets/assets'
import { toast } from 'react-toastify'

const Add = () => {
  const [image, setImage] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Salad")
  const [load, setLaod] = useState(false)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLaod(true);  // Yangi yuklash holatini boshlash
 
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);  // 'imageFile' fayl inputidagi fayl

    try {
      console.log(formData);
        const response = await fetch('/add', {
            method: 'POST',
            body: formData  // Ma'lumotlarni formData formatida yuborish
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);  // Xatolikni tashlash
        } else {
            console.log(data);  // Yuborilgan ma'lumot
            toast.success('Food added!');
        }
    } catch (error) {
        console.log(error);
        toast.error('Failed to add food!');
    } 
};
  return ( 
    <section className="md:w-1/2 w-full mb-6 md:px-7 px-2">
      {/* <h2 className='text-center text-4xl font-bold'>Add a new Food</h2> */}
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-2 mt-6">
          <p>Upload image</p>
          <label htmlFor="image" className='w-[180px]'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="imagee" />
          </label>
          <input type="file" id='image' onChange={(e) => setImage(e.target.files[0]) } hidden/>
        </div>

        <div className='md:w-1/2 w-full my-4 flex flex-col'>
          <p>Food name</p>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} name='name' className='w-full py-2 border px-3 rounded-sm focus:border-black outline-none' placeholder='Enter food name...'/>
        </div>

        <div className='my-4 md:w-1/2 w-full'>
          <p>Food description</p>
          <textarea name="description" rows={6} onChange={(e) => setDescription(e.target.value)} value={description} className='w-full border focus:border-black p-2 outline-none' placeholder='Enter description here'></textarea>
        </div>

        <div className='flex justify-between items-center gap-5 md:w-1/2 w-full'>
          <div className='w-1/2'>
            <p>Product category</p>
            <select name='category' onChange={(e) => setCategory(e.target.value)} value={category} className='w-full border my-2 p-1 outline-none focus:border-black'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              {load}
            </select>
          </div>

          <div className='w-1/2'>
            <p>Product Price</p>
            <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} value={price} placeholder='$20' className='w-full p-1 my-2 outline-none border focus:border-black'/>
          </div>
        </div>
        <button type='submit' className='md:w-1/2 w-full my-2 border py-1 border-orange-700 bg-orange-600 text-white font-semibold active:bg-orange-700 rounded-sm'>ADD</button>
      </form>
    </section>
  )
}

export default Add