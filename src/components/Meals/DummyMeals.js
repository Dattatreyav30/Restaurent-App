import { Fragment } from "react";
import "./DummyMeals.css";

import MealForm from "./MealFrom";

const meals = [
  {
    id: 1,
    name: "chicken biriyani",
    descriptiopn: "boneless",
    price: "₹200",
    qty : undefined
  },
  {
    id: 2,
    name: "chapati and rice",
    descriptiopn: "with vegtable stew and sambar",
    price: "₹150",
    qty : undefined
  },
  {
    id: 3,
    name: "chicken kabab",
    descriptiopn: "made with finest ingredients",
    price: "₹100",
    qty : undefined
  },
  {
    id: 4,
    name: "pizza",
    descriptiopn: "with extra cheese",
    price: "₹300",
    qty : 0
  },
];

const DummyMeals = () => {
  return (
    <Fragment>
      <section className="meal-style">
        {meals.map((meal) => {
          return (
            <Fragment key={meal.id}>
              <div className="meal-item">
                <h4 className="meal-name">{meal.name}</h4>
                <p className="meal-description">{meal.descriptiopn}</p>
                <p className="meal-price">{meal.price}</p>

              </div>
              <div>
                <MealForm meal = {meal} />
              </div>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
};

export default DummyMeals;
