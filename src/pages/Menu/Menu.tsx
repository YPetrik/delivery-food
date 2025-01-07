import { useEffect, useState } from "react";
import { Headling } from "../../components/Headling/index";
import { ProductCard } from "../../components/ProductCard/index";
import { Search } from "../../components/Search/index";
import { PREFIX } from "../../../server/helpers/api";
import { IProduct } from "../../interfaces/product.interface";
import style from "./Menu.module.css";
import axios from "axios";

export const Menu = () => {
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

  return (
    <>
      <div className={style["head"]}>
        <Headling>Меню</Headling>
        <Search className={style[""]} placeholder="Введите блюдо или состав" />
      </div>
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
    </>
  );
};
