import { Fragment } from "react";

import "./MealForm.css";

const MealForm = () => {
  return (
    <Fragment>
      <form className="meal-form">
        <label>Quantity</label>
        <input type="number" className="meal-input" />
        <button>+Add</button>
      </form>
    </Fragment>
  );
};

export default MealForm;
