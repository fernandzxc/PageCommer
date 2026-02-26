import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { GiClothes } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="absolute right-0 top-0 flex items-center bg-[#ffffff00] w-32 h-[calc(100vh-60px)] z-50 rounded-l-lg p-5 duration-1000">
      <ul className="flex flex-col gap-2">
        <a href="" className="flex items-center gap-2 shadow-xl">
          <FcHome className="size-6"/> <h5 className="text-white">Inicio</h5>
        </a>

        <a href="" className="flex items-center gap-2">
          <GiClothes className="size-6"/> <h5 className="text-white">Productos</h5>
        </a>

        <a href="" className="flex items-center gap-2">
          <FcContacts className="size-6" /> <h5 className="text-white">Contacto</h5>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
