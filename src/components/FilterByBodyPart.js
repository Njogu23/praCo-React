import React from "react";
import Comment from "./Comments";

const FilterByBodyPart = ({workouts}) => {
    const filterByBodyPart = (bodyPart) => {
      workouts.filter(item => item.bodyPart === bodyPart)
    }
    
    
    const workout = filterByBodyPart.map(item => {
      return (
        <section key={item.id} style={{}}>
          <h2>{item.name}</h2>
          <img src={item.gifUrl}></img>
          <p>target muscle : {item.target}</p>
          <p>equipment : {item.equipment}</p>
          <Comment />
        </section>
      )
    })
    
    return (
      <div>
        {workout}
      </div>
    )
  }

export default FilterByBodyPart;