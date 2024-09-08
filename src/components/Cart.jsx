import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-extrabold text-6xl text-[#000] shadow-slate-500 rounded-2xl shadow-lg bg-slate-300">Cart</h1>
      <div className="w-3/4 ml-40">
        <button
          className="px-6 shadow-slate-400 shadow-xl text-xl ml-12 my-6 rounded-xl font-bold py-4 bg-slate-700 text-white "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty. Please add items to the cart.</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
