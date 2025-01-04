import { IInputProps } from "./Input.props";
import { forwardRef } from "react";
import cn from "classnames";
import style from "./Input.module.css";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, isValid, ...other }, ref) => {
    return (
      <input
        className={cn(style["input"], className, {
          [style["invalid"]]: !isValid,
        })}
        ref={ref}
        {...other}
      />
    );
  }
);
