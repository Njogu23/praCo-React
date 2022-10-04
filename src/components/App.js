import React, {useEffect, useState} from "react";

const FilterByBodyPart = () => { 
  const [bodyParts, setBodyParts] = useState([])

  fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',{
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'd44ca9abf0msh20ad5caa52fd555p17b31djsn05d5cbbdd215',
		    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	   }
  })
	.then(response => response.json())
	.then(response => setBodyParts(response))
	.catch(err => console.error(err))

  const targets = bodyParts.map((item, index) => {
    return <button key={index} style={{fontSize:"15px", background:"black", color:"white"}}>{item}</button>
  })

  return (
    <section style={{display:"flex", flexDirection:"column"}}>
      {targets}
    </section>
  )
  // const filterByBodyPart = (bodyPart) => {
  //   workouts.filter(item => item.bodyPart === bodyPart)
  // }
  

  // const workout = filterByBodyPart.map(item => {
  //   return (
  //     <section key={item.id}>
  //       <h2>{item.name}</h2>
  //       <img src={item.gifUrl}></img>
  //       <p>target muscle : {item.target}</p>
  //       <p>equipment : {item.equipment}</p>
  //     </section>
  //   )
  // })

  // return (
  //   <div>
  //     {workout}
  //   </div>
  // )
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
