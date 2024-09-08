/* eslint-disable react/prop-types */
import IMG_URL from "../assets/img_1.jpg";

const TypingEffect = ({ text }) => {
  return (
    <div className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-black animate-typing animate-blink-caret">
      {text}
    </div>
  );
};

const HeadBod = () => {
  const lines = [
    "Crave-worthy dishes delivered to your door - only with Zwigato!",
    "Satisfy your hunger with the freshest flavors - Explore Zwigato's menu now!",
    "Indulge in culinary delights - Let Zwigato make your taste buds dance!",
    "From sizzling street food to gourmet meals - Zwigato has it all!",
    "Hungry? Zwigato's got the perfect dish to make you swoon!",
    "Unleash your appetite with Zwigato - Where every bite is a delight!",
    "Your favorite meals, made even better - Dive into Zwigato's irresistible menu!",
    "Experience food bliss with Zwigato - Deliciousness delivered fast!",
    "Turn hunger into happiness - Order from Zwigato and taste the difference!",
    "Ready for a food adventure? Zwigato has the perfect dish to satisfy your cravings!",
  ];

  return (
    <div>
      <img className="w-[100%] h-[600px] z-0" src={IMG_URL} alt="hb-img" />
      <div className="bg-black bg-opacity-50 h-[600px] mt-[130px] absolute inset-0 items-center justify-center overflow-hidden whitespace-nowrap">
        <h1 className="italic px-80 text-white text-[140px] font-extrabold p-4 rounded">
          Zwigato it !!!
        </h1>
        <div className="inline-block text-white text-2xl font-bold p-4 rounded">
          {lines.map((line, index) => (
            <div
              key={index}
              className="absolute w-full"
              style={{ animation: `fade 5s linear ${index * 10}s infinite` }}
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

//   return (
//     <div className="relative overflow-hidden" style={{ height: '100px' }}>
//       {lines.map((line, index) => (
//         <div
//           key={index}
//           className="absolute w-full"
//           style={{ animation: `fade 10s linear ${index * 10}s infinite` }}
//         >
//           <TypingEffect text={line} />
//         </div>
//       ))}
//     </div>
//   );
//
