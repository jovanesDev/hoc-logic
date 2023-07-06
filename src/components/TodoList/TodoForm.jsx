/* eslint-disable react/prop-types */

import { useState } from "react"

const TodoForm = (props) => {
  const {todo,addToDoList} = props
  const [task, setTask] = useState({
    id:todo.length + 1 ,
    title: '',
    description: '',
})


const handleChangeTask = (e) => {
    const {name,value} = e.target
    setTask({
              ...task,
                [name]: value
            })
}
  return (
    <div>
        <input onChange={handleChangeTask} value={task.title}   type="text" name="title" />
        <input onChange={handleChangeTask} value={task.description}  type="text" name="description" />
        <button onClick={()=>addToDoList(task)}>Agregar</button>
    </div>
  )
}

export default TodoForm