import React from "react";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionText } from "./Question";
import { QuestionOptions } from "./Options";
import { Score } from "./Score";
import { Controls } from "./Controls";
import { Status } from "./Status";

export const QuestionCard = ({
  question,
  totalQuestions,
  questionNumber,
  handleAnswer,
  status,
  handleNext,
  score,
}) => {
  return (
    <div className="question-wrapper">
      <div className="question-container">
        <QuestionHeader
          totalQuestions={totalQuestions}
          questionNumber={questionNumber}
          category={question.category}
          difficulty={question.difficulty}
        />
        <QuestionText text={question.question} />
        <QuestionOptions
          handleAnswer={handleAnswer}
          options={[
            ...question["incorrect_answers"],
            question["correct_answer"],
          ]}
        />
        <Status text={status} />
        <Controls handleNext={handleNext} />
        <Score score={score} totalQuestions={totalQuestions} />
      </div>
    </div>
  );
};
