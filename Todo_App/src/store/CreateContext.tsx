import { createContext, useState, ReactNode } from "react";

export interface todo {
    id: string;
    task: string;
    completed: boolean;
    date: Date
}

export interface TodoContextType {
    todos: todo[];
    handleTodoApp: (task: string) => void; // Call Signature
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;

}

export const TodoContext = createContext<TodoContextType | null>(null)

export interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {

    const [todos, settodos] = useState<todo[]>([]);

    const handleTodoApp = (task: string) => {
        const newTodo = {
            id: Math.random().toString(),
            task: task,
            completed: false,
            date: new Date()
        }
        console.log(newTodo)
        console.log(todos);
        settodos([...todos, newTodo]);
        return newTodo

        //     console.log(prev)
        //     console.log(newTodes);

    }

    const toggleTodo = (id: string) => {
        settodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ));


    }

    const deleteTodo = (id: string) => {
        settodos((todos.filter((todos) => todos.id === id)));

    }
    // const handleTodoApp = (task:string)  => {
    //     settodos((prev) =>{
    //       const newTodos:todo[] = [
    //         {
    //             id:Math.random().toString(),
    //             task:task,
    //             completed:false,
    //             date:new Date()
    //         },
    //         ...prev
    //       ] 
    //       console.log("my previous " + prev);          
    //       console.log(newTodos);       
    //        //localStorage.setItem("todos",JSON.stringify(newTodos))
    //       return newTodos
    //     })
    // }

    return <TodoContext.Provider value={{ todos, handleTodoApp, deleteTodo, toggleTodo }}>
        {children}
    </TodoContext.Provider>

}


