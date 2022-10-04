import React, {useEffect, useState} from "react";

const FilterByBodyPart = () => {
  return (
    <div></div>
  )
}

const NavBar = () => {
  return (
    <div>
     <p>HOME</p>
     <p>WORKOUTS</p>
    </div>
    
  )
}

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
  console.log(workouts)

  return (
    <div className="w-screen">
      <NavBar />
      <header>Hello</header>
      <FilterByBodyPart />
    </div>
  );
}

export default App;
