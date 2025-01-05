import { Headling } from "../../components/Headling/index";
import { Search } from "../../components/Search/index";
import style from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={style["head"]}>
      <Headling>Меню</Headling>
      <Search className={style['']} placeholder="Введите блюдо или состав"/>
    </div>
  );
};
