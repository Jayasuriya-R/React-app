import { resObj } from "../Utilities/mockdata";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatusCheck from "../Utilities/useStatusCheck.js";
import useApiFetch from "../Utilities/useApiFetch.js";
import  UserContext from "../Utilities/UserContext.js"

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [values, setValues] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);
  

  const LabeledRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValues(resObj);
      setFilteredValues(resObj); // Update state after 2 seconds
    }, 1000);
  }, []);

  const status = useStatusCheck();

  const {setUserName,loggedIn} = useContext(UserContext);

  if (status === false)
    return <h1>Oops something went wrong it seems your offline...</h1>;

  return values.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-4">
        <div className="search flex items-center ml-[65px]">
          <input
            type="search"
            className="border-1 p-1 rounded-xs"
            placeholder="Find your food"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl font-medium"
            onClick={() => {
              const searchData = values.filter((res) =>
                res.card.card.info.name.toLowerCase().includes(searchTxt)
              );
              setFilteredValues(searchData);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-2 p-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-xl font-medium"
            onClick={() => {
              const filteredRestaurant = values.filter(
                (x) => x?.card?.card?.info?.avgRating > 4.5
              );
              setFilteredValues(filteredRestaurant);
            }}
          >
            Top-Rated Restaurants
          </button>
        </div>

        <div className="mt-7 ">
          <label className="font-medium">UserName : </label>
          <input className="border-1 rounded-xs p-1" placeholder="Username" type="search"
           onChange={(e) => setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-wrap ml-[50px]">
        {filteredValues.map((restro, index) => (
          <Link key={index} to={"/restaurant/" + index}>
            {restro?.card?.card?.info?.promoted ? (
              <LabeledRestaurantCard resData={restro} />
            ) : (
              <RestaurantCard resData={restro} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
