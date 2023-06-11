import { Fragment } from "react";

import ReactDOM from "react-dom";

import Card from "../UI/Card";

const Cart = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Card />, document.getElementById("overlay-root"))}
    </Fragment>
  );
};

export default Cart;
