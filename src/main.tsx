import { StrictMode } from "react";
import { createBrowserRouter, LoaderFunctionArgs, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Menu } from "./pages/Menu/index";
import { Cart } from "./pages/Cart/index";
import { ErrorPage } from "./pages/ErrorPage/index";
import { Layout } from "./layout/index";
import { Product } from "./pages/Product/index";

import "./index.css";
import axios from "axios";
import { IProduct } from "./interfaces/product.interface";
import { PREFIX } from "../server/helpers/api";

const handleParamsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { data } = await axios.get<IProduct>(`${PREFIX}/products/${params.id}`);
  return data;
};

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
      {
        path: "/product/:id",
        element: <Product />,
        loader: handleParamsLoader,
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
