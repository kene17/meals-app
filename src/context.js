import React, { createContext, useState } from "react";
export const MyContext = createContext();
const AppContext = ({ children }) => {
    const [meals, setMeals]=useState([])
  return (
    <MyContext.Provider value={{ meals, setMeals }}>{children}</MyContext.Provider>
  );
};

export default AppContext;
