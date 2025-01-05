import cn from "classnames";
import { IHeadlingProps } from "./Headling.props";

import style from "./Headling.module.css";

export const Headling = (props: IHeadlingProps) => {
  const { className, children, ...other } = props;
  return (
    <h1 className={cn(style["h1"], className)} {...other}>
      {children}
    </h1>
  );
};
