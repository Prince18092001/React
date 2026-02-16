export default function Header(){
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