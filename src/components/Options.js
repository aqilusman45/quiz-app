import React from "react";

export const QuestionOptions = ({ options, handleAnswer }) => {
  return (
    <div className="question-text">
      {options.map((option) => (
        <button onClick={() => handleAnswer(option)} key={option}>
          {decodeURIComponent(option)}
        </button>
      ))}
    </div>
  );
};
