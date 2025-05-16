import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import Navbar from "./Navbar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="fixed w-[calc(100lvw-47.5px)] ">
      <header className="w-full hover:bg-[#ffffffa3] duration-200">
        <h1 className="bg-gray-400 text-white text-center p-1 opacity-85">
          MONTO MÍNIMO DE COMPRA $100.000 - ENVÍOS A TODO EL PAÍS
        </h1>
        <div className="flex justify-between items-center px-2 py-6 relative">
          <div className="flex flex-row-reverse gap-4">
            {openMenu ? <Navbar /> : ""}
            <div className="border-black border rounded-2xl flex justify-between">
              <input
                placeholder="Buscar"
                className="px-4 py-1 rounded-2xl outline-none bg-transparent hover:placeholder:text-black"
              />
              <button className="px-2">
                <CiSearch className="size-5" />
              </button>
            </div>
            <BiMenu className="size-7 cursor-pointer" onClick={toggleMenu} />
          </div>
          <h1 className="text-5xl absolute left-1/2 -translate-x-1/2 font-bold font-serif cursor-pointer"></h1>
          <MdOutlineShoppingBag className="size-6 cursor-pointer" />
        </div>
      </header>
    </div>
  );
};

export default Header;
