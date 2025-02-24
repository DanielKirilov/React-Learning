import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount((counter) => counter + 1);
    }

    function decrementCount() {
        setCount((counter) => counter - 1);
    }

    function resetCount() {
        setCount(0);
    }
    let message = null;

    // if (count == 5) {
    //     message = "penta kill"
    // }

    switch (count) {
        case 1:
            message = "First Blood";
            break;
        case 2:
            message = "Double kill";
            break;
        case 3:
            message = "Triple kil";
            break;
        case 4:
            message = "Quadra kill";
            break;
        default:
            message = "No kills"
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>{message}</p>
            <p>{count}</p>
            <p>{count == 0 && "Nice"} </p>
            <p>{count > 0 && "Cool"}</p>
            <p>{count < 0 && "Not Cool"}</p>
            <button disabled={count < -4} onClick={decrementCount}>-</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}