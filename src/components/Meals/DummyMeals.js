import { Fragment } from "react";
import "./DummyMeals.css";

import MealForm from "./MealFrom";

const meals = [
  {
    id: 1,
    name: "chicken biriyani",
    descriptiopn: "quality at its best",
    price: "₹200",
  },
  {
    id: 3,
    name: "chapati and rice",
    descriptiopn: "with vegtable stew and sambar",
    price: "₹150",
  },
  {
    id: 2,
    name: "chicken kabab",
    descriptiopn: "made with finest ingredients",
    price: "₹100",
  },
  {
    id: 4,
    name: "Non veg pizza",
    descriptiopn: "with extra cheese",
    price: "₹300",
  },
];

const DummyMeals = () => {
  return (
    <Fragment>
      <section className="meal-style">
        {meals.map((meal) => {
          return (
            <Fragment>
              <div key={meal.id} className="meal-item">
                <h4 className="meal-name">{meal.name}</h4>
                <p className="meal-description">{meal.descriptiopn}</p>
                <p className="meal-price">{meal.price}</p>
              </div>
              <div>
                <MealForm />
              </div>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
};

export default DummyMeals;
