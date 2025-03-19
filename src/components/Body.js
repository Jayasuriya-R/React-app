import {resObj} from "../Utilities/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {

  const [values, setValues] = useState(resObj)

    return (
        <div className="body">
          <div className="search-bar">
           <button onClick={()=>{
            const filteredRestaurant = values.filter(
              (x) => x.card.avgRating>4.5
            )
            setValues(filteredRestaurant)
           }}>Top-Rated Restaurants</button>
          </div>
          <div className="res-container">
            {
                 values.map(restro => <RestaurantCard key={restro.card.id} resData = {restro}/>)
            }
        
          </div>
        </div>
    )
}
export default Body;