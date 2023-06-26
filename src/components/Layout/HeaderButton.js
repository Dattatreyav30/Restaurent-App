import { Fragment, useContext, useState } from "react";

import CartIcon from "./CartIcon";

import "./HeaderButton.css";

import Cart from "../Cart/Cart";


import CartContext from "../store/cart-context";

const HeaderButton = () => {
  const [isValid, setIsvalid] = useState(false);

  const headerButtonEventListner = () => {
    setIsvalid(true);
  };

  const onCloseEventHandler = () => {
    setIsvalid(false);
  };

  const cartCtx = useContext(CartContext);

  const numberofCartItems = cartCtx.items.length

  return (
    <Fragment>
      <button className="button" onClick={headerButtonEventListner}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>your cart</span>
        <span className="badge">{numberofCartItems}</span>
      </button>
      {isValid && <Cart onClose={onCloseEventHandler} />}
    </Fragment>
  );
};

export default HeaderButton;
