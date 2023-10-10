import { ImYoutube } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <div className="flex z-30 flex-row w-full justify-between items-center px-12 mt-3 footer">
        <div>
      <h1 className="font-semibold">Find near you..</h1>
        </div>
      <div className="flex flex-row justify-between items-center gap-5 text-white ">
        <ImYoutube className="text-xl icons"/>
        <BsTwitter className="text-xl icons"/>
        <AiFillInstagram className="text-xl icons"/>
      </div>
    </div>
  )
}

export default Footer
