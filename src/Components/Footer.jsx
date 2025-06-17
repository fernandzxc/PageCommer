import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-around bg-gray-700 w-full p-5">
      <div>
        <h1 className="text-lg text-gray-300 pb-2">REDES SOCIALES</h1>
        <div className="flex gap-5">
          <FaFacebook className="z-10 size-5 cursor-pointer text-[#1877F2]" />
          <GrInstagram className="z-10 size-5 cursor-pointer text-fuchsia-600" />
          <BsTwitterX className="z-10 size-5 cursor-pointer" />
        </div>
      </div>
      
      <div>
        <h1 className="text-gray-300 text-lg pb-2">CATEGORIAS</h1>
        <div className="text-white flex flex-col gap-3">
          <a href="#" className="z-10">Inicio</a>
          <a href="#" className="z-10">Productos</a>
          <a href="#" className="z-10">Contacto</a>
          <a href="#" className="z-10">Preguntas Frecuentes</a>
        </div>
      </div>

      <div>
        <h1 className="text-gray-300 text-lg pb-2">CONTACTANOS</h1>
        <ul className="text-white flex flex-col gap-3">
          <a href="#">5842456789875</a>
          <a href="">pagecommerce@gmail.com</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
