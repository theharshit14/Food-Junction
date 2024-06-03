import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-24 p-3"
        alt="logo"
        src="https://www.amanoramall.com/assets/images/brand/food-junction.png"
      />
    </a>
  );
};

const Header = () => {

  const cartItems = useSelector ((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between font-abc shadow-md font-medium md:w-auto sm:w-auto">
      <Title />
      <div className="nav-items">
        <ul className="flex py-9">
          <li className="px-4 text-red-700 transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-red-700 transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-red-700 transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-red-700 transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-300">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4 text-red-700 transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-300">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="p-2 my-6 m-3 bg-red-600 border rounded-md text-white transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-300">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
