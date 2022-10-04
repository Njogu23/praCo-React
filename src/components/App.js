import React, {useEffect, useState} from "react";

const FilterByBodyPart = () => { 
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=> {
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
  },[])
  

  const targets = bodyParts.map((item, index) => {
    return <button 
    key={index} 
    style={{
      fontSize:"15px", 
      background:"black", 
      color:"white",
      padding:"15px",
      cursor:"pointer",
      margin:"2px"
    }} >{item}</button>
  })

  return (
    <section style={{display:"flex", flexDirection:"column", background:"maroon"}}>
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

const SearchBar = () => {
  return (
    <div style={{padding:"15px", textAlign:"center"}}>
      <form>
        <input type="search" placeholder="search" style={{fontSize:"25px"}} ></input>
      </form>
    </div>
    
  )
}

const NavBar = () => {
  return (
    <div style={{display:"flex", padding:"2px", justifyContent:"center", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
     <h4 style={{padding:"15px"}}>Home</h4>
     <h4 style={{padding:"15px"}}>Workouts</h4>
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
      <SearchBar />
      <FilterByBodyPart />
    </div>
  );
}

export default App;
