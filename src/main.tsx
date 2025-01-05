import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Menu } from "./pages/Menu/index";
import { Cart } from "./pages/Cart/index";
import { ErrorPage } from "./pages/ErrorPage/index";
import { Layout } from "./layout/index";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }, 
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
