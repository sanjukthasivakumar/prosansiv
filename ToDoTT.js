import { useState } from "react";

export default function ToDoTT(){
    const [toDo, setToDo] = useState(["Sleep", "Eat"]);
    const [formData, setFormData] = useState("");

    const handleChange = (event) => {
        setFormData(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setToDo([...toDo, formData]);
        setFormData("");
    };


    return (
        <div>
            <h2>To-Do List</h2>
            <form onSubmit = {handleSubmit}>
                <input 
                type = "text" 
                placeholder = "Enter Task" 
                name = "task" 
                value  = {formData}
                onChange = {handleChange}/>
            </form>
            <ul>
                {toDo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}