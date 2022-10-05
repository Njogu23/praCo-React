import React, {useEffect, useState} from "react";

const BodyPartsList = () => { 
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
      return (
        <div style={{textAlign:"center"}}>
          <button 
            key={index} 
            style={{
            fontSize:"15px", 
            background:"black", 
            color:"white",
            padding:"15px",
            cursor:"pointer",
            margin:"2px",
            width:"300px"
              }}
            onFocus={e=> console.log(e.target.textContent)} >{item}</button>
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