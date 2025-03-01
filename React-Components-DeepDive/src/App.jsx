import { useState, useEffect } from 'react'
import styles from './App.module.css';

import './App.css'

function App() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  function onDelete() {
    setNumbers(oldState => oldState.slice(0, oldState.length - 1))
  }
  function onAdd() {
    setCount(setCount => setCount + 1);
  }

  function onMinus() {
    setCount(setCount => setCount - 1);
  }

  function onNull() {
    setCount(0);
  }

  useEffect(() => {
    console.log("count");
  }, [count]);

  useEffect(() => {
    console.log("Mount component");
  }, []);

  useEffect(() => {
    console.log("Update component");
  }, [numbers]);

  useEffect(() => {
    setTimeout(() => {
      setTime(time => time + 1);
    }, 1000);
  }, [time]);

  if (!numbers.length) {
    return null
  }

  return (
    <>
      <div>
        <h2>Count : {count}</h2>
        <button onClick={onMinus}>-</button>
        <button onClick={onNull}>Reset</button>
        <button onClick={onAdd}>+</button>
        <ul>
          {numbers.map((number, index) =>
            <li
              key={index}
              className={styles.listItem}
            >
              {number}
            </li>)}
        </ul>
      </div>
      <button onClick={onDelete}>Delete</button>
      <p>Timer : {time}</p>
    </>
  )
}

export default App
