import { Fragment } from "react"

/* eslint-disable react/prop-types */
const TodoListContainer = (props) => {
    if (props.todo.length < 1) {
        return (
            <div>
                <h2 className="text-center fs-1">No hay nada</h2>
            </div>
        )
    }

    return (
        <div className="w-100">
            <button onClick={props.changeTableColor}>Change Color </button>
            <table className={` my-2 table ${props.darkTable ? 'table-dark' : 'table-light'}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    <Fragment>
                        {
                            props.todo.map(({ id, title, description }, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{title}</td>
                                        <td>{description}</td>
                                        <td>
                                            <button onClick={() => props.removeToDoList(id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </Fragment>
                </tbody>
            </table>
        </div>
    )
}

export default TodoListContainer