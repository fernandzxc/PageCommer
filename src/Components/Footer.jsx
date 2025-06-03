import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-700 w-full ">
      <div className="flex flex-col p-5"> 
        <h1 className="text-lg text-white">Redes Sociales</h1>
        <figure className="flex gap-5">
          <FaFacebook className="size-5 text-blue-600"/>
          <GrInstagram className="size-5 text-fuchsia-600" />
          <BsTwitterX className="size-5" />
        </figure>
      </div>
    </div>
  );
};

export default Footer;
