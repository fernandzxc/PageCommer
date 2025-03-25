import { BiMenu } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed w-[calc(100lvw-47.5px)] ">
      <header className="w-full bg-[#ffffffa3]">
        <h1 className="bg-gray-400 text-white text-center p-1 opacity-85">
          MONTO MÍNIMO DE COMPRA $100.000 - ENVÍOS A TODO EL PAÍS
        </h1>
        <div className="flex justify-between items-center px-2 py-6">
          <div className="flex flex-row-reverse gap-4">
            <div className="border-black border rounded-2xl flex justify-between">
              <input
                placeholder="Buscar"
                className="px-4 py-1 rounded-2xl outline-none text-black bg-transparent"
              />
              <button className="px-2">
                <CiSearch className="size-5" />
              </button>
            </div>
            <BiMenu className="size-7" />
          </div>
          <h1 className="text-5xl absolute left-1/2 -translate-x-1/2 font-bold font-serif cursor-pointer">
            PAGE E-COMMER
          </h1>
          <MdOutlineShoppingBag className="size-6 cursor-pointer" />
        </div>
      </header>
    </div>
    
  );
};

export default Header;
