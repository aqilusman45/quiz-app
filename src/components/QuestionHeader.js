import React from "react";
import star from "../images/star.png";
import outline from "../images/star-outline.png";
import { genRatings } from "../utils/ratings";

export const QuestionHeader = ({
  totalQuestions,
  questionNumber,
  category,
  difficulty,
}) => {
  return (
    <div className="question-header">
      <div className="question-count">
        Question {questionNumber} of {totalQuestions}
      </div>
      <div className="question-cateogry">{decodeURIComponent(category)}</div>
      <div className="question-rating">
        {genRatings(difficulty, star, outline).map((rating, index) => {
          return (
            <img
              key={rating + index}
              height={10}
              width={10}
              src={rating}
              alt={difficulty}
            />
          );
        })}
      </div>
    </div>
  );
};
