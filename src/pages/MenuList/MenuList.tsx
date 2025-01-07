import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard/index";
import { IProduct } from "../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../../server/helpers/api";
import style from "./MenuList.module.css";

export const MenuList = () => {
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
  return (
    <div className={style["product-card"]}>
      {products?.map((item) => (
        <ProductCard
          id={item.id}
          name={item.name}
          description={item.description.join(", ")}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default MenuList;
