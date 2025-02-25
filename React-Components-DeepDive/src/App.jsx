import { useState } from 'react'

import './App.css'

function App() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

  function onDelete() {
    setNumbers(oldState => oldState.slice(1))
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
