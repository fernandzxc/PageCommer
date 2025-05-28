import { TiHomeOutline } from "react-icons/ti";
import { IoShirtOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className=" bg-[#ffffffa3] w-32 h-[calc(100vh-64px)] absolute top-0 right-0 z-50 rounded-l-lg p-5">
      <ul className="">
        <a href="" className="flex items-center gap-1"> 
          <TiHomeOutline /> Inicio
        </a>

        <a href="" className="flex items-center gap-1"> 
          <IoShirtOutline /> Productos
        </a>

        <a href="" className="flex items-center gap-1"> 
          <GrContact /> Contacto
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
