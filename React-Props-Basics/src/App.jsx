import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import movies from './assets/movies'
import Content from './components/Content'
import Timer from './components/Timer'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <Header/>
      <Counter/>
      <Timer/>
      <Content headingText={"The best movies of all time"} movies={movies} />
      <Footer/>
    </>
  )
}

export default App
