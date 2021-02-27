import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Signup from "./Signup";
import Signin from "./Signin";
import Navbar from "./Navbar"
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />

        <Redirect to="/" />
        <Home />
      </Switch>
    </>
  );
};


export default App;
