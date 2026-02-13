import { useState, useEffect } from "react";

const Admin = () => {
  // const [nombre, setNomre] = useState('')
  // const [precio, setPrecio] = useState()
  // const [img1, setImg1] = useState([])
  // const [img2, setImg2] = useState([])
  const [productos, setProductos] = useState([]);

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

  return (
    <div className="flex flex-col gap-5">
      <header className="bg-gray-800 py-4 px-2 text-white">
        <h1 className="uppercase">Panel de Administracion</h1>
      </header>

      <body className="flex flex-col justify-center px-5">
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
                <th>
                  <button>Eliminar</button>
                  <button>Editar</button>
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
