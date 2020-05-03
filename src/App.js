import React, { useState } from "react";
import questions from "./data/questions.json";
import { QuestionCard } from "./components/QuestionCard";
import { ProgressBar } from "./components/Progress";
function App() {
  const [currentIndex, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [status, setStatus] = useState(null);

  const handleAnswer = (answer) => {
    if (status !== null) {
      alert("You have already answered");
    } else if (answer === questions[currentIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
      setStatus("Correct Answer");
    } else {
      setStatus("Sorry!");
    }
  };

  const handleNext = () => {
    if (status === null) {
      alert("Please select an option.");
    } else if (questions[currentIndex + 1] !== undefined) {
      setIndex((prevIdx) => prevIdx + 1);
      setStatus(null);
    } else {
      setIsLast(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setIsLast(false);
    setIndex(0);
    setStatus(null);
  };

  if (isLast) {
    return (
      <>
        <h1>Thank you for completing quiz</h1>
        <button onClick={restartQuiz}>Restart</button>
      </>
    );
  }

  return (
    <div className="App">
      <ProgressBar
        totalQuestions={questions.length}
        questionNumber={currentIndex + 1}
      />
      <QuestionCard
        status={status}
        score={score}
        handleNext={handleNext}
        handleAnswer={handleAnswer}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        question={questions[currentIndex]}
      />
    </div>
  );
}

export default App;
