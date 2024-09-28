import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Results from './Results';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10');
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerSelection = (selectedAnswer) => {
    setUserAnswers({ ...userAnswers, [currentQuestion]: selectedAnswer });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correct_answer) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {quizCompleted ? (
        <Results score={calculateScore()} totalQuestions={questions.length} />
      ) : (
        questions.length > 0 && (
          <Question
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            userAnswer={userAnswers[currentQuestion]}
            handleAnswerSelection={handleAnswerSelection}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
          />
        )
      )}
    </div>
  );
};

export default QuizApp;

