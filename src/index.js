import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Workout from './pages/Workout'
import NavBar from './components/NavBar'
import "./index.css"


ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
      <NavBar />
    </Route>
    <Switch >
    <Route path="/workouts">
      <Workout />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    </Switch>
  </BrowserRouter>,
   document.getElementById("root")
)
