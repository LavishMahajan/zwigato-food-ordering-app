/* eslint-disable react/prop-types */
import IMG_URL from "../assets/img_1.jpg";

const TypingEffect = ({ text }) => {
  return (
    <div className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white animate-blinkCaret">
      {text}
    </div>
  );
};

const HeadBod = () => {
  const lines = [
    "Crave-worthy dishes delivered to your door - only with Zwigato!",
    "Satisfy your cravings with just a click!"
  ];

  return (
    <div>
      <img className="w-full h-[600px] z-0" src={IMG_URL} alt="hb-img" />
      <div className="bg-black bg-opacity-50 h-[600px] mt-[130px] absolute inset-0 flex flex-col items-center justify-center overflow-hidden whitespace-nowrap">
        <h1 className="italic px-80 text-white text-[140px] font-extrabold p-4 rounded">
          Zwigato it !!!
        </h1>
        <div className="relative text-white text-2xl font-bold p-4 rounded">
          {lines.map((line, index) => (
            <div
              key={index}
              className="absolute w-full h-10 animate-fadeInOut"
              style={{ animationDelay: `${index === 0 ? 2.90 : 5.25}s` }}  /* Increase delay for the second line */
            >
              <TypingEffect text={line} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default HeadBod;
