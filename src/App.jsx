import './App.css'
import TodoContainer from './components/TodoList/TodoContainer'
import WithTodoList from './hoc/withTodoList'
// import TodoListContainer from './components/TodoList/TodoListContainer';
function App() {

const Todo = WithTodoList(TodoContainer)

  return (
    <>
      <h1 className='text-danger'>Hello World</h1>
      <Todo/>
    </>
  )
}

export default App
