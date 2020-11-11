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
import Blog from './Components/Blog/Blog';
import Headers from './Components/Header/Headers';



function App() {
  return (
    <Router>
      <Headers/>
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
     <Route path="/project">
      <Project></Project>
      </Route>
      <Route  path="/resume">
      <Resume></Resume>
      </Route>
      <Route path="/blog">
        <Blog></Blog>
      </Route>
  </Switch>
  </Router>
   

  );
}

export default App;
