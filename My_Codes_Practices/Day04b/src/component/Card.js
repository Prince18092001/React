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

export default Card;