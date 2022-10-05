import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App'
import Workout from './pages/Workout'


ReactDOM.render(
  <BrowserRouter>
    <Route path="/workouts">
      <Workout />
    </Route>
    <Route exact path="/">
      <App />
    </Route>
  </BrowserRouter>,
   document.getElementById("root")
)
