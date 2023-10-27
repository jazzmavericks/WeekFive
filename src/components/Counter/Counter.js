import './Counter.css';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    }

    const incrementCount = () => {
        if (count < 15) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div className="counterSection">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default Counter;