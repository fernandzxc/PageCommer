import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsDetail from "./Components/ProductsDetail.jsx";
import App from "./App.jsx";
import "./index.css";
import AllProducts from "./Components/AllProducts.jsx";
import Contact from "./Components/Contact.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ProductsDetail/:id", element: <ProductsDetail /> },
  { path: "/AllProducts", element: <AllProducts /> },
  { path: "/Contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
