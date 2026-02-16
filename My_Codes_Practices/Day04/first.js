import React from "react";
import ReactDOM from "react-dom/client"

//const element1 = <h1>Hello Coder Army</h1>

// function greet(name){
//     return <h2>Hello Kaiso Ho {name}</h2>
// }

function Greet(props){
    return <h2>Hello, how are you {props.name} {props.age}</h2>
}
const element2 = <Greet name = "Prince " age="24"/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element2);