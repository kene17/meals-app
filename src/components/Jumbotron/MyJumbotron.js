import React, {useState, useContext} from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import {MyContext} from "../../context"
const MyJumbotron = () => {
  const [searchInput, setSearchInput] = useState("");
  const {setMeals} = useContext(MyContext);
  const handleSearch =()=>{
     axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
     .then(({data})=> setMeals(data.meals));

  }
  return (
    <div className="my-jumbotron">
    <h1>Welcome</h1>
    <h2>You can search for your favorite meals</h2>
    <div className="button-input">
      <InputGroup className="mb-3 ">
        <FormControl
          placeholder="Search For A Meal"
          aria-label="Search For A Meal"
          aria-describedby="meal-search-button"
          value ={searchInput}
          onChange={(e)=>{setSearchInput(e.target.value)}}
        />
        <Button variant="danger" id="meal-search-button" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup></div>
    </div>
  );
};

export default MyJumbotron;
