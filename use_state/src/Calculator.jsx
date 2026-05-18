import React from 'react'
import { useState } from 'react';
import './Calculator.css';


const Calculator = () => {

    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(m => (m >= 10) ? alert("it can not be greater then ten") : count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const multiply = () => {
        setCount(count * count)
    }

    const divide = () => {
        if (count <= 1) {
            alert("not valid");
            setCount(1)
        } else {
            setCount(count / 3);
        }

    }





    return (
        <div>
            <div> count : {count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
        </div>
    )
}

export default Calculator
