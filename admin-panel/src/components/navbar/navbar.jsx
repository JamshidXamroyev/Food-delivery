import { assets } from "../../admin_assets/assets"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center md:px-10">
        <div>
            <img src={assets.logo} alt="Image" />
        </div>
        <div>
            <img src={assets.profile_image} alt="profile image" />
        </div>
    </nav>
  )
}

export default Navbar