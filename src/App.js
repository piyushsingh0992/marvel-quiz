import React, { useState } from "react";
import questionList from "./questionList.js";
import Question from "./Question";

import Score from "./Score.js";
import "./App.css";

export default function App() {
  let [questionNumber, questionNumberSetter] = useState(0);
  let [userAnswer, userAnswerSetter] = useState("");
  let [score, scoreSetter] = useState(0);

  function clickHandler() {
    if ( questionNumber>0&&
      questionList[questionNumber].ans.toLowerCase() ===
      userAnswer.toLowerCase()
    ) {
      scoreSetter(score + 1);
    }
    questionNumberSetter(questionNumber + 1);
    userAnswerSetter("");
  }

  function takingInput(event) {
    userAnswerSetter(event.target.value);
    console.log(userAnswer);
  }

  return (
    <div className="app">
      {questionList.length > questionNumber ? (
        <img src={questionList[questionNumber].img} />
      ) : (
        <img src="./images/captain.jpg" />
      )}

      {questionList.length > questionNumber ? (
        <Question
          questionObject={questionList[questionNumber]}
          clickHandler={clickHandler}
          takingInput={takingInput}
          userAnswer={userAnswer}
        />
      ) : (
        <Score
          score={score}
          questionNumberSetter={questionNumberSetter}
          scoreSetter={scoreSetter}
        />
      )}
    </div>
  );
}
