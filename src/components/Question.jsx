import React from 'react';

const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  userAnswer,
  handleAnswerSelection,
  handleNextQuestion,
  handlePreviousQuestion
}) => {
    const decodeHtmlEntities = (text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        return doc.documentElement.textContent;
      };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <p
        className="text-gray-700 mb-6"
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></p>
      <ul className="space-y-4 mb-6">
        {[...question.incorrect_answers, question.correct_answer]
          .map((option, index) => (
            <li key={`answer_${index}`}>
              <label className="block p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
                <input
                  className="mr-2"
                  type="radio"
                  name={`question_${currentQuestion}`}
                  value={option}
                  checked={userAnswer === option}
                  onChange={() => handleAnswerSelection(option)}
                />
                {decodeHtmlEntities(option)}
              </label>
            </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          className={`px-4 py-2 rounded-lg bg-blue-500 text-white ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
        >
          {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Question;
