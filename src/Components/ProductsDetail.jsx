import { useParams } from "react-router-dom";
import Header from "./Header";

const productData = {
  1: {
    name: "BLUSA NEW SONIA",
    price: 50.00,
    description: "Blusa de alta calidad con diseño moderno.",
    sizes: ["S", "M", "L"],
    details: "100% algodón, lavable a máquina"
  },
  2: {
    name: "VESTIDO ELEGANTE",
    price: 75.00,
    description: "Vestido elegante para ocasiones especiales.",
    sizes: ["XS", "S", "M"],
    details: "Poliester y elastano, lavado en seco recomendado"
  },
  3: {
    name: "FALDA MODERNA",
    price: 45.00,
    description: "Falda ajustada con corte moderno.",
    sizes: ["S", "M"],
    details: "Mezcla de lino, lavable a máquina"
  }
};

const ProductsDetail = () => {
  const { id } = useParams();
  const products = productData[id];

  return (
    <div>
      <header>
        <Header />
      </header>
      <body></body>
    </div>
  );
};

export default ProductsDetail;
