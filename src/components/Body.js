import { useState, useEffect } from "react";
import { restaurantList, warning } from "../configFile";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { offline } from "../assets/Images/offline.jpg";
import { filterData } from "../utils/Helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9628186&lng=76.0406414&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
  
      setAllRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      console.log(allRestaurants, filteredRestaurants)
    } catch (error) {
      console.log('API Error', error);
    }
  }

  const online = useOnline();
  if (!online) {
    return (
      <div>
        <img src={offline} alt="internet disconnected" />
        <h1>
          Oops!
          <br /> Please check your internet connection..
        </h1>
      </div>
    );
  }

  return allRestaurants && allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex min-h-50 items-center justify-center bg-gradient-to-tr to-red-800 from-red-500 p-10">
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 leading-tight text-6xl text-white font-abc">
            Let's celebrate every moment!!!
          </h1>
        </div>
      </div>
      <div className="p-5 flex justify-center">
        <input
          type="text"
          className="p-3 m-2 bg-red-100 rounded-3xl focus:outline-red-600 h-11 w-2/3 font-abc"
          placeholder=""
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-3 m-2 bg-red-500 hover:bg-red-600 rounded-3xl h-11 text-white font-medium font-abc"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Body;
