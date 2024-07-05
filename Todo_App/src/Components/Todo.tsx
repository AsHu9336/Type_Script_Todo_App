import { useState } from "react"

export default function Todo() {

    const addTodo = (task: string) =>{
        //console.log(task)

    }

    const [task, settask] = useState("");
    const handlechange  = (event :  React.ChangeEvent<HTMLInputElement>) => {
        settask(event.target.value);

    }
    // const handleTodo = () =>{

    // }
    const handlesubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addTodo(task);

        //console.log(task)
        settask("");

    }
    return (
        <>
            <div className="container ">
                <div className="d-flex flex-row m-4">
                    <input type="text" className="form-control me-2" placeholder="Enter Your Todo Task" value={task} onChange={handlechange} ></input>
                    <button type="button" className="btn btn-outline-warning" onClick={handlesubmit} >Todo </button>
                </div>
            </div>


        </>
    )
}


