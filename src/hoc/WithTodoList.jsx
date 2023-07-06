/* eslint-disable react/display-name */
import { useEffect, useState } from 'react'
const WithTodoList = (BaseComponent) => {

    const [todo, setTodo] = useState([])
    const [darkTable, setDarkTable] = useState(false);
    const changeTableColor = () => setDarkTable(!darkTable)

    const addToDoList = (task) => {
        console.log('llegue aca')
        setTodo([...todo, task])
    }
    const removeToDoList = (id) => {
        setTodo(todo.filter((item) => item.id !== id))
    }

    useEffect(() => {

    },[todo])

    return (props) => {
        return <BaseComponent
            todo={todo}
            darkTable={darkTable}
            changeTableColor={changeTableColor}
            addToDoList={addToDoList}
            removeToDoList={removeToDoList}
            {...props}
        />
    }
}

export default WithTodoList