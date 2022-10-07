import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home'
import Workout from "./Workout";
import NavBar from '../components/NavBar'
import Challenge from "./Challenge";
import MyRecords from "./MyRecords";

function App() {
  const [workouts, setWorkouts] = useState([])
  const [bodyPartList, setBodyPartList] = useState([])
  

  useEffect(()=>{

    fetch('https://exercisedb.p.rapidapi.com/exercises',{
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'd595c4331bmsh78067501c0d5056p1a9a6ajsnc6dd3a85e9a6',
		    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	   }
  })
	.then(response => response.json())
	.then(response => setWorkouts(response))
	.catch(err => console.error(err))
  }, [])





  useEffect(()=> {
    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd595c4331bmsh78067501c0d5056p1a9a6ajsnc6dd3a85e9a6',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
       }
  })
    .then(response => response.json())
    .then(response => setBodyPartList(response))
    .catch(err => console.error(err))
  },[])


  return (
    <>
      <BrowserRouter>
        <Route path="/">
          <NavBar />
        </Route>
      <Switch >
      <Route path="/workouts">
        <Workout workouts={workouts} bodyPartList={bodyPartList}/>
      </Route> 
       <Route path="/challenge" >
        <Challenge workouts={workouts} bodyPartList={bodyPartList}/>
      </Route>
      <Route path="/myrecords">
        <MyRecords />
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
