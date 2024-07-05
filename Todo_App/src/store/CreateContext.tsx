import {  createContext,  useState , ReactNode } from "react";

export interface todo  {
    id : number;
    task : string;
    completed : boolean;
    date : Date
}

export interface TodoContextType{
    todos : todo[];
    handleTodoApp : (task : string) => void;    
    
}

 export const TodoContext = createContext<TodoContextType | null>(null)

 export interface TodoProviderProps {
    children: ReactNode;
  }

 export const TodoProvider = ({children}: TodoProviderProps )=> {

    const [todos , settodos] = useState<todo[]>([]);

    const handleTodoApp = (task : string) =>{
        const newTodo = {
            id : Math.random(),
            task : task,
            completed : false,
            date : new Date()
        }
        console.log(newTodo)
        settodos([...todos , newTodo]);

        //     console.log(prev)
        //     console.log(newTodes);

    }

    return
    <TodoContext.Provider value={{todos, handleTodoApp}}>
        {children}
    </TodoContext.Provider>

 }

