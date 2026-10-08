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

  const [displayValue, setDisplayValue] = useState(1)

  const buttonClickHandler = (e) => {
    e.preventDefault()

    const value = e.target.innerHTML

    alert(value)
  }

  return (
    <div className="App">

      <div className="Header">
        Calculator of Cheenee Mandap - WMD3A
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
