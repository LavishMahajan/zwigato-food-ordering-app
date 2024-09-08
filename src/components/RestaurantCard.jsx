/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants";
import { useState, useRef, useEffect } from "react";

const RestaurantCard = (props) => {
    const [expandCard, setExpandCard] = useState(false);
    const [isOverflow, setIsOverflow] = useState(false);
    const descriptionRef = useRef(null);

    const { resData } = props;
    const {
        cloudinaryImageId,
        name, 
        locality, 
        areaName, 
        avgRating, 
        sla,
        cuisines
    } = resData?.info;

    useEffect(() => {
        const descriptionElement = descriptionRef.current;
        // Check if content overflows the predefined height
        if (descriptionElement.scrollHeight > descriptionElement.clientHeight) {
            setIsOverflow(true);
        }
    }, []);

    const toggleExpand = (event) => {
        if (isOverflow && !expandCard) {
            event.preventDefault(); // Prevent navigation and expand the card instead
            setExpandCard(true);
        }
    };

    return (
        <div className="drop-shadow-2xl h-auto m-4 p-4 w-[265px] rounded-2xl bg-white hover:bg-slate-600 hover:text-white hover:shadow-2xl hover:scale-95 transition ease-in-out duration-500 transform">
            <img 
                className="rounded-2xl h-[175px] w-[229px] mx-auto my-auto" 
                src={CDN_URL + cloudinaryImageId} 
                alt="res-logo" 
            />
            <div>
                <h3 className="text-2xl font-extrabold py-1">{name}</h3>
                <h3 className="text-lg font-bold">{locality}</h3>
                <h3 className="font-medium">{areaName}</h3>
                <h4 className="font-extrabold">✡️{avgRating}</h4>
                <h4 className="font-medium">{sla?.slaString}</h4>
                
                {/* Description with expandable functionality */}
                <h3 
                    ref={descriptionRef}
                    className={`transition-max-height duration-3 ease-in-out ${expandCard ? 'max-h-[450px]' : 'max-h-[60px] overflow-hidden'}`}
                >
                    {cuisines.join(", ")}
                </h3>

                {/* Conditionally render the button */}
                {isOverflow && (
                    <button 
                        className="text-blue-400 font-medium rounded-lg mt-2 z-1"
                        onClick={toggleExpand}
                    >
                        {expandCard ? "Read Less" : "Read More"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default RestaurantCard;
