import { lazy, StrictMode, Suspense } from "react";
import { createBrowserRouter, LoaderFunctionArgs, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import axios from "axios";

import { Cart } from "./pages/Cart/index";
import { ErrorPage } from "./pages/ErrorPage/index";
import { Product } from "./pages/Product/index";
import { Layout } from "./layout/MenuLayout/index";
import { AuthLayout } from "./layout/AuthLayout/index";
import { Login } from "./pages/Login/index";
import { Register } from "./pages/Register/index";

import { IProduct } from "./interfaces/product.interface";

import { PREFIX } from "../server/helpers/api";

import "./index.css";
import RequireAuth from "../server/helpers/RequireAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Menu = lazy(() => import("./pages/Menu/index"));

const handleParamsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { data } = await axios.get<IProduct>(`${PREFIX}/products/${params.id}`);
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>, // Сюда можно передать компонент с отображением красивой страницы
        loader: handleParamsLoader,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
