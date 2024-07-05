
import UseContextApi from "../store/UseContextApi"


export default function TodoList() {

    const { todos, handleTodoApp } = UseContextApi();

    return (

        <>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            
                        >
                            {todo.task}
                        </span>
                        <button >Remove</button>
                    </li>
                ))}
            </ul>

        </>
    )
}
