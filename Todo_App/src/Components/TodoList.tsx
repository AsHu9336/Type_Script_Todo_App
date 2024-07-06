
import UseContextApi from "../store/UseContextApi"

export default function TodoList() {

    const { todos , deleteTodo } = UseContextApi();

    return (

        <>

            <div className="container p-10 ">

                <table className="table ">
                    <thead>
                        <tr>

                            <th scope="col">Todo</th>
                            <th scope="col">Completed</th>
                            <th scope="col"><i className="bi bi-trash3"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map((todo) => (
                                <tr>

                                    <td>{todo.task}</td>
                                    <td><div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">

                                        </label>
                                    </div></td>
                                    <td> <i className="bi bi-trash-fill" onClick={() => deleteTodo(todo.id)}></i></td>
                                </tr>

                            ))
                        }



                    </tbody>
                </table>
            </div>
            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            
                        >
                            {todo.task}
                        </span>
                     <button >Remove</button>
         </li >
                ))
}
            </ul >  */}

        </>
    )
}
