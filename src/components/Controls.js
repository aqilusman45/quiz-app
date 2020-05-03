import React from "react";

export const Controls = ({ handleNext }) => {
  return (
    <div className="question-button">
      <button onClick={handleNext}>next question</button>
    </div>
  );
};
