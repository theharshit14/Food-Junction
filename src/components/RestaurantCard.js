import { img_cdn_url } from "../configFile";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return (
      <div className="w-52 h-96 font-abc m-2 p-2 shadow-md rounded-lg hover:shadow-red-300">
        <img
          src={ img_cdn_url
             +
            cloudinaryImageId
          } className="rounded-lg h-40 w-52"
        />
        <h3 className="font-semibold text-red-600 text-xl">{name}</h3>
        <h4 className="text-red-600 font-normal">{cuisines.join(", ")}</h4>
        <h5 className="text-red-600 font-normal">{avgRating} Stars</h5>
      </div>
    );
  };
  export default RestaurantCard;