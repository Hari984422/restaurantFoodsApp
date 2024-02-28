import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section1">
                <b> &nbsp;&nbsp;&nbsp;&nbsp; <img src="http://nandhanarestaurants.com/wp-content/uploads/2023/03/flame.jpg" alt="" /> <br /> Dine In</b>
                <b> &nbsp;&nbsp;&nbsp;&nbsp; <img src="http://nandhanarestaurants.com/wp-content/uploads/2023/03/flame.jpg" alt="" /> <br /> Delivery</b>
                <b> &nbsp;&nbsp;&nbsp;&nbsp; <img src="http://nandhanarestaurants.com/wp-content/uploads/2023/03/flame.jpg" alt="" /> <br /> TakeOver</b>
          
            </div>
            <div className="footer-section2">
                <div className="footer-section2-logo">
                    <img src="http://nandhanarestaurants.com/wp-content/uploads/2023/03/logo-red.jpg" alt="" />
                </div>
                <div className="visit_us">
                    <h1>Visit <span>us!</span></h1>
                    <div className="visit_us-sub1">
                        <Link to="/">HOME</Link>
                        <Link to="/our-story">OUR STORY</Link>
                        <Link to="/our-menu">OUR MENU</Link>
                        <Link to="/about-us">ABOUT US</Link>
                        <Link to="/store-locator">STORE LOCATOR</Link>
                        <Link to="/contact-us">CONTACT US</Link>
                        <Link to="/order-now">ORDER NOW</Link>
                    </div>
                </div>
                <div className="contact-us">
                    <h1>contact <span>us!</span></h1>
                    <div className="contact-us-sub1">
                    <b>Address:</b>
                        <p>#7, 4th B block, Near BDA Complex, <br /> Koramangala, Bangalore – 560034</p>
                    </div>
                    <div className="contact-us-sub2">
                        <b>Phone:</b>
                        <p>9980965326</p>
                    </div>
                    <div className="contact-us-sub3">
                        <b>Email:</b>
                        <p>hari9844225181@gmail.com</p>
                    </div>
                </div>
            </div>
            <span id="footer-message">Copyright © 2023 NandanaRestaurents. All Rights Reserved</span>
        </div>
    );
}
export default Footer;
