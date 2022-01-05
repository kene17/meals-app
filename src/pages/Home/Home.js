
import axios from "axios";
import MyJumbotron from '../../components/Jumbotron/MyJumbotron'
import React, {useEffect, useContext} from "react";
import MealsContainer from "../../components/MealsContainer/MealsContainer";
import { MyContext } from "../../context";
const Home = () => {
    const {meals, setMeals} = useContext(MyContext);
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(({data}) => setMeals(data.meals))
        .catch(err => console.log(err));
    
      }, []);
    return (
        <div>
            <MyJumbotron />
            <MealsContainer meals={meals}/> 
        </div>
    )
}

export default Home
