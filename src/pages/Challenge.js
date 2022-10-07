import React, {useState} from "react";

const Challenge = ({workouts, bodyPartList}) => { 
    const [target, setTarget] = useState("")
    const [randomChallenge, setRandomChallenge] = useState("")

    const bodyWeightWorkouts = workouts.filter(item => item.equipment === "body weight")
    const challenge = bodyWeightWorkouts.filter(item => item.bodyPart === target)

    

    const handleDelete = () => {
        setRandomChallenge(null)
      }

    const workout = challenge.map((item, index) => {
        return (
          <section key={index} style={{padding:"2px", border:"solid", borderRadius:"8px", color:"black"}}>
            <h2>{item.name}</h2>
            <img src={item.gifUrl} alt={item.name}></img>
            <p>target muscle : {item.target}</p>
            <p>equipment : {item.equipment}</p>
          </section>
        )
      })

      const handleFilterByBodyWeight = (e) =>  {
        setTarget(e.target.textContent)
        setRandomChallenge(workout[Math.floor(Math.random()*workout.length)])
    }

      
 

    const targets = bodyPartList.map((item, index) => {
        return (
          <div style={{textAlign:"center", backgroundColor:"#0067A5"}} key={index} >
            <button 
              style={{
              fontSize:"15px",
              backgroundColor:"#0ABAB5",
              color:"white",
              padding:"15px",
              cursor:"pointer",
              margin:"2px",
              width:"300px", 
              border:"none"    
                }} 
              onMouseOver={(e)=> e.target.style.background = "#00FFEF"} 
              onMouseOut={(e)=> e.target.style.background = "#0ABAB5" } 
              onClick={handleFilterByBodyWeight}>{item}</button>
              <button
              style={{
                fontSize:"15px",
                background:"#0ABAB5",
                color:"white",
                padding:"15px",
                cursor:"pointer",
                margin:"2px",
                border:"none" 
                }} 
                onMouseOver={(e)=> e.target.style.background = "#00FFEF"} 
                onMouseOut={(e)=> e.target.style.background = "#0ABAB5" } 
                onClick={handleDelete} >x</button>
                {randomChallenge}
          </div>
        
        )
      })
    return (
        <div>
            {targets}
        </div>
        
    )
}

export default Challenge;