import {resObj} from "../Utilities/mockdata";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (
        <div className="body">
          <div className="filter">
           <button className="filter-btn" onClick={()=>{
            resObj = resObj.filter((res) => res.card.avgRating>4);
            console.log(resObj)}}>Top rated restaurant</button>
          </div>
          <div className="res-container">
            {
                resObj.map(restro => <RestaurantCard key={restro.card.id} resData = {restro}/>)
            }

         {
           resObj
            .filter((restro) => restro.card.avgRating >= 4.4 ) // Only high-rated restaurants
            .map((restro) => <RestaurantCard key={restro.card.id} resData={restro} />)
}
        
          </div>
        </div>
    )
}
export default Body;