import { assets } from "../../assets/frontend_assets/assets";

const Header = () => {
  return (
    <section className="w-full relative md:min-h-[80vh] h-[400px] flex justify-start md:items-center items-end mt-10">
        <img src={assets.header_img} alt="header image" className="absolute fadeIn w-full h-full top-0 left-0 -z-10" />
        <div className="md:max-w-[50%] w-full px-2 flex flex-col gap-4 items-start mb-8">
            <h2 className="text-white md:text-6xl text-4xl font-bold">Lorem ipsum dolor sit amet.</h2>
            <p className="text-white">Lorem nesciunt ratione eum quia dolore ipsum placeat. Veritatis eaque quos excepturi voluptates ratione non quis cumque adipisci ab deleniti dolor magnam sapiente, pariatur quasi vero sit?</p>
            <button className="py-2 px-16 rounded-3xl duration-150 hover:bg-white hover:text-orange-600 font-semibold text-white border">View</button>
        </div>
    </section>
  )
}

export default Header