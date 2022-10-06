import React from "react";
import BodyPartsList from "../components/BodyPartList";

const Workout = ({workouts}) => {
    return(
        <div style={{color:"black"}}>
            <BodyPartsList workouts={workouts}/>
        </div>
    )
}


export default Workout;