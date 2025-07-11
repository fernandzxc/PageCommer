import { Link } from "react-router-dom";
import { useState } from "react";

const Products = ({ nombre, id, precio, hover, normalImg }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="shadow-xl"
    >
      <Link to={`/ProductsDetail/${id}`}>
        <figure
          className="bg-cover bg-center aspect-[3/4] duration-300 transition-all"
          style={{
            backgroundImage: isHover ? `url(${hover})` : `url(${normalImg})`,
          }}
        ></figure>
        <div className="flex flex-col text-center gap-2 py-5">
          <h2>{nombre}</h2>
          <h2 className="font-bold text-lg">{precio}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Products;
