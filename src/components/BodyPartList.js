import React, {useEffect, useState} from "react";


const BodyPartsList = ({workouts}) => { 
    const [bodyParts, setBodyParts] = useState([])
    const [targetWorkouts, setTargetWorkouts] = useState("")

    const filterByBodyPart = workouts.filter(item => item.bodyPart === targetWorkouts)
    
    
    const workout = filterByBodyPart.map(item => {
      return (
        <section key={item.id} style={{padding:"2px", border:"solid", borderRadius:"8px"}}>
          <h2>{item.name}</h2>
          <img src={item.gifUrl} alt={item.name}></img>
          <p>target muscle : {item.target}</p>
          <p>equipment : {item.equipment}</p>
        </section>
      )
    })

    const handleWorkouts = (e) => {
      setTargetWorkouts(e.target.textContent)
     
    }

    const handdleDelete = (e) => {
      setTargetWorkouts(null)
    }
    useEffect(()=> {
      fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',{
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'f9b7cb80aemsh9af6049dbb14119p1eef6djsnde28bb7c7c07',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
         }
    })
      .then(response => response.json())
      .then(response => setBodyParts(response))
      .catch(err => console.error(err))
    },[])
    
  
    const targets = bodyParts.map((item, index) => {
      return (
        <div style={{textAlign:"center"}}>
          <button 
            key={index} 
            style={{
            fontSize:"15px",
            background:"gray",
            color:"white",
            padding:"15px",
            cursor:"pointer",
            margin:"2px",
            width:"300px", 
            border:"none"    
              }} 
            onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
            onMouseOut={(e)=> e.target.style.background = "gray" } 
            onFocus={handleWorkouts} onBlur={handdleDelete}>{item}</button>
            <button
            style={{
              fontSize:"15px",
              background:"gray",
              color:"white",
              padding:"15px",
              cursor:"pointer",
              margin:"2px",
              border:"none" 
              }} 
              onMouseOver={(e)=> e.target.style.background = "#D3D3D3"} 
              onMouseOut={(e)=> e.target.style.background = "gray" } 
              onClick={handdleDelete} >x</button>
            {workout}
        </div>
      
      )
    })
  
    return (
      <section style={{display:"flex", flexDirection:"column", background:"maroon"}}>
        {targets}
      </section>
    )
   
  }

export default BodyPartsList;