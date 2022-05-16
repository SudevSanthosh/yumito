import {Link} from "react-router-dom"
// import { Breakfast } from "./Foodlist";


export function FoodNavbar() {
  return (
    <>
   
      <div className="h-16 w-full bg-zinc-300">
        <ul className="flex justify-evenly text-lg">
          <Link to="/Navbar/Breakfast">
            <li className="mt-4">Break your Fast</li>
          </Link>
          <Link to="/Navbar/Lunch">
            <li className="mt-4">Time for Lunch</li>
          </Link>
          <Link to="/Navbar/Snacks">
            <li className="mt-4">Can I Have Snacks</li>
          </Link>
          <Link to="/Navbar/Dinner">
            <li className="mt-4">Dinner</li>
          </Link>
          <Link to="/Navbar/Burger">
            <li className="mt-4">Burgers and Beverages</li>
          </Link>
          <Link to="">
            <li className="mt-4">More...</li>
          </Link>
        </ul>
      </div>
      {/* <Breakfast /> */}
    </>
  );
}
