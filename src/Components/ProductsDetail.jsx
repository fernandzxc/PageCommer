import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import "../assets/css/estilo.css";
import model16 from "/src/assets/img/Model-16.jpg";
import model161 from "/src/assets/img/Model-16.1.jpg";
import model15 from "/src/assets/img/Model-15.jpg";
import model151 from "/src/assets/img/Model-15.1.jpg";
import model14 from "/src/assets/img/Model-14.jpg";
import model141 from "/src/assets/img/Model-14.1.jpg";
import model13 from "/src/assets/img/Model-13.jpg";
import model131 from "/src/assets/img/Model-13.1.jpg";
import model12 from "/src/assets/img/Model-12.jpg";
import model121 from "/src/assets/img/Model-12.1.jpg";
import model10 from "/src/assets/img/Model-10.jpg";
import model101 from "/src/assets/img/Model-10.1.jpg";
import model9 from "/src/assets/img/Model-9.jpg";
import model91 from "/src/assets/img/Model-9.1.jpg";
import model8 from "/src/assets/img/Model-8.jpg";
import model81 from "/src/assets/img/Model-8.1.jpg";
import model7 from "/src/assets/img/Model-7.jpg";
import model71 from "/src/assets/img/Model-7.1.jpg";
import model6 from "/src/assets/img/Model-6.jpg";
import model61 from "/src/assets/img/Model-6.1.jpg";
import model5 from "/src/assets/img/Model-5.jpg";
import model51 from "/src/assets/img/Model-5.1.jpg";
import model4 from "/src/assets/img/Model-4.jpg";
import model41 from "/src/assets/img/Model-4.1.jpg";
import model3 from "/src/assets/img/Model-3.jpg";
import model31 from "/src/assets/img/Model-3.1.jpg";
import model1 from "/src/assets/img/Model-1.jpg";
import model11 from "/src/assets/img/Model-1.1.jpg";
import model04 from "/src/assets/img/Model-0.4.jpg";
import model05 from "/src/assets/img/Model-0.5.jpg";
import model2 from "/src/assets/img/Model-2.jpg";
import model21 from "/src/assets/img/Model-2.1.jpg";

const productData = {
  1: {
    name: "BLUSA NEW SONIA",
    price: 50.0,
    description: "Blusa de alta calidad con diseño moderno.",
    HoverImage: model161,
    NormalImage: model16,
    color: ["Negro", "Beige", "Blanco"],
    details: "100% algodón, lavable a máquina",
  },
  2: {
    name: "VESTIDO ELEGANTE",
    price: 75.0,
    description: "Vestido elegante para ocasiones especiales.",
    HoverImage: model151,
    NormalImage: model15,
    color: ["Negro", "Rojo", "Gris"],
    details: "Poliester y elastano, lavado en seco recomendado",
  },
  3: {
    name: "FALDA MODERNA",
    price: 45.0,
    description: "Falda ajustada con corte moderno.",
    HoverImage: model141,
    NormalImage: model14,
    color: ["Negro", "Blanco"],
    details: "Mezcla de lino, lavable a máquina",
  },
  4: {
    name: "BLUSA NEW SONIA",
    price: 50.0,
    description: "Blusa de alta calidad con diseño moderno.",
    HoverImage: model131,
    NormalImage: model13,
    color: ["Negro", "Marron", "Blanco", "Gris"],
    details: "100% algodón, lavable a máquina",
  },
  5: {
    name: "VESTIDO ELEGANTE",
    price: 75.0,
    description: "Vestido elegante para ocasiones especiales.",
    HoverImage: model121,
    NormalImage: model12,
    color: ["Negro", "Marron", "Blanco", "Gris"],
    details: "Poliester y elastano, lavado en seco recomendado",
  },
  6: {
    name: "FALDA MODERNA",
    price: 45.0,
    description: "Falda ajustada con corte moderno.",
    HoverImage: model101,
    NormalImage: model10,
    color: ["Negro", "Blanco", "Gris"],
    details: "Mezcla de lino, lavable a máquina",
  },
  7: {
    name: "BLUSA NEW SONIA",
    price: 50.0,
    description: "Blusa de alta calidad con diseño moderno.",
    HoverImage: model91,
    NormalImage: model9,
    color: ["Negro", "Beige", "Blanco"],
    details: "100% algodón, lavable a máquina",
  },
  8: {
    name: "VESTIDO ELEGANTE",
    price: 75.0,
    description: "Vestido elegante para ocasiones especiales.",
    HoverImage: model81,
    NormalImage: model8,
    color: ["Negro", "Blanco", "Beige"],
    details: "Poliester y elastano, lavado en seco recomendado",
  },
  9: {
    name: "FALDA MODERNA",
    price: 45.0,
    description: "Falda ajustada con corte moderno.",
    HoverImage: model71,
    NormalImage: model7,
    color: ["Negro", "Blanco", "Gris"],
    details: "Mezcla de lino, lavable a máquina",
  },
  10: {
    name: "BLUSA NEW SONIA",
    price: 50.0,
    description: "Blusa de alta calidad con diseño moderno.",
    HoverImage: model61,
    NormalImage: model6,
    color: ["Negro", "Beige", "Blanco"],
    details: "100% algodón, lavable a máquina",
  },
  11: {
    name: "VESTIDO ELEGANTE",
    price: 75.0,
    description: "Vestido elegante para ocasiones especiales.",
    HoverImage: model51,
    NormalImage: model5,
    color: ["Negro", "Rojo", "Gris"],
    details: "Poliester y elastano, lavado en seco recomendado",
  },
  12: {
    name: "FALDA MODERNA",
    price: 45.0,
    description: "Falda ajustada con corte moderno.",
    HoverImage: model41,
    NormalImage: model4,
    color: ["Negro", "Blanco", "Gris"],
    details: "Mezcla de lino, lavable a máquina",
  },
  13: {
    name: "BLUSA NEW SONIA",
    price: 50.0,
    description: "Blusa de alta calidad con diseño moderno.",
    HoverImage: model31,
    NormalImage: model3,
    color: ["Negro", "Blanco"],
    details: "100% algodón, lavable a máquina",
  },
  14: {
    name: "VESTIDO ELEGANTE",
    price: 75.0,
    description: "Vestido elegante para ocasiones especiales.",
    HoverImage: model11,
    NormalImage: model1,
    color: ["Negro", "Blanco", "Gris"],
    details: "Poliester y elastano, lavado en seco recomendado",
  },
  15: {
    name: "FALDA MODERNA",
    price: 45.0,
    description: "Falda ajustada con corte moderno.",
    HoverImage: model05,
    NormalImage: model04,
    color: ["Negro", "Beige", "Blanco"],
    details: "Mezcla de lino, lavable a máquina",
  },
  16: {
    name: "FALDA MODERNA",
    price: 45.0,
    description: "Falda ajustada con corte moderno.",
    HoverImage: model21,
    NormalImage: model2,
    color: ["Negro", "Verde", "Blanco"],
    details: "Mezcla de lino, lavable a máquina",
  },
};

const ProductsDetail = () => {
  const { id } = useParams();
  const product = productData[id];
  const [randomProducts, setRandomProducts] = useState([]);

  const getRandomProducts = () => {
    const allIds = Object.keys(productData);

    const aletoryIds = [...allIds].sort(() => Math.random() - 0.5);

    return aletoryIds.slice(0,4);
  }

  useEffect(() => {
    setRandomProducts(getRandomProducts());
  }, []);

  return (
    <div>
      <Header />
      <main className="flex pt-28 justify-between p-9">
        <figure className="w-[12%] gap-4 flex flex-col">
          <img src={product.NormalImage} />
          <img src={product.HoverImage} />
        </figure>
        <figure className="object-cover w-1/2">
          <img src={product.NormalImage} />
        </figure>
        <div className="w-1/3 flex flex-col gap-4">
          <h1 className="text-lg">{product.name}</h1>
          <h2 className="text-base">${product.price}</h2>
          <hr className="border-gray-600" />
          <div className="flex flex-row gap-2">
            <p>Color</p>
            <button className="border-2 border-black hover:bg-gray-400 text-xs py-[2px] px-3 rounded-sm ">
              {product.color[0]}
            </button>
            <button className="border-2 border-black hover:bg-gray-400 text-xs py-[2px] px-3 rounded-sm ">
              {product.color[1]}
            </button>
            <button className="border-2 border-black hover:bg-gray-400 text-xs py-[2px] px-3 rounded-sm ">
              {product.color[2]}
            </button>
          </div>
          <div>
            <p>Descripcion</p>
            <section className="text-sm py-2">
              <strong>Coleccion Otoño Invierno 2025</strong>
              <p>{product.description} Talla Unica</p>
            </section>
          </div>
          <button className="w-full py-2 bg-black text-white hover:bg-gray-700 rounded-md text-base">
            Agregar al carrito
          </button>
        </div>
      </main>
      <div className="flex flex-col w-full items-center py-8 gap-8">
        <h1 className="text-2xl">Productos Similares</h1>
        <figure className="grid grid-rows-1 md:grid-cols-4 sm:grid-cols-2 w-9/12 gap-5">
          {randomProducts.map((id) => (
            <Products
              key={id}
              nombre={productData[id].name}
              id={id}
              precio={`$${productData[id].price}`}
              hover={productData[id].HoverImage}
              normalImg={productData[id].NormalImage}
            />  
          ))}
        </figure>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsDetail;
