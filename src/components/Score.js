import React from "react";

export const Score = ({ score, totalQuestions, questionNumber }) => {
  console.log(score, totalQuestions);

  return (
    <div>
      <p>Score: {(score / totalQuestions) * 100}%</p>
      <p>
        {questionNumber === 1
          ? "Max Score: 100%"
          : `Max Score:
          ${Math.floor(
            ((totalQuestions - questionNumber) / totalQuestions) * 100
          )}
          %`}
      </p>
      <div className="score-bar">
        <div
          className="loading-indicator"
          style={{
            width: `${(score / totalQuestions) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
