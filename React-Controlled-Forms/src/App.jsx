import { useState } from 'react'
import './App.css'

function App() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  const usernameChangeHandler = (e) => {
    console.log(e.currentTarget.value);
    setUsername(e.currentTarget.value)
  }

  const passwordChangeHandler = (e) => {
    console.log(e.currentTarget.value);
    setPassword(e.currentTarget.value)
  }

  return (
    <>
      <h1>Controlled Form</h1>

      <form>
        <div>
          <label
            htmlFor="username">Username </label>
          <input
            onChange={usernameChangeHandler}
            type="text"
            name="username"
            id="username" />
        </div>
        <div>
          <label htmlFor="username">Password  </label>
          <input
            onChange={passwordChangeHandler}
            type="password"
            name="password"
            id="password" />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </>
  )

}

export default App
