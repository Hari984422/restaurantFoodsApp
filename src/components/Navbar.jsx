import {Link} from  'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="http://nandhanarestaurants.com/wp-content/uploads/2023/03/logo-red.jpg" alt="" />
            </div>
            <div className="navlinks">
                <Link to="/">HOME</Link>
                <Link to="/our-story">OUR STORY</Link>
                <Link to="/food">OUR MENU</Link>
                <Link to="/about-us">ABOUT US</Link>
                <Link to="/store-locator">STORE LOCATOR</Link>
                <Link to="/contact-us">CONTACT US</Link>
                <Link to="/order-now"><button>ORDER NOW</button></Link>
            </div>
        </div>
     );
}
 
export default Navbar;