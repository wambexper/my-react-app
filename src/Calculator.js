import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    if (!number1 || !number2) {
      setErrorMessage('Error : Please enter both numbers.');
      setResult("");
      return false;
    }

    const regex = /^[-]?[0-9]+(\.[0-9]+)?$/;
    if (!regex.test(number1) || !regex.test(number2)) {
      setErrorMessage('Error : Please enter valid numbers.');
      setResult("");
      return false;
    }

    return true;
  };

  const handleAddition = () => {
    if (validateInputs()) {
      const sum = parseFloat(number1) + parseFloat(number2);
      setResult(`Result: ${sum}`);
      setErrorMessage('');
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      const difference = parseFloat(number1) - parseFloat(number2);
      setResult(`Result: ${difference}`);
      setErrorMessage('');
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      const product = parseFloat(number1) * parseFloat(number2);
      setResult(`Result: ${product}`);
      setErrorMessage('');
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(number2) === 0) {
        setErrorMessage('Cannot divide by zero.');
        return;
      }

      const quotient = parseFloat(number1) / parseFloat(number2);
      setResult(`Result: ${quotient}`);
      setErrorMessage('');
    }
  };

  return (
    <div className='container'>
      <h1 className='heading'>React Calculator</h1>
      <div>
        <input
          type="text"
          placeholder='Num 1'
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <br/>
        <input
          type="text"
          placeholder='Num 2'
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddition}> + </button>
        <button onClick={handleSubtraction}> - </button>
        <button onClick={handleMultiplication}> * </button>
        <button onClick={handleDivision}> / </button>
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {result && <div style={{ color: 'green' }}>{result}</div>}
      {result && <div style={{ color: 'green' }}>Sucess : Your result is shown above</div>}
    </div>
  );
};

export default Calculator;