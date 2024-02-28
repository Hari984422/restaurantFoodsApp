import axios from 'axios';
import { useEffect, useState } from 'react';
const Food = () => {
   let [hotel,sethotel] = useState([])
   let [dish,setdish] = useState([])
  useEffect(()=>{
   axios.get('http://localhost:1000/Hotel')
   .then((res)=>{
      console.log(res.data);
      sethotel(res.data)
     

   })
   .catch((err)=>{
      console.log(err);
   })
  },[])
    return ( 
        <div className="food">
         {hotel.map((x)=>{
            return(
               <div className="disp">
                  <h1>{x.restaurant}</h1>
                  <hr />
                  <br />
                  <br />
                  {x.foodItems.map((y)=>{
                     return(
                        <div className="dish">
                           <p>{y.foodName}</p>
                           <b>{y.foodType}</b>
                        </div>
                     )
                  })}
               </div>
            )
         })}
        </div>
     );
}
 
export default Food;