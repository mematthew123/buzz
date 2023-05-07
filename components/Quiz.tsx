// components/Quiz.tsx
import React, { useState } from "react";

const questions = [
  {
    question: "Today's agenda includes...",
    options: [
      "Floating the Clark Fork",
      "Staying in and ordering delivery",
      "Catching a movie at the Roxy Theater",
      "Sleeping through the farmers market again",
      "bruh...",
    ],
  },
  {
    question: " What is your favorite way to consume cannabis?",
    options: [
      "Smoking",
      "Vaping",
      "Edibles",
      "Topicals",
      "Tinctures",
      "Dabbing",
      "Complete and total immersion",
    ],
  },

  {
    question: "How experienced are you with cannabis?",
    options: [
      "I'm a total newbie",
      "I've tried it a few times",
      "I'm a regular user",
      "I'm a seasoned veteran",
      "bruh...",
    ],
  },
];

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Array<string>>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process the answers and determine the best product
  };

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
<div className="bg-white text-gray-700 p-8 rounded-lg w-[sm:420px] lg:w-[580px]  mx-auto shadow-lg">
      <h1 className="text-2xl mb-6">Quiz: Find the Best Product for You</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
          {currentQuestion.options.map((option) => (
            <div key={option} className="mb-3">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={answers[currentQuestionIndex] === option}
                  onChange={(e) => handleOptionChange(e, currentQuestionIndex)}
                  className="mr-2"
                />
                <span>{option}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              type="button"
              onClick={goToNextQuestion}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Quiz;