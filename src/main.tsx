import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Asegúrate de importar RouterProvider
import LayoutMain from "./components/Layouts/LayoutMain.tsx";
import Home from "./pages/Home/Home.tsx"; // Importa Home desde su archivo
import CartProvider from "./context/CartProvider.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";

// Configuración del enrutador
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> }, // Usa el componente Home importado
      { path: "/checkout", element: <Checkout /> }, // Usa el componente Cart importado
    ],
  },
]);


// Renderiza la aplicación
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} /> {/* Usa RouterProvider aquí */}
    </CartProvider>
  </StrictMode>
);
