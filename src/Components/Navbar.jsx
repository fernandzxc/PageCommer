import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { IoShirtOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className=" bg-[#ffffffa3] w-32 h-[calc(100vh-64px)] absolute top-0 right-0 z-50">
      <ul className="">
        <li>
          <a href="">
            <TiHomeOutline /> Inicio
          </a>
        </li>
        <li>
          <a href="">
            <IoShirtOutline /> Productos
          </a>
        </li>
        <li>
          <a href="">
            <GrContact /> Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
