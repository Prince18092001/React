import React, {useState} from "react";
import ReactDOM from "react-dom/client"


function Counter(){
    let [count, setcount] = useState(0);

    function increment(){
      count = count + 1;
      setcount(count);
      // console.log(count);
      // document.querySelector('h1').innerText = `Count is : ${count}`
    }

    function decrement(){
      //count = count - 1;
      setcount(count-1);
      // console.log(count);
      // document.querySelector('h1').innerText = `Count is : ${count}`
    }
    

    return (
        <div className="first">
            <h1>Count is : {count}</h1>
            <button onClick={increment}>Increment {count}</button>
            <button onClick={decrement}>Decrement {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)