import { IButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = (props: IButtonProps) => {
  const { children, className, appearance = "small", ...other } = props;

  return (
    <button
      {...other}
      className={cn(styles["button"], styles["accent"], className, {
        [styles["small"]]: appearance === "small",
        [styles["big"]]: appearance === "big",
      })}
    >
      {children}
    </button>
  );
};
