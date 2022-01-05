import React from "react";
import Navbar from "./components/Navbar";
import AppContext from "./context";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ErrorPage from "./pages/404/ErrorPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <AppContext>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </AppContext>
    </Router>
  );
};

export default App;
