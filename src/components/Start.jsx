import React, { useState } from "react";
import { useGameStore } from "../zustand/gameStore";
import { useNavigate } from "react-router-dom";

function Start() {
  const [selectedOption, setSelectedOption] = useState();
	const { generateTeams } = useGameStore();
	const navigate = useNavigate()

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleStart = () => {
		generateTeams(selectedOption);
		navigate('/game');
	};

  return (
    <div>
      <h1>Number of teams</h1>
      <label htmlFor="two">2</label>
      <input
        type="radio"
        name="num-teams"
        value={2}
        id="two"
        onChange={handleChange}
      />

      <label htmlFor="three">3</label>
      <input
        type="radio"
        name="num-teams"
        value={3}
        id="three"
        onChange={handleChange}
      />

      <label htmlFor="four">4</label>
      <input
        type="radio"
        name="num-teams"
        value={4}
        id="four"
        onChange={handleChange}
      />
      <button onClick={handleStart}>Start game</button>
    </div>
  );
}

export default Start;
