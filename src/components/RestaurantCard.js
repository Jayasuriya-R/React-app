 import {CDN_URL } from "../Utilities/constants";
 import Body from "./Body";
 import resObj from "../Utilities/mockdata";
 import {CDN_URL} from "../Utilities/constants";


 const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId ,sla} = props.resData.card.card.info;
    return (
      <div className="m-2 p-4 w-[280px] h-[350px] hover:bg-blue-50 hover:rounded-[10px] ">
        <img className=" h-[170px] w-[260px] rounded-[10px] mb-2" alt="briyani" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines[0]}</h4>
        <h4>⭐ {avgRating} - Rating</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

   export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
      return (
      
        <div>
          <label className="absolute bg-red-300 text-black m-2 px-2 pb-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
        </div>
      
      )
    }
  }
export default RestaurantCard;