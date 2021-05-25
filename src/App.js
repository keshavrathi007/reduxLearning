import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { incNumber, decNumber } from "./action/index"

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Increment Decrement Counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={myState} ></input>
        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
      </div>
    </div>
  )
}

export default App