import React from "react";

export const Score = ({ score, totalQuestions }) => {
  console.log(score, totalQuestions);

  return (
    <div>
      <p>Score: {(score / totalQuestions) * 100} %</p>
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
