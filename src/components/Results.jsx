import { useState } from 'react';
import Carousel from './Carousel';

const Results = ({ score, totalQuestions }) => {
  const [carousel, setCarousel] = useState(0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-6">
        Your score is: <span className="font-bold">{score}</span> out of {totalQuestions}
      </p>
      <Carousel carousel={carousel} setCarousel={setCarousel} />
    </div>
  );
};

export default Results;
