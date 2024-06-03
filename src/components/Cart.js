import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return <div>
        <h1 className="font-medium text-4xl font-abc text-red-600 p-3 underline"> Cart Page </h1>
        
    </div>
}

export default Cart;