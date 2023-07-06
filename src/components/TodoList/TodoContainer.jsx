import TodoForm from './TodoForm'
import TodoListContainer from './TodoListContainer'

const TodoContainer = (props) => {
  return (
    <div>
        <TodoListContainer {...props}/>
        <TodoForm {...props}/>
    </div>
  )
}

export default TodoContainer