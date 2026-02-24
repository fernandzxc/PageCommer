import { useState, useEffect } from "react";

const Admin = () => {
  const [Modal, setModal] = useState(false);
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    img1: "",
    img2: "",
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
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/productos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...nuevoProducto,
          precio: parseFloat(nuevoProducto.precio),
        }),
      });

      const productoCreado = await response.json();
      setProductos([...productos, productoCreado]);
      setModal(false);
      setNuevoProducto({ nombre: "", precio: "", img1: "", img2: "" });
    } catch (error) {
      console.error("Error al crear el nuevo Producto: ", error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <header className="bg-gray-800 py-4 px-2 text-white ">
        <h1 className="uppercase">Panel de Administracion</h1>
      </header>

      <body className="flex flex-col justify-center px-5 gap-4">
        <button
          className="bg-blue-500 w-36 rounded-sm py-1 text-white"
          onClick={() => setModal(true)}
        >
          Agregar Producto
        </button>

        {Modal && (
          <div className="bg-opacity-30 bg-black z-50 w-full h-full absolute flex justify-center items-center ">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 ">
              <h2 className="text-2xl font-bold pb-4">
                Agregar un Nuevo Producto
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="flex gap-5">
                    <label>Nombre del Producto</label>
                    <input
                      type="text"
                      name="nombre"
                      value={nuevoProducto.nombre}
                      onChange={handleInputChange}
                      required
                      className="px-2 py-1 border-black border-2 rounded-lg "
                    />
                  </div>
                  <div className="flex gap-5 justify-around">
                    <label>Precio</label>
                    <input
                      type="number"
                      name="precio"
                      step="0.01"
                      value={nuevoProducto.precio}
                      onChange={handleInputChange}
                      required
                      className="px-2 py-1 border-2 rounded-lg border-black "
                    />
                  </div>
                  <div className="flex gap-5 justify-around">
                    <label>Imagen 1#</label>
                    <input
                      type="file"
                      value={nuevoProducto.precio}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex gap-5 justify-around">
                    <label>Imagen 2#</label>
                    <input
                      type="file"
                      value={nuevoProducto.precio}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex">
                  <button className="" type="button" onClick={() => setModal(false)}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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
                  <button className="bg-blue-500 px-2 rounded-sm">
                    Editar
                  </button>
                  <button className="bg-red-500 px-2 rounded-sm">
                    Eliminar
                  </button>
                </th>
              </tr>
              <tr className="divide-x divide-gray-400"></tr>
            </tbody>
          ))}
        </table>
      </body>
    </div>
  );
};

export default Admin;
