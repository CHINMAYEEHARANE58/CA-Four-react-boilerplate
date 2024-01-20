// import React from 'react'
import React, { useState } from 'react'
import "../components/Result.css"
import questions from '../questions';

function Result() {


  var [isDarkMode, setIsDarkMode] = useState(false);

  var toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeButtonText = isDarkMode ? 'Light' : 'Dark';
  const themeButtonIcon = isDarkMode ? 'https://github.com/CHINMAYEEHARANE58/CA-Four-react-boilerplate/blob/main/src/assets/screen.png?raw=true' : "https://github.com/CHINMAYEEHARANE58/CA-Four-react-boilerplate/blob/main/src/assets/moon.png?raw=true"

  return (

    <div className={`result ${isDarkMode ? 'dark' : 'light'}`}>
      <div className={`resultContainer ${isDarkMode ? 'darkContainer' : 'lightContainer'}`} >

        <div className='resultLeftContainer'></div>
        <div className='resultRightContainer'>
          <button className='resultTheme' onClick={toggleTheme}>
            {themeButtonText}
            <img className='resultThemeIcon' src={themeButtonIcon} alt='icon'/>
          </button>
          <h1 className='finalResult'>Final Result</h1>
          <h3 className='score'>1 out of 5 correct</h3>

          <button className='restart'>Restart Game</button>
        </div>
      </div>
    </div> 
      
  )
}

export default Result;