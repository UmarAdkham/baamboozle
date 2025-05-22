import React from "react";
import { useGameStore } from "../zustand/gameStore";

function WinnerModal() {
  const isGameOver = useGameStore((state) => state.isGameOver());
  const getWinner = useGameStore((state) => state.getWinner);

  if (!isGameOver) return null;

  const winners = getWinner();
  console.log(winners);

  return (
    <div className="question-modal">
      <h1 className="winner-status">Winner!</h1>
      {winners.map((winner) => {
        return <h2>{winner.name}</h2>;
      })}
      {winners?.length > 1 && <div className="galaba"><h1>Qadrdonlar g'alaba qozondi!!</h1> <img className="gifcha" src="https://i.chzbgr.com/full/8812820480/h23A71EE0/funny-fail-gif-awkward-political-three-way-handshake" alt="" /></div> }
    </div>
  );
}

export default WinnerModal;
