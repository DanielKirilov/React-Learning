import './App.css'
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Hello React Router</h1>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>

      <footer>All rights reserved</footer>
    </>
  )
}

export default App
