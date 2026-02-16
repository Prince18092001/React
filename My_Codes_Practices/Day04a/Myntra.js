import React from "react";
import ReactDOM from "react-dom/client"

//Headrer
//Body
//Footer

function Card(props){
    return (
          <div className="card" style={{style:"2px solid black", padding:"2px"}}>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741944338_4925257.jpg?w=300&dpr=2" height={"300px"} width={"250px"}/>
            <div style={{textAlign:"center"}}>
                <h2>{props.clothes}</h2>
                <h1>{props.discount}</h1>
                <h2>Shop Now</h2>
            </div>
          </div>
    )
}

function Header(){
      return (
        <div className="heading">
             <img className="images" src="https://i.pinimg.com/736x/10/8f/fd/108ffd534d2076aa59babdb3b925438d.jpg" height= "80px" width="80px"/>
             <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home & Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
             </div>
             <input className="searchbar" placeholder="Search for products brands and more"></input>
             <div className="profile">
                <button className="pro">Profiles</button>
                <button className="pro">Whishlist</button>
                <button className="pro">Bag</button>
             </div>
        </div>
      )

}

function Footer(){
    return (
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/CH3OJp88_77193d7b8a4c4a2289a48f5bbda182de.jpg" width = "1500px"/>
    )
}

const arr = [{cloth:"T-shirt", discount:"30-40% off"},{cloth:"jeans", discount:"40-50% off"},{cloth:"Shirt", discount:"50-60% off"},{cloth:"hoofies", discount:"60-70% off"},{cloth:"jacket", discount:"20-50% off"},{cloth:"watch", discount:"50-60% off"},{cloth:"Shoes", discount:"80-90% off"},{cloth:"lamp", discount:"70-80% off"},{cloth:"Bags", discount:"60-80% off"},{cloth:"Sleepers", discount:"70-90% off"}, {cloth:"lower", discount:"50-60% off"},{cloth:"Towl", discount:"60-70% off"}]

function App(){
    return (
        
        //Headrer
        //Body
        // <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
        //     <Card clothes="T-shirt" discount="30-40% off"/>
        //     <Card clothes="jeans" discount="40-50% off"/>
        //     <Card clothes="Shirt" discount="50-60% off"/>
        //     <Card clothes="hoofies" discount="60-70% off"/>
        //     <Card clothes="jacket" discount="20-50% off"/>
        //     <Card clothes="watch" discount="50-60% off"/>
        //     <Card clothes="Shoes" discount="80-90% off"/>
        //     <Card clothes="lamp" discount="70-80% off"/>
        //     <Card clothes="Bags" discount="60-80% off"/>
        //     <Card clothes="Sleepers" discount="70-90% off"/>
        // </div>
        //Footer

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
        // it return array at last [<card/>,<card/>,<card/>,<card/>,<card/>]
     
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);





//first way

// function Card(){
//     return (
//           <div style={{style:"2px solid black", padding:"2px"}}>
//             <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741944338_4925257.jpg?w=300&dpr=2" height={"300px"} width={"250px"}/>
//             <div style={{textAlign:"center"}}>
//                 <h2>T-Shirts</h2>
//                 <h1>40-80% off</h1>
//                 <h2>Shop Now</h2>
//             </div>
//           </div>
//     )
// }

// function App(){
//     return (
//         //Headrer
//         //Body
//         <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//         </div>
//         //Footer
//     )
// }