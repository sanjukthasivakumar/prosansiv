import {useState} from "react";
export default function Counter(){
    //var count=0;

    const[count,setCount]=useState(0);

    const increment = () => {
            //count++;
            setCount(count+1);
    }
    const decrement = () =>{
        //count--;
        if(count>0){
        setCount(count-1);
        }
    }
    return <div>
        <h1 className = "text-success">Counter Application</h1>
        <hr/>
        <h2 button className="btn btn-danger">{count}</h2>
        <br/>
        <button className = "btn btn-primary"onClick={increment}>Increment</button>
        <button className = "btn btn-success"onClick={decrement}>decrement</button>
    </div>
}


