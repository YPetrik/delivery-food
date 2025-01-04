import { IButtonProps } from "./Button.props";
import cn from "classnames";
import "./Button.module.css";

export const Button = (props: IButtonProps) => {
  const { children, className, ...other } = props;

  return (
    <button {...other} className={cn("button accent", className)}>
      {children}
    </button>
  );
};
