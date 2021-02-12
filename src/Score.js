import React from "react";

function Score({ score, questionNumberSetter, scoreSetter }) {
  function clickHandler() {
    questionNumberSetter(0);
    scoreSetter(0);
  }

  return (
    <div className="question_container">
      <h1 className="question">your Final score is {score}</h1>
      <button onClick={clickHandler} className="btn">
        Try Again
      </button>
    </div>
  );
}

export default Score;
