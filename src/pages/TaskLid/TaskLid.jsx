import { useEffect, useState } from "react";
import { text } from "stream/consumers";

export const TaskLid = () => {
     const [ time, setTime] = useState(10);

     const [ isText, setText] = useState('')

     const handleButtonChange = () =>{
        alert(isText)
     }
     useEffect(() => {
        if(0 == time) return;

        const intervalId = setInterval(() => {
            setTime((prev) => prev -1)
        },1000);

        return () => clearInterval(intervalId);
     },[time])
    return(
        <>
        <div>
            <h1>Осталось времени {time}</h1>

        </div>
        
        <div>
            <input 
            type="text"
            value={isText}
            onChange={(e) => setText(e.target.value)}/>

            <button onClick={handleButtonChange}>Clickeding</button>
        </div>
        </>
    )
}
export default TaskLid;