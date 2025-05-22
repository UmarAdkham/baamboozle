import React, { useState } from "react";
import { useGameStore } from "../zustand/gameStore";

function QuestionModal() {
  const {
    currentQuestion,
    setCurrentQuestion,
    markAnswered,
    changeTeam,
    currentTeam,
    teams,
    setPoint,
  } = useGameStore((state) => {
    return state;
  });
  
  
  const [showAnswer, setShowAnswer] = useState(false);
  
  if (!currentQuestion) {
    return null;
  } 

  const handleShowAnswer = (e) => {
    e.stopPropagation();
    setShowAnswer(true);
  };

  const handleOkay = () => {
    setPoint(currentQuestion.point);
    handleAnswer();
  };

  const handleOoops = () => {
    handleAnswer();
  };

  const handleAnswer = () => {
    changeTeam(teams.findIndex((t) => t.id === currentTeam.id));
    markAnswered(currentQuestion.id);
    handleClose();
  };

  const handleClose = (e) => {
    setShowAnswer(false);
    setCurrentQuestion(null);
  };

  return (
    <div className="outer-modal" onClick={handleClose}>
      <div className="question-modal">
        <div className="header-modal">
          <h2>{currentQuestion.point}</h2>
          <button className="close-button" onClick={handleClose}>
            ❌
          </button>
        </div>
        <h1>{currentQuestion.text}</h1>

        <br />
        {!showAnswer ? (
          <button onClick={handleShowAnswer}>Check🔍</button>
        ) : (
          <div className="answer-section">
            <h2>{currentQuestion.answer}</h2>
            <button onClick={handleOoops}>Ooops</button>
            <button onClick={handleOkay}>Okay</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionModal;
