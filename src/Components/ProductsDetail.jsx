import { useParams } from "react-router-dom";
import Header from "./Header";
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
    sizes: ["S", "M", "L"],
    details: "100% algodón, lavable a máquina",
  },
  2: {
    name: "VESTIDO ELEGANTE",
    price: 75.0,
    description: "Vestido elegante para ocasiones especiales.",
    sizes: ["XS", "S", "M"],
    details: "Poliester y elastano, lavado en seco recomendado",
  },
  3: {
    name: "FALDA MODERNA",
    price: 45.0,
    description: "Falda ajustada con corte moderno.",
    sizes: ["S", "M"],
    details: "Mezcla de lino, lavable a máquina",
  },
};

const ProductsDetail = () => {
  const { id } = useParams();
  const product = productData[id];

  return (
    <div>
      <header className="relative">
        <Header />
      </header>

      <main className="flex relative justify-between">
        <figure className="w-1/6">
          <img src={model161} />
          <img src={model161} />
        </figure>
        <figure className="object-cover w-1/3">
          <img src={model16} />
        </figure>
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>Talla</p>
          <p>Descripcion</p>
          <button>Agregar al carrito</button>
        </div>
      </main>
    </div>
  );
};

export default ProductsDetail;
