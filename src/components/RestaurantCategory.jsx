/* eslint-disable react/prop-types */
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
   
  const handleClick = () =>{
    setShowIndex();
  }
  
  return (
    <div className="flex-col w-full">
        <div>
            <div
                className="flex-col justify-between mx-40 w-auto cursor-pointer overflow-x-hidden h-auto m-8 rounded-2xl bg-white shadow-2xl p-4"
                onClick={handleClick}
            >
            <div className="flex justify-between w-full">
                <span className="text-3xl font-extrabold text-slate-900">
                    {data.title} ({data.itemCards.length})
                    </span>
                    <span className="text-3xl">🔽</span>
                </div>
                
        {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    </div>
  );
};
export default RestaurantCategory;
