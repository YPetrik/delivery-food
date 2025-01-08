import { useLoaderData, useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/product.interface";

export const Product = () => {
  const { id } = useParams();
  const data = useLoaderData() as IProduct;

  console.log("data__Product", data.name);
  console.log("param", id);
  return <div>Product + {id}</div>;
};
