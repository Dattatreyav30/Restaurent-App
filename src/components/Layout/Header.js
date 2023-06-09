import { Fragment } from "react";

import HeaderButton from "./HeaderButton";

import mealImage from "../../assets/meal.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>Dine Ease</h1>
        <HeaderButton />
      </header>
      <div className="main-image">
        <img src={mealImage} alt="delicous food" />
      </div>
    </Fragment>
  );
};
export default Header;
