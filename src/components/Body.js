import {resObj} from "../Utilities/mockdata";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (
        <div className="body">
          <div className="search-bar">
           Search
          </div>
          <div className="res-container">
            {
                resObj.map(restro => <RestaurantCard key={restro.card.id} resData = {restro}/>)
            }

         {
           resObj
            .filter((restro) => restro.card.avgRating > 4.5 ) // Only high-rated restaurants
            .map((restro) => <RestaurantCard key={restro.card.id} resData={restro} />)
}
        
          </div>
        </div>
    )
}
export default Body;