import { BiMenu } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import {Link} from "react-router-dom" 

const Header = () => {
  return (
    <div className="fixed w-full z-10">
      <header className=" hover:bg-[#ffffffa3] w-full duration-500">
        <h1 className=" bg-gray-700 text-white text-center p-1 opacity-85">
          MONTO MÍNIMO DE COMPRA $100.000 - ENVÍOS A TODO EL PAÍS
        </h1>
        <div className="flex justify-between items-center px-2 py-6 relative">
          <div className="flex flex-row-reverse gap-4">
            <div className="flex gap-5 ">
              <Link to='/' className="text-slate-400 hover:text-black">Inicio</Link>
              <Link to='/AllProducts' className="text-slate-400 hover:text-black">Productos</Link>
              <Link to='/Contact' className="text-slate-400 hover:text-black">Quienes Somos</Link>
            </div>
            <div className="border-black border rounded-2xl flex justify-between">
              <input
                placeholder="Buscar"
                className="px-4 py-1 rounded-2xl outline-none bg-transparent hover:placeholder:text-black"
              />
              <button className="px-2">
                <CiSearch className="size-5" />
              </button>
            </div>
            <BiMenu className="size-7 cursor-pointer" />
          </div>
          <MdOutlineShoppingBag className="size-6 cursor-pointer absolute right-2" />
        </div>
      </header>
    </div>
  );
};

export default Header;
