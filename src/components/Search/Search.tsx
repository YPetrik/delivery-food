import { ISearchProps } from "./Search.props";
import { forwardRef } from "react";
import cn from "classnames";
import style from "./Search.module.css";

export const Search = forwardRef<HTMLInputElement, ISearchProps>(
  ({ className, isValid, ...other }, ref) => {
    return (
      <div className={style['input-wrapper']}>
        <input
          className={cn(style["input"], className, {
            [style["invalid"]]: !isValid,
          })}
          ref={ref}
          {...other}
        />
        <img className={style["icon"]} src="/public/search.svg" alt="search" />
      </div>
    );
  }
);
