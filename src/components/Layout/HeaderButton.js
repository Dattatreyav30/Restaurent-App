import { Fragment, useState } from "react";

import CartIcon from "./CartIcon";

import "./HeaderButton.css";

import Cart from "../Cart/Cart";

const HeaderButton = () => {
  const [isValid, setIsvalid] = useState(false);

  const headerButtonEventListner = () => {
    setIsvalid(true);
  };

  const onCloseEventHandler = ()=>{
    setIsvalid(false);
  }
  return (
    <Fragment>
      <button className="button" onClick={headerButtonEventListner}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>your cart</span>
        <span className="badge">3</span>
      </button>
      {isValid && <Cart onClose = {onCloseEventHandler}/>}
    </Fragment>
  );
};

export default HeaderButton;
