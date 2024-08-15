import React, { useState } from "react";
import "./Challenge.css"; // Ensure to import the CSS file

const Challenge = ({ workouts, bodyPartList }) => {
  const [target, setTarget] = useState("");
  const [randomChallenge, setRandomChallenge] = useState(null);

  // Filter workouts that use body weight
  const bodyWeightWorkouts = workouts.filter(item => item.equipment === "body weight");

  // Filter body weight workouts by the selected body part
  const filteredChallenges = bodyWeightWorkouts.filter(item => item.bodyPart === target);

  const handleDelete = () => {
    setRandomChallenge(null); // Reset the random challenge
  };

  const handleFilterByBodyWeight = (selectedBodyPart) => {
    setTarget(selectedBodyPart);

    // Get a random workout from the filtered challenge list
    if (filteredChallenges.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredChallenges.length);
      setRandomChallenge(filteredChallenges[randomIndex]);
    } else {
      setRandomChallenge(null);
    }
  };

  return (
    <div className="challenge-container">
      <h1 className="challenge-heading">Daily Home Workout Challenges for Bodyweights</h1>
      <div className="challenge-content">
        <div className="button-container">
          {bodyPartList.map((item, index) => (
            <div className="button-wrapper" key={index}>
              <button
                className="filter-button"
                onClick={() => handleFilterByBodyWeight(item)}
              >
                {item}
              </button>
              {target === item && randomChallenge && (
                <div className="challenge-info-container">
                  <section className="challenge-info">
                    <button
                      className="delete-button"
                      onClick={handleDelete}
                    >
                      &times;
                    </button>
                    <h2>{randomChallenge.name}</h2>
                    <img src={randomChallenge.gifUrl} alt={randomChallenge.name} className="challenge-image" />
                    <p><strong>Target muscle:</strong> {randomChallenge.target}</p>
                    <p><strong>Equipment:</strong> {randomChallenge.equipment}</p>
                  </section>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenge;
