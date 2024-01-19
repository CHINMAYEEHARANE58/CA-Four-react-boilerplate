import React from 'react'
import "../components/Result.css"

export default function Result() {
  return (
    <div className='result'>
      {/* result container */}
      <div className='resultContainer'>

        <div className='resultLeftContainer'></div>
        <div className='resultRightContainer'>
          <button className='resultTheme'>
            Dark
            <img className='resultThemeIcon' src="https://github.com/CHINMAYEEHARANE58/CA-Four-react-boilerplate/blob/main/src/assets/moon.png?raw=true"/>
          </button>
          <h1 className='finalResult'>Final Result</h1>
          <h3 className='score'>1 out of 5 correct - (20%)</h3>

          <button className='restart'>Restart Game</button>
        </div>

      </div>
    </div> 
      
  )
}
