/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { MENU_IMG_API } from "../utils/constants";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="my-12 ">
      <ul>
        <li>
          {items.map((item) => (
            <div
              className="w-full p-8 h-auto border-b-4 border-t-4 border-slate-500 flex flex-nowrap ml-auto mr-auto justify-between mt-8 bg-white rounded-3xl shadow-2xl"
              key={item.card.info.id}
            >
              <div className="font-poppins font-extrabold text-2xl m-2">
                {item.card.info.name}
              </div>
              <div className="font-poppins font-medium text-xl m-2 w-[500px] text-wrap">
                {item.card.info.description}
              </div>
              <div className="font-poppins font-medium text-xl m-2">
                ₹
                {item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <div className=" flex justify-between items-center  p-4  ">
                <div className="relative">
                  <div className="w-40 h-40">
                    <img
                      className="rounded-3xl w-auto h-auto    mr-0"
                      src={MENU_IMG_API + item.card.info.imageId}
                    />
                  </div>
                  <button
                    onClick={() => handleAddItem(item)}
                    className="top-3/4 left-8   mx-auto absolute text-md px-8 py-3 rounded-xl text-white font-extrabold bg-slate-700 hover:bg-slate-900 hover:font-extrabold  hover:scale-105 transition ease-in-out 2s transform"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default ItemList;
