import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [showResult, setShowResult] = useState(false);


  const restartGame = () => {
    setShowResult(false);
  };

  return (
    <div>
      {showResult ? (
        <Result restartGame={restartGame} />
      ) : (
        <QuestionBox setShowResult={setShowResult} />
      )}
    </div>
  );
}

export default App;