import Quiz from './components/Quiz.jsx';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center text-cyan p-8">
      <h1 className="text-4xl font-bold mb-8">Quiz</h1>
      <div>
        <Quiz />
      </div>
    </div>
  );
};

export default App;
