import { Fragment, useContext } from "react";

import "./MealForm.css";

import CartContext from "../store/cart-context";

const MealForm = (props) => {
  // const [cartQty, setCartQty] = useState(0);

  // const onChangeQtyHandler = (e) => {
  //   setCartQty(e.target.value);
  // };

  const cartCtx = useContext(CartContext)

  const onSubmitInputHandler = (e) => {
    e.preventDefault();
    cartCtx.addItem(props.meal)
  };

  // const authCtx = useContext(CartContext)
  return (
    <Fragment>
      <form className="meal-form" onSubmit={onSubmitInputHandler}>
        <label>Quantity</label>
        <input
          type="number"
          className="meal-input"
        />
        <button>+Add</button>
      </form>
    </Fragment>
  );
};

export default MealForm;
