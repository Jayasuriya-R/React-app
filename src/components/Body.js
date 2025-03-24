import {resObj} from "../Utilities/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

  const [values, setValues] = useState([])
  const[filteredValues, setFilteredValues] = useState([])
  const [searchTxt , setSearchTxt] = useState("")
    
  
   useEffect(() => {
    const timer = setTimeout(() => {
      setValues(resObj);
      setFilteredValues(resObj);// Update state after 2 seconds
    }, 1000);
   },[])
 
  // .filter((x, index) => index>2)
  const fetchData = async () => {

      const response = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
      const data = await response.json();
      const filteredData = data?.data?.cards.filter((x, index) => index > 2);
      //console.log(filteredData)
      setValues(filteredData)
    }
   
    return values.length === 0? <Shimmer/> : (
        <div className="body">
          <div className="search-bar">
           <div className="search">
            <input type="search" className="search-box" placeholder="Find your food" value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}/>
            


            <button className="search-btn"
            onClick={()=>{
             const searchData = values.filter((res)=>  (res.card.card.info.name).toLowerCase().includes(searchTxt))
             setFilteredValues(searchData)
             

           
          }
              }>search</button>
           </div>

           <button className="filter-btn" onClick={()=>{
            const filteredRestaurant = values.filter(
              (x) =>  x?.card?.card?.info?.avgRating > 4.5
            )
            setFilteredValues(filteredRestaurant)
           }}>Top-Rated Restaurants</button>
          </div>
          <div className="res-container">
            {
                 filteredValues.map((restro,index)=> 
                  <Link key={restro?.card?.card?.info?.id} 
                  to ={"/restaurant/"+ index}>
                 <RestaurantCard  resData = {restro}/>
                 </Link>)
            }
        
          </div>
        </div>
    )
}
export default Body;