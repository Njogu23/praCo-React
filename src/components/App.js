import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar.js";

function App() {
  const [workouts, setWorkouts] = useState({})

  useEffect(()=>{

    fetch('https://exercisedb.p.rapidapi.com/exercises',{
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'd44ca9abf0msh20ad5caa52fd555p17b31djsn05d5cbbdd215',
		    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	   }
  })
	.then(response => response.json())
	.then(response => setWorkouts(response))
	.catch(err => console.error(err))
  }, [])


  return (
    <div  >
      <SearchBar workouts={workouts} />
    </div>
  );
}

export default App;
