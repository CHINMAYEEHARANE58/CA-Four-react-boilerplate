import React from 'react'
import './QuestionBox.css'

export default function QuestionBox() {
  return (
    <div className='questionBox'>
      <div className='container'>

        <div className='leftContainer'>
          <img className='logo' src=""/>
        </div>
        <div className='rightContainer'>
          <button className='theme'>Dark</button>
          <h3>Question 1 out of 5</h3>
          <h1>What is react js?</h1>

          <div className='options'>
            <div className='option'>Server-side framework</div>
            <div className='option'>user interface framework</div>
            <div className='option'>both a and b</div>
            <div className='option'>none of the above</div>
          </div>

          <div className='buttonsContainer'>
            <button className='highlight'>Highlight</button>
            <button className='removeHighlight'>Remove Highlight</button>
          </div>

        </div>

      </div>
    </div>
  )
}
