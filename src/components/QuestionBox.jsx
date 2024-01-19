import React, { useState } from 'react'
import './QuestionBox.css'
import questions from '../questions'

export default function QuestionBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const nextQuestion = () => {
    if(currentQuestion < questions.length - 1){
      setCurrentQuestion(currentQuestion+1)
    }
  }

  const [highlight, setHighlight] = useState("black");

  return (
    <div className='questionBox'>
      <div className='container'>

        <div className='leftContainer'></div>
        <div className='rightContainer'>
          <button className='theme'>
            Dark
            <img src="../assets/moon.png"/>
          </button>
          <h3>Question <span className='currQuestion'>{currentQuestion+1}</span> out of <span className='NumOfQuestions'>{questions.length}</span></h3>
          <h1 style={{color: highlight}} >{questions[currentQuestion].text}</h1>

          <div className='options'>
            {questions[currentQuestion].options.map((option, index) => {
              return(
                <button className='option' key={index} onClick={nextQuestion}>
                  {option.text}
                </button>
              )
            })}
          </div>

          <div className='buttonsContainer'>
            <button className='highlight' onClick={() => setHighlight("rgba(111, 83, 221, 1)")}>Highlight</button>
            <button className='removeHighlight'onClick={() => setHighlight("black")}>Remove Highlight</button>
          </div>

        </div>

      </div>
    </div>
  )
}
