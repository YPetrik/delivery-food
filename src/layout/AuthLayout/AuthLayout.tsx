import { Outlet } from "react-router-dom";
import style from "./AuthLayout.module.css";

export const AuthLayout = () => {
  return (
    <div className={style["layout"]}>
      <div className={style["logo"]}>
        <img className={style["logo-img"]} src="/public/login.svg" alt="login" />
      </div>
      <div className={style["content"]}>
        <Outlet />
      </div>
    </div>
  );
};
