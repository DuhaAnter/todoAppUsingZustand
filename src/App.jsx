import './App.css'
import TodoList from './components/todoIist'
import TodoInput from './components/todoInput'

function App() {
  return(
    <div className="app-container">
        <h2>Todo App with Zustand</h2>
        <TodoInput/>
        <TodoList/>
    </div>
  )
}

export default App
