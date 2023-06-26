import "./Card.css";

import CartContext from "../store/cart-context";
import { Fragment, useContext } from "react";

const Card = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <section className="totalmeal-overlay">
      {cartCtx.items.map((meal) => {
        return (
          <Fragment>
            <p id = "name">{meal.name}</p>
            <p id="description">{meal.descriptiopn}</p>
            <h4>Price</h4>
            <h3 id="price">{meal.price}</h3>
          </Fragment>
        );
      })}
      {/* <h2>TotalAmount  {cartCtx.totalAmount}</h2> */}
      <button onClick={props.onClose}>close</button>
      <button>order</button>
    </section>
  );
};

export default Card;
