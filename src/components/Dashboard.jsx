import Carousel from 'react-bootstrap/Carousel';
const DashBoard = () => {
    return ( 
        <div className="dashboard">
            <div className="dashboard-section1">
                <div className="dashboard-section1-sub1">
                    <h1>TASTE THE TRADITION</h1>
                    <hr />
                    <p>DINE IN | TAKE AWAY | HOME DELIVERY | BANQUETS</p>
                    <br />
                    <button>ORDER NOW</button>
                </div>
                <div className="dashboard-section1-sub2">
                <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
                </div>
            </div>
        </div>
     );
}
 
export default DashBoard;