import React from 'react'

export default function Result() {
  return (
    <div className='result'>
      {/* result container */}
      <div className='container'>

        <div className='leftContainer'>
          <img className='logo' src=""/>
        </div>

        <div className='rightContainer'>
          <button className='theme'>Dark</button>
          <h1>Final Result</h1>
          <h3>1 out of 5 correct - (20%)</h3>

          <button className='restart'>Restart Game</button>
        </div>

      </div>
    </div> 
      
  )
}
