
import HeaderButton from "./HeaderButton";
import Summary from "../Meals/Summary";
import DummyMeals from "../Meals/DummyMeals";

import mealImage from "../../assets/meal.avif";
import "./Header.css";
import CartProvider from "../store/CartProvider";
const Header = () => {
  return (
    <CartProvider>
      <header className="header">
        <h1>FoodieFinds</h1>
        <HeaderButton />
      </header>
      <div className="main-image">
        <img src={mealImage} alt="delicous food" />
        <Summary />
        <DummyMeals />
      </div>
    </CartProvider>
  );
};
export default Header;
