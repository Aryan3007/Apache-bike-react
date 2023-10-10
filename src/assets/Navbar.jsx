import { GoSearch } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";
function Navbar() {
  return (
    <div className="flex flex-row justify-between w-full z-20">
      <h1 className="text-lg font-semibold">Rides.</h1>
      <div className="flex flex-row gap-8">
      <GoSearch className="text-xl text-white"/>
      <RiMenu3Fill className="text-xl text-white menubtn"/>
      </div>
    </div>
  )
}

export default Navbar
