import React, { useState } from "react";
import "./BodyPartsList.css";

const BodyPartsList = ({ workouts, bodyPartList }) => {
  const [targetWorkouts, setTargetWorkouts] = useState("");

  const filterByBodyPart = workouts.filter(item => item.bodyPart === targetWorkouts);

  const handleWorkouts = (selectedBodyPart) => {
    setTargetWorkouts(selectedBodyPart);
  };

  const handleDelete = () => {
    setTargetWorkouts("");
  };

  const workoutButtons = bodyPartList.map((item, index) => (
    <div key={index} className="button-wrapper">
      <button
        className={`workout-button ${targetWorkouts === item ? "active" : ""}`}
        onClick={() => handleWorkouts(item)}
      >
        {item}
      </button>
      <button
        className="delete-button"
        onClick={handleDelete}
      >
        &times;
      </button>

      {targetWorkouts === item && filterByBodyPart.length > 0 && (
        <div className="workout-results">
          <h3>Workouts for: {targetWorkouts}</h3>
          {filterByBodyPart.map((workoutItem, workoutIndex) => (
            <section key={workoutIndex} className="workout-info">
              <h2>{workoutItem.name}</h2>
              <img src={workoutItem.gifUrl} alt={workoutItem.name} />
              <p><strong>Target muscle:</strong> {workoutItem.target}</p>
              <p><strong>Equipment:</strong> {workoutItem.equipment}</p>
            </section>
          ))}
        </div>
      )}
    </div>
  ));

  return (
    <section className="bodyparts-container">
      {workoutButtons}
    </section>
  );
};

export default BodyPartsList;
