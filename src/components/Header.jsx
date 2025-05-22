import React from "react";
import { useGameStore } from "../zustand/gameStore";

function Header() {
  const { teams, currentTeam } = useGameStore((state) => state);

  return (
    <div className="header">
      {teams.map((team) => {
        return (
          <div className="team-score" key={team.id}>
            <h1 className={currentTeam.id === team.id ? "active-team" : ""}>
              {team.name}
            </h1>
            <h2>{team.score}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Header;
