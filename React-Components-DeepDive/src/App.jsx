import { useState } from 'react'

import './App.css'

function App() {
  let numbers = [1, 2, 3, 4, 5];
  let doubledNumbers = numbers.map(e => <li key={e} >{e * 2}</li>)

  return (
    <>
      {doubledNumbers}
    </>
  )
}

export default App
