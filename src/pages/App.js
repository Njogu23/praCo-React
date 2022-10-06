import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home'
import Workout from "./Workout";
import NavBar from '../components/NavBar'

function App() {
  const [workouts, setWorkouts] = useState({})
  

  useEffect(()=>{

    fetch('https://exercisedb.p.rapidapi.com/exercises',{
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'f9b7cb80aemsh9af6049dbb14119p1eef6djsnde28bb7c7c07',
		    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	   }
  })
	.then(response => response.json())
	.then(response => setWorkouts(response))
	.catch(err => console.error(err))
  }, [])


  return (
    <>
      <BrowserRouter>
        <Route path="/">
          <NavBar />
        </Route>
      <Switch >
      <Route path="/workouts">
        <Workout workouts={workouts}/>
      </Route>
      <Route exact path="/">
        <Home workouts={workouts}/>
     </Route>
     </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
