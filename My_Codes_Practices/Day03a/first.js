import React from "react";
import ReactDOM from "react-dom/client"

// JSX: Javascript XML: HTML code direct js ke andar likh sakte ho
const newElement = <h1>Hello Coder Army</h1>

//     babel:                   React                      Render
// JSX => React.createElement() => react element(JSObject) => HTML Element


// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render JSX
root.render(newElement);




const obj = {
    age : 20,
    salary : 60000
}

// React ELement
const newElement1 = ( 
                    <>
                    <h1 id = "key" prince = "20"> kud ke attribute bana sakta ah</h1> 
                    <h1 className = "Red" style = {{color : "red", backgroundColor : "blue"}}>what;s your salary {obj.salary}</h1>
                    </>
);
const root2 = ReactDOM.createRoot(document.getElementById("first"));
root2.render(newElement1);


// React Component
// function Based Component

function greet(){
    return <h1>Aur bhai kaisa hai</h1>
};

const meet = ()=>{
    return <h2>Mera sab achaa hai</h2>
}


const newElement2 = greet();
const newElement3 = meet();

const newElement4 = <>{greet()} {meet()}</>

const Reactroot = ReactDOM.createRoot(document.getElementById('second'));

Reactroot.render(newElement4);