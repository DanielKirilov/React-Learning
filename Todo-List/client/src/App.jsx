import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoList from "./components/Todolist"

function App() {
  return (
    <>
      <Header />
      <main className="main">

        <TodoList />

      </main>

      <Footer />

    </>
  )
}

export default App
