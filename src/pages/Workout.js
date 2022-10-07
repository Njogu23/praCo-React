import React from "react";
import BodyPartsList from "../components/BodyPartList";

const Workout = ({workouts, bodyPartList}) => {
    return(
        <div style={{color:"black"}}>
            <BodyPartsList workouts={workouts} bodyPartList={bodyPartList}/>
        </div>
    )
}


export default Workout;