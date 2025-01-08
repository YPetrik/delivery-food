import { useEffect, useState } from "react";
import axios from "axios";

import { PREFIX } from "../../../server/helpers/api";
import { IProduct } from "../../interfaces/product.interface";

import style from "./Register.module.css";

export const Register = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getMenu = async () => {
    try {
      const { data } = await axios.get<IProduct[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  if (products.length === 0) {
    return <h1>Loading...</h1>;
  }
  return <div className={style["product-card"]}>Register</div>;
};
