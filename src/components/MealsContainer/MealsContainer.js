import React from "react";
import MealCard from "../MealCard/MealCard";
import './styles.css'
const MealsContainer = (props) => {
  return (
    <div className="meals-container">
      {props.meals.map((meal) => (
        <MealCard key={meal.idMeal} {...meal}/>
      ))}
    </div>
  );
};

export default MealsContainer;
