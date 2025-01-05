import { useParams } from "react-router-dom";


export const Product = () => {

    const {id} = useParams()

    console.log("param", id);
  return <div>Product + {id}</div>;
}
