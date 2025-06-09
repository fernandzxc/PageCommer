import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-around bg-gray-700 w-full p-5">
      <div>
        <h1 className="text-lg text-gray-300 pb-2">REDES SOCIALES</h1>
        <figure className="flex gap-5">
          <FaFacebook className="size-5 text-[#1877F2]" />
          <GrInstagram className="size-5 text-fuchsia-600" />
          <BsTwitterX className="size-5" />
        </figure>
      </div>

      <div>
        <h1 className="text-gray-300 text-lg pb-2">CATEGORIAS</h1>
        <ul className="text-white flex flex-col gap-3">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Preguntas Frecuentes</a>
          </li>
          <li>
            <a href="#">Preguntas Frecuentes</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-gray-300 text-lg pb-2">CONTACTANOS</h1>
        <ul className="text-white flex flex-col gap-3">
          <li>5842456789875</li>
          <li>pagecommerce@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
