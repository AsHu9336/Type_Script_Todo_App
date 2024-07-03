import { createContext } from "react";

export interface todo  {
    id : number;
    task : string;
    completed : boolean;
    date : Date
}

export interface todocontext{}

 export const TodoContext = createContext(null)

