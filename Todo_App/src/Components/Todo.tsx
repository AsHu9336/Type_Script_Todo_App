import { FormEvent, useState } from "react"

import UseContextApi from "../store/UseContextApi"

export default function Todo() {

    const {handleTodoApp} = UseContextApi();

    const [task, settask] = useState("");
    const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        settask(event.target.value);

    }


    const handlesubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleTodoApp(task);
        settask("");

    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="container ">
                    <div className="d-flex flex-row m-4">
                        <input type="text" className="form-control me-2" placeholder="Enter Your Todo Task" value={task} onChange={handlechange} ></input>
                        <button type="submit" className="btn btn-outline-warning">Todo </button>
                    </div>
                </div>
            </form>


        </>
    )
}


