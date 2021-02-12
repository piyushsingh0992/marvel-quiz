import React from "react";

import "./Question.css";
function Question({ questionObject, clickHandler, takingInput, userAnswer }) {
  return (
    <div className="question_container">
      <h1 className="question">{questionObject.question}</h1>

      {questionObject.key === 1 ? null : (
        <input
          placeholder="answer here"
          onChange={takingInput}
          value={userAnswer}
        />
      )}

      {questionObject.key === 1 ? (
        <button className="btn" onClick={clickHandler}>
          <p>Start</p>
        </button>
      ) : (
        <button className="btn" onClick={clickHandler}>
          <p>submit</p>
        </button>
      )}
    </div>
  );
}

export default Question;
