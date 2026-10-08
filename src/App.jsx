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

  const [disp, setDisp] = useState(0)
  const [operand1, setOperand1] = useState(null)
  const [operand2, setOperand2] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false)
  const [justCalculated, setJustCalculated] = useState(false)


  const buttonClickHandler = (e) => {
    e.preventDefault()

    const value = e.currentTarget.innerHTML

   
    if (!isNaN(value)) {

     
      if (justCalculated) {
        setDisp(value)
        setJustCalculated(false)
        return
      }

   
      if (waitingForSecondNumber) {
        setDisp(value)
        setWaitingForSecondNumber(false)
        return
      }

   
      if (disp === 0) {
        setDisp(value)
      } else {
        setDisp(String(disp) + value)
      }

      return
    }

  
    if (
      value === '+' ||
      value === '−' ||
      value === '*' ||
      value === '÷'
    ) {

      
      if (justCalculated) {
        setOperand1(Number(disp))
        setOperation(value)
        setOperand2(null)
        setWaitingForSecondNumber(true)
        setJustCalculated(false)
        return
      }

      
      setOperand1(Number(disp))

      
      setOperation(value)

     
      setOperand2(null)

     
      setWaitingForSecondNumber(true)

      return
    }

   
    if (value === '=') {

      if (operand1 !== null && operation !== null) {

        const secondNumber = Number(disp)

        setOperand2(secondNumber)

        let result

        if (operation === '+') {
          result = operand1 + secondNumber
        }

        else if (operation === '−') {
          result = operand1 - secondNumber
        }

        else if (operation === '*') {
          result = operand1 * secondNumber
        }

        else if (operation === '÷') {

          if (secondNumber === 0) {
            setDisp('Error')
            setOperand1(null)
            setOperand2(null)
            setOperation(null)
            setWaitingForSecondNumber(false)
            setJustCalculated(false)
            return
          }

          result = operand1 / secondNumber
        }

      
        setDisp(result)

    
        setOperand1(result)
        setOperand2(null)
        setOperation(null)

        setWaitingForSecondNumber(false)
        setJustCalculated(true)
      }

      return
    }
  }

  
  const clearButtonClickHandler = (e) => {
    e.preventDefault()

    setDisp(0)
    setOperand1(null)
    setOperand2(null)
    setOperation(null)
    setWaitingForSecondNumber(false)
    setJustCalculated(false)
  }

 
  const nameButtonClickHandler = (e) => {
    e.preventDefault()

    setDisp('Cheenee Mandap')
  }

  return (
    <div className="App">

      <div className="Header">
        Calculator of Cheenee Mandap - WMD3A
      </div>

      <div className="Calculator">

        <CalcDisplay dispValue={disp} />

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
            buttonLabel="*"
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
            onClick={clearButtonClickHandler}
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

        <button
          className="name-button"
          onClick={nameButtonClickHandler}
        >
          MANDAP
        </button>

      </div>

    </div>
  )
}

export default App