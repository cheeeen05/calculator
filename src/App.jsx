import { useState } from 'react'
import './App.css'

function CalcDisplay({ dispValue }) {
  return (
    <div className="display">
      {dispValue}
    </div>
  )
}

function CalcButton({ buttonLabel, onClick, buttonClass }) {
  return (
    <button
      className={`button ${buttonClass || ''}`}
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  )
}

function App() {
  const [displayValue, setDisplayValue] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false)

  const buttonClickHandler = (e) => {
    e.preventDefault()

    const value = e.currentTarget.innerHTML

  
    if (value === 'C') {
      setDisplayValue('0')
      setFirstNumber(null)
      setOperator(null)
      setWaitingForSecondNumber(false)
      return
    }

  
    if (value === '=') {
      if (firstNumber !== null && operator !== null) {
        const secondNumber = parseFloat(displayValue)
        let result

        if (operator === '+') {
          result = firstNumber + secondNumber
        } else if (operator === '−') {
          result = firstNumber - secondNumber
        } else if (operator === '×') {
          result = firstNumber * secondNumber
        } else if (operator === '÷') {
          if (secondNumber === 0) {
            setDisplayValue('Error')
            setFirstNumber(null)
            setOperator(null)
            return
          }

          result = firstNumber / secondNumber
        }

        setDisplayValue(String(result))
        setFirstNumber(null)
        setOperator(null)
        setWaitingForSecondNumber(false)
      }

      return
    }

  
    if (['+', '−', '×', '÷'].includes(value)) {
      setFirstNumber(parseFloat(displayValue))
      setOperator(value)
      setWaitingForSecondNumber(true)
      return
    }

  
    if (!isNaN(value)) {
      if (displayValue === '0' || waitingForSecondNumber) {
        setDisplayValue(value)
        setWaitingForSecondNumber(false)
      } else {
        setDisplayValue(displayValue + value)
      }
    }
  }

  return (
    <div className="App">

      <div className="Header">
        Calculator of Cheenee Mandap -WMD3A
      </div>

      <div className="Calculator">

        <CalcDisplay dispValue={displayValue} />

        <div className="Keypad">

          <CalcButton
            buttonLabel={7}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={8}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={9}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel="÷"
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={4}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={5}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={6}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel="×"
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={1}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={2}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={3}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel="−"
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel="C"
            buttonClass="clear"
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel={0}
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel="="
            buttonClass="equals"
            onClick={buttonClickHandler}
          />

          <CalcButton
            buttonLabel="+"
            onClick={buttonClickHandler}
          />

        </div>

        <div className="name-button">
          MANDAP
        </div>

      </div>

    </div>
  )
}

export default App