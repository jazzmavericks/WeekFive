import '../Calculator/Calculator.css'; // Gets CSS to style calculator

import React, { useState, useEffect } from 'react'; // Pulls through methods for states and keys
import {evaluate} from 'mathjs';

// Import images
import Casio from '../../images/Casio.png';
import Solar from '../../images/SolarBar.jpg';


// Component code begins
const Calculator = () => {
  const [input, setInput] = useState(''); // State to store the input
  const [result, setResult] = useState(''); // State to store the result

  const maxResultLength = 8;

// Function to make sure number doesn't get too big for display based on the maxResultLength above
const formatScientificNotation = (number) => {
    const exponent = number.toExponential();
    const parts = exponent.split('e');
    const base = parseFloat(parts[0]).toFixed(2); // Adjust the number of decimal places as needed
    const exp = parts[1];
    return `${base}e${exp}`;
  };
  

// Function to deal with clicking on buttons
const handleButtonClick = (value) => {
  if (value === '=') {
    try {
      const calculatedResult = evaluate(input);
      if (calculatedResult >= 1e8 || calculatedResult <= 1e-8) {
        setResult(formatScientificNotation(calculatedResult));
      } else {
        setResult(calculatedResult.toString().slice(0, maxResultLength));
      }
    } catch (error) {
      setResult('Error');
    }
  } else if (value === 'C') {
    setInput('');
    setResult('');
  } else if (value === '√') {
    try {
      const sqrtResult = Math.sqrt(parseFloat(input));
      if (sqrtResult >= 1e12 || sqrtResult <= 1e-12) {
        setResult(formatScientificNotation(sqrtResult));
      } else {
        setResult(sqrtResult.toString().slice(0, maxResultLength));
      }
    } catch (error) {
      setResult('Error');
    }
  } else {
    setInput(input + value);
  }
};

// Function to deal with keys being pressed
const handleKeyPress = (e) => {
    const key = e.key;
    if (/\d/.test(key) || key === '.' || key === 'C' || key === '=' || key === '+' || key === '-' || key === '*' || key === '/') {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleButtonClick('=');
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    }
};
  /* eslint-disable */
// Add event listener for keys being pressed
useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
}, [input]);
  /* eslint-enable */

// Array of buttons grouped into rows of three
const numberButtonRows = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.'],
];

const operatorButtonRows = [
    ['/', '*', '-', '+'],
    ['=', '√', 'C',],
];

// Data to return to the App
return (
    <div className="calculator">
        <div className="display"> 
            <input type="text" value={input} readOnly /> 
            <div className="result">{result}</div>
        </div>
        <div className="buttonSection">
            <div className="numberButtons">
            {numberButtonRows.map((row, rowIndex) => (
                <div key={rowIndex} className="number-button-row">
                    {row.map((button, buttonIndex) => (
                    <button key={buttonIndex} onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                    ))}
                </div>
            ))}
            </div>
            <div className="operatorButtons">
            {operatorButtonRows.map((row, rowIndex) => (
                <div key={rowIndex} className="operator-button-row">
                    {row.map((button, buttonIndex) => (
                    <button key={buttonIndex} onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                    ))}
                </div>

            ))}
                <div className="logoBox">
                    <div className="casioLogo">
                        <img src={Casio} alt="Casion Logo"></img>
                    </div>
                    <div className="solarPanel">
                        <img src={Solar} alt="Solar Panel"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Calculator;



