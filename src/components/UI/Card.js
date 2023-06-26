import "./Card.css";
import CartContext from "../store/cart-context";
import { Fragment, useContext } from "react";

const Card = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <section className="totalmeal-overlay">
      {cartCtx.items.map((meal) => (
        <Fragment key={meal.id}>
          <p id="name">{meal.name}</p>
          <h3 id="price">{meal.price}</h3>
          <h4 id="mealQty">x{meal.qty}</h4>
          <form>
            <div className="button-container">
              <button id="minus" onClick={(e)=>{
                e.preventDefault();
                cartCtx.updateQuantity(meal, -1)
              }}>
                -
              </button>
              <p>{meal.qty}</p>
              <button id="plus" onClick={(e)=>{
                e.preventDefault();
                cartCtx.updateQuantity(meal, 1)
              }}>
                +
              </button>
            </div>
          </form>
        </Fragment>
      ))}

      <button onClick={props.onClose} id="openClose">
        close
      </button>
      <button id="openClose">order</button>
    </section>
  );
};

export default Card;
