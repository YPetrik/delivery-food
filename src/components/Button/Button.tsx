import { IButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = (props: IButtonProps) => {
  const { children, className, ...other } = props;

  return (
    <button {...other} className={cn(styles["button"], styles["accent"], className)}>
      {children}
    </button>
  );
};
