import "./style.css";
import { Product } from "../../common/types";
import Button from "../Button";
import { Link } from "react-router-dom";
import { getPrice } from "../../common/utils";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <section className="container">
      <Link className="link" aria-label="Go to product details" to={`product/${product.id}`}>
        <img src={product.image} width="auto" height="200px" alt="Image showing product details" />
        <h3 className="title">{product.title}</h3>
        <h4 className="price">{getPrice(product.price)}</h4>
      </Link>
      <Button className="cart-button">Add to cart</Button>
    </section>
  );
};

export default ProductCard;
