import { Link } from "react-router-dom";

import { Button } from "../../components/Button/index";
import { Headling } from "../../components/Headling/index";
import { Input } from "../../components/Input/index";

import style from "./Login.module.css";

export const Login = () => {
  const handleSubmit = (event: FocusEvent) => {
    event.preventDefault();
    console.log("event", event);
  };

  return (
    <div className={style["login"]} onSubmit={handleSubmit}>
      <Headling>Вход</Headling>
      <form className={style["form"]}>
        <div className={style["field"]}>
          <label htmlFor="email"> Ваш email</label>
          <Input id="email" placeholder="Email" />
        </div>
        <div className={style["field"]}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" type="password" placeholder="Пароль" />
        </div>
        <Button appearance="big">Вход</Button>
        <div className={style["wrapper-links"]}>
          <Link className={style["links"]} to="/auth/register">
            Нет аккаунта?
          </Link>
          <Link className={style["links"]} to="/auth/login">
            Зарегестрироваться
          </Link>
        </div>
      </form>
    </div>
  );
};
