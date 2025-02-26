import { useState, useEffect, use } from 'react'

import './App.css'

function App() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

  function onDelete() {
    setNumbers(oldState => oldState.slice(0, oldState.length - 1))
  }

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
        <ul>
          {numbers.map((number, index) => <li key={index}>{number}</li>)}
        </ul>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  )
}

export default App
