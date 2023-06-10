import { Fragment } from "react";

import HeaderButton from "./HeaderButton";
import Summary from "../Meals/Summary";

import mealImage from "../../assets/meal.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>FoodieFinds</h1>
        <HeaderButton />
      </header>
      <div className="main-image">
        <img src={mealImage} alt="delicous food" />
        <Summary />
      </div>
    </Fragment>
  );
};
export default Header;
