import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

import Resume from './Components/Resume/Resume';
import Project from './Components/Project/Project';



function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
     <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/project">
      <Project></Project>
      </Route>
      <Route  path="/resume">
      <Resume></Resume>
      </Route>
  </Switch>
  </Router>
   

  );
}

export default App;
