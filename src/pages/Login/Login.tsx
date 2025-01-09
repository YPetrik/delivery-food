import { Link } from "react-router-dom";

import { Button } from "../../components/Button/index";
import { Headling } from "../../components/Headling/index";
import { Input } from "../../components/Input/index";

import style from "./Login.module.css";

interface ILoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & ILoginForm;
    const { email, password } = target;

    handleSendLogin(email.value, password.value);
  };

  const handleSendLogin = (email: string, password: string) => {
    if (email.length >= 3 && password.length >= 3) {
      console.log("Успешно залогинились");
    } else {
      console.log("email и password должные быть дленее 3-х символов");
    }
  };

  return (
    <div className={style["login"]}>
      <Headling>Вход</Headling>
      <form className={style["form"]} onSubmit={handleSubmit}>
        <div className={style["field"]}>
          <label htmlFor="email"> Ваш email</label>
          <Input id="email" placeholder="Email" name="email" />
        </div>
        <div className={style["field"]}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" type="password" placeholder="Пароль" name="password" />
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
