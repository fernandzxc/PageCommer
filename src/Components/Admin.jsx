import { useState, useEffect } from "react";

const Admin = () => {
  const [modal, setModal] = useState(false);
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    img1: "",
    img2: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/productos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos: ", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNuevoProducto({...nuevoProducto, [name]: value})
  }

  return (
    <div className="flex flex-col gap-5">
      <header className="bg-gray-800 py-4 px-2 text-white">
        <h1 className="uppercase">Panel de Administracion</h1>
      </header>

      <body className="flex flex-col justify-center px-5 gap-4">
        <button className="bg-blue-500 w-36 rounded-sm py-1 text-white ">Agregar Producto</button>
        <table className="border-spacing-2 border table-auto border-gray-600 caption-top">
          <thead className="bg-gray-100 ">
            <tr className="divide-x divide-gray-400 ">
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen 1</th>
              <th>Imagen 2</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {productos.map((producto) => (
            <tbody key={producto.id} className="divide-y divide-gray-600">
              <tr className="divide-x divide-gray-400">
                <th>{producto.id}</th>
                <th>{producto.nombre}</th>
                <th>{producto.precio}</th>
                <th>{producto.img1}</th>
                <th>{producto.img2}</th>
                <th className="flex gap-2 justify-center text-white">
                  <button className="bg-blue-500 px-2 rounded-sm">Editar</button>
                  <button className="bg-red-500 px-2 rounded-sm">Eliminar</button>
                </th>
              </tr>
              <tr className="divide-x divide-gray-400">
                
              </tr>
            </tbody>
          ))}
        </table>
      </body>
    </div>
  );
};

export default Admin;
