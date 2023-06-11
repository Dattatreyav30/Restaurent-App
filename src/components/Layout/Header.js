import { Fragment } from "react";

import HeaderButton from "./HeaderButton";
import Summary from "../Meals/Summary";
import DummyMeals from "../Meals/DummyMeals";

import mealImage from "../../assets/meal.avif";
import "./Header.css";
import Cart from "../Cart/Cart";

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
        <DummyMeals />
        <Cart/>
      </div>
    </Fragment>
  );
};
export default Header;
