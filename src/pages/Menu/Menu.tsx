import { useEffect, useState } from "react";
import { Headling } from "../../components/Headling/index";
import { ProductCard } from "../../components/ProductCard/index";
import { Search } from "../../components/Search/index";
import { PREFIX } from "../../../server/helpers/api";
import { IProduct } from "../../interfaces/product.interface";
import style from "./Menu.module.css";

export const Menu = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getMenu = async () => {
    const response = await fetch(`${PREFIX}/products`).catch((e) => {
      console.log(`Случилась беда -> ${e}`);
      return;
    });

    if (!response?.ok) {
      return;
    }
    const data = (await response.json()) as IProduct[];
    setProducts(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  console.log("products", products);

  return (
    <>
      <div className={style["head"]}>
        <Headling>Меню</Headling>
        <Search className={style[""]} placeholder="Введите блюдо или состав" />
      </div>
      <div className={style["product-card"]}>
        {products.map((item) => (
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
