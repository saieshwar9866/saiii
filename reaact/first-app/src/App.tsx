import React, { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState('blue');

  const handleMouseOver = () => {
    setButtonColor('pink');
  };

  const handleMouseOut = () => {
    setButtonColor('cyan');
  };

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container">
      <div className="box"></div>
      <button
        style={{ backgroundColor: buttonColor }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleButtonClick}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default App;
