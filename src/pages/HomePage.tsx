
import { BsFillArrowRightSquareFill } from "react-icons/bs";
export const HomePage = () => {
  return (
    <div>
      
      <div className="flex space-x-14 ">
        <div className="  bg-white drop-shadow-lg w-80 h-72 mt-20 ml-52 flex-wrap ">
          <img src="restaurant" alt="restaurant" />
          <h2 className="text-blue-600 font-bold  text-xl">
            Order your favourite food
          </h2>
          <h3 className="text-blue-600">Check the Menu</h3>{" "}
          <BsFillArrowRightSquareFill />
        </div>
        <div className="bg-white drop-shadow-lg w-80 h-72 mt-20">
          <h1 className="text-black-700 font-bold text-2xl">
            Hours And Location
          </h1>
          <img src="clock" alt="clock"/>
          <h3>Outer Ring Rd, J P Nagar,Bangalore-560078</h3>
          <h4>
            All days 10AM-9PM <BsFillArrowRightSquareFill />
          </h4>
        </div>
      </div>
    </div>
  );
};
