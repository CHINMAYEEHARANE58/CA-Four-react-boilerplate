import React, { useEffect, useState } from 'react';
import './QuestionBox.css';
import questions from '../questions';
import Result from './Result';

export default function QuestionBox() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlight, setHighlight] = useState('black');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0); // Added correctAnswers state

  var nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    nextQuestion();
  };

  useEffect(() => {
    setHighlight(isDarkMode ? 'white' : 'black');
  }, [isDarkMode]);

  var toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeButtonText = isDarkMode ? 'Light' : 'Dark';
  const themeButtonIcon = isDarkMode
    ? 'https://github.com/CHINMAYEEHARANE58/CA-Four-react-boilerplate/blob/main/src/assets/screen.png?raw=true'
    : 'https://github.com/CHINMAYEEHARANE58/CA-Four-react-boilerplate/blob/main/src/assets/moon.png?raw=true';

  return (
    <div className={`questionBox ${isDarkMode ? 'dark' : 'light'}`}>
      <div className={`container ${isDarkMode ? 'darkContainer' : 'lightContainer'}`}>
        <div className='leftContainer'></div>
        <div className='rightContainer'>
          <button className='theme' onClick={toggleTheme}>
            {themeButtonText}
            <img className='drakThemeIcon' src={themeButtonIcon} alt='icon' />
          </button>
          <h3>
            Question <span className='currQuestion'>{currentQuestion + 1}</span> out of{' '}
            <span className='NumOfQuestions'>{questions.length}</span>
          </h3>
          <h1 style={{ color: highlight }} className='question'>
            {questions[currentQuestion].text}
          </h1>
          <div className='options'>
            {questions[currentQuestion].options.map((option, index) => {
              return (
                <button className='option' key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
                  {option.text}
                </button>
              );
            })}
          </div>
          <div className='buttonsContainer'>
            <button className='highlight' onClick={() => setHighlight('#f03130')}>
              Highlight
            </button>
            <button
              className='removeHighlight'
              onClick={() => setHighlight(!isDarkMode ? 'black' : 'white')}
            >
              Remove Highlight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}