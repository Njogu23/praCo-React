import React, {useState} from "react";


const BodyPartsList = ({workouts, bodyPartList}) => { 
    const [targetWorkouts, setTargetWorkouts] = useState("")

    const filterByBodyPart = workouts.filter(item => item.bodyPart === targetWorkouts)
    
    
    const workout = filterByBodyPart.map((item, index) => {
      return (
        <section key={index} style={{padding:"2px", border:"solid", borderRadius:"8px"}}>
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

    const handleDelete = () => {
      setTargetWorkouts(null)
    }
    
    
  
    const targets = bodyPartList.map((item, index) => {
      return (
        <div style={{textAlign:"center"}} key={index} >
          <button 
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
            onFocus={handleWorkouts}>{item}</button>
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
              onClick={handleDelete} >x</button>
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