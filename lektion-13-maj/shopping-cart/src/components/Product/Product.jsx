import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();

  function handleClick() {
    props.setAmount(props.amount + 1);
  }

  function navigateToProductPage() {
    navigate(`/product/${props.title}`);
  }

  return (
    <article className="product">
      <img src={props.image} alt="" className="product__image" />
      <h2 className="product__title">{props.title}</h2>
      <p className="product__price">{props.price} kr</p>
      <footer className="product__buttons">
        <button onClick={handleClick} className="product__button">
          Add to cart
        </button>
        <button className="product__button" onClick={navigateToProductPage}>
          Se mer info
        </button>
      </footer>
    </article>
  );
}

export default Product;
