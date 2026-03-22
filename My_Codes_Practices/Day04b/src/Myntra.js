import { useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Card from "./component/card";
import Footer from "./component/Footer";
import arr from "./utils/dummy";


function App(){
         let [A, setA] = useState(arr)

    function SortArray(){
        A.sort((a,b) => a.price-b.price);
        setA([...A]);
        //console.log(arr);
    }
    


    function priceabove499(){
        const B = A.filter((value) => value.price>499);
        setA(B);
    }
    


    return (
     <>
    <Header/>
    <button onClick={SortArray}>Sort by Price</button>
    <button onClick={priceabove499}>PriceAbove 499</button>
    <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
        {
            A.map((value,index) => (
            <Card key={index} clothes = {value.cloth} discount = {value.discount} price = {value.price}/>
            ))
        }
    </div>
    <Footer/>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


