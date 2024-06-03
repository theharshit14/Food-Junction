import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { img_cdn_url } from "../configFile.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setmenuItems] = useState([]);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.9628186&lng=76.0406414&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data.cards);
    setRestaurant(json.data.cards[2].card.card.info);
    setmenuItems(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return (
    <div className="font-abc m-3 text-red-600">
      <div>
        <h2 className="py-3 text-4xl font-bold">{restaurant.name}</h2>
        <h5 className="font-medium">Restaurant ID: {resId}</h5>
        <img
          className="h-96 w-1/3 border rounded-lg mt-5"
          src={img_cdn_url + restaurant.cloudinaryImageId}
        />
        <h3 className="font-medium mt-2">{restaurant?.cuisines?.join(", ")}</h3>
        <h3 className="font-medium mt-2">{restaurant.costForTwoMessage}</h3>
        <h3 className="font-medium mt-2">{restaurant.avgRating} Stars</h3>
        <div>
          <h1 className="text-center text-red-600 font-bold text-3xl underline">
            Menu-Details
          </h1>
          {menuItems &&
            menuItems.map((item) => {
              return (
                <p key={item?.card?.info?.id}>
                  {item?.card?.info?.name} -{" "}
                  <button className="p-1 text-white bg-red-500 border rounded-md" onClick={()=>addFoodItem(item)}>
                    Add
                  </button>
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
