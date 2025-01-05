import { NavLink, Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import { Button } from "../components/Button";
import cn from "classnames";

export const Layout = () => {
  return (
    <div className={style["layout"]}>
      <div className={style["sidebar"]}>
        <div className={style["user"]}>
          <img className={style["avatar"]} src="/public/avata.svg" alt="avata" />
          <div className={style["name"]}>Семен Андреев</div>
          <div className={style["email"]}>semen_andr@gmail.com</div>
        </div>
        <div className={style["menu"]}>
          <NavLink
            className={({ isActive }) =>
              cn(style["link"], {
                [style.active]: isActive,
              })
            }
            to="/"
          >
            <img className={style["img"]} src="/public/menu.svg" alt="menu" />
            Меню
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(style["link"], {
                [style.active]: isActive,
              })
            }
            to="/cart"
          >
            <img className={style["img"]} src="/public/bag.svg" alt="bag" />
            Карзина
          </NavLink>
        </div>
        <Button appearance="big" className={style["exit-btn"]}>
          <img className={style["exit-img"]} src="/public/exit.svg" alt="exit" /> Выход
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
