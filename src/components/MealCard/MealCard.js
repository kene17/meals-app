import React from "react";
import {Card, Button} from 'react-bootstrap'
import MealModal from "../MealModal/MealModal"
const MealCard = (props) => {
  return (
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.strMealThumb} />
        <Card.Body>
          <Card.Title>{props.strMeal}</Card.Title>
          <MealModal strMeal={props.strMeal} strInstructions={props.strInstructions}/>
        </Card.Body>
      </Card>
    
  );
};

export default MealCard;
