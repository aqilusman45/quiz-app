import React from "react";

export const ProgressBar = ({ questionNumber, totalQuestions }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-indicator"
        style={{
          width: `${(questionNumber / totalQuestions) * 100}%`,
        }}
      ></div>
    </div>
  );
};
