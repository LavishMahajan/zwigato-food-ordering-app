import LOGO_URL from "../assets/image-logo.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-slate-100 h-[130px] z-1 shadow-xl shadow-slate-300">
      <div className="flex w-32 h-32 justify-between">
        <img
          className="object-cover object-center w-24 h-24 m-4 rounded-[50%] shadow-xl hover:scale-110 transition ease-in-out duration-300 transform"
          src={LOGO_URL}
          alt="logo"
        />

        <Link to="/">
          <h2 className="px-4 py-12 text-slate-500 text-xl font-poppins font-bold hover:scale-110 transition ease-in-out duration-300 transform cursor-pointer">
            zwigato.com
          </h2>
        </Link>
      </div>
      <div className="items-center">
        <ul className="flex justify-between py-12 items-center ">
          <li className="px-4 p-2">{useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li className="font-bold px-4 p-2 font-poppins text-xl rounded-xl hover:bg-slate-300 hover:text-blue-900 hover: scale-95 transition-font-extrabold ease-in-out duration-300 transform">
            <Link to="/"> HOME</Link>
          </li>

          <li className="font-bold px-4 p-2 font-poppins text-xl  rounded-xl hover:bg-slate-300 hover:text-blue-900 hover: scale-95 transition ease-in-out duration-300 transform">
            <Link to="/cart">CART ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="font-bold uppercase px-4 p-2 ml-2  mr-6 bg-slate-400 text-xl rounded-xl hover:text-white hover:bg-slate-600 transition ease-in-out duration-300 transform "
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
