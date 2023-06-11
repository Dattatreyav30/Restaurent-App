import { Fragment } from "react";

import ReactDOM from "react-dom";

import Card from "../UI/Card";

const Cart = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Card onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Cart;
