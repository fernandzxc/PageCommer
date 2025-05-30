import { FcHome } from "react-icons/fc";
import { IoShirtOutline } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="absolute right-0 top-0 flex items-center bg-[#ffffff00] w-32 h-[calc(100vh-60px)] z-50 rounded-l-lg p-5 duration-700">
      <ul className="flex flex-col gap-2">
        <a href="" className="flex items-center gap-2 shadow-xl">
          <FcHome className="size-5"/> <h5 className=" text-red-500">Inicio</h5>
        </a>

        <a href="" className="flex items-center gap-2">
          <IoShirtOutline className="size-5" /> Productos
        </a>

        <a href="" className="flex items-center gap-2">
          <FcContacts className="size-5" /> Contacto
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
