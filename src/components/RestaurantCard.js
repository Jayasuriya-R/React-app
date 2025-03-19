 import CDN_URL  from "../Utilities/constants";
 import Body from "./Body";
 import resObj from "../Utilities/mockdata";
 import CDN_URL from "../Utilities/constants";


 const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = resData.card;
    return (
      <div className="res-card">
        <img className="res-logo" alt="briyani" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>⭐ {avgRating}</h4>
        <h4>40 mins</h4>
      </div>
    );
  };
export default RestaurantCard;