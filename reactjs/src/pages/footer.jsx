import {assets} from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-[10%] grid-cols-1 bg-gray-500 items-center py-16 gap-8">
      <div className="flex flex-col gap-4">
        <img src={assets.logo} alt="" className='w-1/2'/>
        <p className='text-white w-full text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, harum doloribus. Tenetur modi quis, eaque perferendis dolor reprehenderit voluptatibus ipsum?</p>
      </div>
      <div className='list-none flex flex-col gap-3 justify-center items-center'>
        <h2 className='text-white font-bold text-2xl'>Company</h2>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>Home</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>About Us</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>Delivery</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>Pricacy Lucy</li>
      </div>
      <div className='list-none flex flex-col gap-3 justify-center items-center'>
        <h2 className='text-white font-bold text-2xl'>Get in touch</h2>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>+998 95 453 34 23</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>contact@example.com</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>Uzbekistan, Tashkent</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>Help</li>
      </div>

      <div className='list-none flex flex-col gap-3 justify-center items-center'>
        <h2 className='text-white font-bold text-2xl'>Developer</h2>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>+998 65 453 34 23</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>jamshid@example.com</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>Uzbekistan, Surkhandaryo</li>
        <li className='text-white hover:translate-x-2 hover:font-semibold cursor-pointer duration-200'>Portfolio</li>
      </div>
    </footer>
  )
}

export default Footer