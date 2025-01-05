import { IProductCardProps } from "./ProductCard.props";
import style from "./ProductCard.module.css";
import { Link } from "react-router-dom";

export const ProductCard = (props: IProductCardProps) => {
  const { id, title, description, image, price, rating } = props;
  return (
    <Link className={style["link"]} to={`/product/${id}`}>
      <div className={style["card"]}> 
        <div
          className={style["head"]}
          style={{ backgroundImage: `url(${image})`, borderRadius: "20px", width: "310px" }}
        >
          <div className={style["price"]}>
            {price} &nbsp;
            <span className={style["currency"]}>$</span>
          </div>
          <button className={style["add-to-card"]}>
            <img
              className={style["img-bag-shopping"]}
              src="/public/bag-shopping.svg"
              alt="bag-shopping"
            />
          </button>
          <div className={style["rating"]}>
            {rating} &nbsp; <img className={style["star"]} src="/public/star.svg" alt="star" />
          </div>
        </div>
        <div className={style["footer"]}>
          <div className={style["title"]}>{title}</div>
          <div className={style["description"]}>{description}</div>
        </div>
      </div>
    </Link>
  );
};
