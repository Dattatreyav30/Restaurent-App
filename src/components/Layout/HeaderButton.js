import { Fragment } from "react";

import CartIcon from "./CartIcon";

import './HeaderButton.css'

const HeaderButton = () => {
  return (
    <Fragment>
      <button className='button'>
        <span className="icon">
          <CartIcon />
        </span>
        <span  >your cart</span>
        <span className="badge">3</span>
      </button>
    </Fragment>
  );
};

export default HeaderButton;
