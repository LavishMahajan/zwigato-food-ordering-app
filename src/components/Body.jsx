import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import HeadBod from "./HeadBod";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="offline-heading">Looks like you&aposre offline...</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <HeadBod />
      <div className="ml-40">
        <div className="flex">
          <div className="search">
            <input
              type="text"
              className="px-4 border-x-12 border-white-100 bg-white-100 ml-80 mt-8 w-80 h-10 rounded-3xl shadow-xl"
              value={searchText}
              placeholder="Search any Restaurant, item"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-slate-400 m-4 rounded-3xl shadow-xl hover:text-white hover:bg-slate-600 transition ease-in-out duration-300 transform"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="px-4 py-2 bg-slate-400 mt-8 mr-32 ml-8 mb-8 rounded-3xl shadow-xl hover:text-white hover:bg-slate-600 transition ease-in-out duration-300 transform"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestaurants(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
