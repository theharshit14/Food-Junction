import { img_cdn_url } from "../configFile"; 

const FoodItem = ({name, description, cloudinaryImageId, price}) => {

  return (
    <div className="font-abc text-red-600">
      <div>
        <h2 className="text-4xl font-bold">{name}</h2>
        <img
          className="h-96 w-1/3 border rounded-lg mt-5"
          src={img_cdn_url + cloudinaryImageId}
        />
        <h3 className="font-medium mt-2">{description}</h3>
        <h3 className="font-medium mt-2">{price/100} Rupees</h3>
      </div>
    </div>
  );
};

export default FoodItem;