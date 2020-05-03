import React from "react";

export const QuestionText = ({ text }) => {
  return (
    <div className="question-text">
      <h1>{decodeURIComponent(text)}</h1>
    </div>
  );
};
