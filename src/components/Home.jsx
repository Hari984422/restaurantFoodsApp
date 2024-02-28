import Navbar from "./Navbar";
import Footer from "./Footer";
import DashBoard from "./Dashboard";
import { Route,Routes } from "react-router-dom";
import Food from "./Food";
const HomePage = () => {
    return ( 
        <div className="homepage">
            <Navbar/>
            <Routes>
                <Route path='/' element={<DashBoard/>}/>
                <Route path='/food' element={<Food/>}/>
            </Routes> 
            <Footer/>
        </div>
     );
}
 
export default HomePage;