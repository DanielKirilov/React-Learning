import { useState, useEffect, use } from 'react'

import './App.css'

function App() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
  const [count, setCount] = useState(0)


  function onDelete() {
    setNumbers(oldState => oldState.slice(0, oldState.length - 1))
  }
  function onAdd() {
    setCount(setCount => setCount + 1);
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

  if (!numbers.length) {
    return null
  }

  return (
    <>
      <div>
        <h2>Count : {count}</h2>
        <button onClick={onAdd}>+</button>
        <ul>
          {numbers.map((number, index) => <li key={index}>{number}</li>)}
        </ul>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  )
}

export default App
