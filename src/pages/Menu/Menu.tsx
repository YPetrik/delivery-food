import { Headling } from "../../components/Headling/index";
import { ProductCard } from "../../components/ProductCard/index";
import { Search } from "../../components/Search/index";
import style from "./Menu.module.css";

export const Menu = () => {
  return (
    <>
      <div className={style["head"]}>
        <Headling>Меню</Headling>
        <Search className={style[""]} placeholder="Введите блюдо или состав" />
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждайся"
          description="Салями, руккола, помидоры и всяка всячина"
          image='/public/karbonara.png'
          price={650}
          rating={4}
        />
      </div>
    </>
  );
};
