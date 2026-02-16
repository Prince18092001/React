import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Card from "./component/card";
import Footer from "./component/Footer";
import arr from "./utils/dummy";


function App(){
    return (
     <>
    <Header/>
    <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
        {
            arr.map((value,index) => (
            <Card key={index} clothes = {value.cloth} discount = {value.discount}/>
            ))
        }
    </div>
    <Footer/>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


