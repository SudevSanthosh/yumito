import { BreakFast } from "../utils/Data";
import { TimeLunch } from "../utils/Data";
import { snacks } from "../utils/Data";
import { dinner } from "../utils/Data";
import { burgers } from "../utils/Data";
import { Pizzanians } from "../utils/Data";
import { Desserts } from "../utils/Data";
import { Chicken } from "../utils/Data";
import { Link } from "react-router-dom";
import {useEffect} from "react"
import {FoodNavbar} from "../components/FoodNavbar"


function Foodlist() {
 

  
 return (
   <>
     <FoodNavbar />
     <Breakfast />
     <Lunch />
     <Snacks />
     <Dinner />
     <Burger />
   </>
 );
}


export function Breakfast() {
  
  return (
    <>
      <div className="w-full bg-slate-100 grid grid-cols-2 gap-0">
        {BreakFast.map((breakfast) => (
          <div
            key={breakfast.id}
            className="flex justify-between border-4 h-36 rounded-lg border-stone-300  ml-36 pl-4 mt-8 mb-8  w-96"
          >
            <div>
              <h1>{breakfast.itemName}</h1>
              <h1>{breakfast.vegan}</h1>
              <h1 className="mb-2">₹{breakfast.price}</h1>
              <button className=" rounded-lg border-stone-300 p-1 bg-orange-600">
                Add to cart
              </button>
            </div>
            <div className="object-cover">
              <img
                src={breakfast.img}
                alt="breakfast-item"
                width="120px"
                height="100px"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export function Lunch() {
  return (
    <>
      <h1 className="bg-slate-100 text-center text-xl">Time for lunch</h1>
      <div className="w-full bg-slate-100 grid grid-cols-2 gap-0">
        {TimeLunch.map((timelaunch) => (
          <div
            key={timelaunch.id}
            className="flex justify-between border-4 h-36 rounded-lg border-stone-300  ml-36 pl-4 mt-8 mb-8  w-96"
          >
            <div>
              <h1>{timelaunch.itemName}</h1>
              <h1>{timelaunch.vegan}</h1>
              <h1 className="mb-2">₹{timelaunch.price}</h1>
              <button className=" rounded-lg border-stone-300 p-1 bg-orange-600">
                Add to cart
              </button>
            </div>
            <div className="object-cover">
              <img
                src={timelaunch.img}
                alt="breakfast-item"
                width="120px"
                height="50px"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export function Snacks() {
  return (
    <>
      <h1 className="bg-slate-100 text-center text-xl">Time for snacks</h1>
      <div className="w-full bg-slate-100 grid grid-cols-2 gap-0">
        {snacks.map((snacks) => (
          <div
            key={snacks.id}
            className="flex justify-between border-4 h-36 rounded-lg border-stone-300  ml-36 pl-4 mt-8 mb-8  w-96"
          >
            <div>
              <h1>{snacks.itemName}</h1>
              <h1>{snacks.vegan}</h1>
              <h1 className="mb-2">₹{snacks.price}</h1>
              <button className=" rounded-lg border-stone-300 p-1 bg-orange-600">
                Add to cart
              </button>
            </div>
            <div className="object-cover">
              <img
                src={snacks.img}
                alt="breakfast-item"
                width="120px"
                height="100px"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function Dinner() {
  return (
    <>
      <h1 className="bg-slate-100 text-center text-xl">Time for Dinner</h1>
      <div className="w-full bg-slate-100 grid grid-cols-2 gap-0">
        {dinner.map((Dinner) => (
          <div
            key={Dinner.id}
            className="flex justify-between border-4 h-36 rounded-lg border-stone-300  ml-36 pl-4 mt-8 mb-8  w-96"
          >
            <div>
              <h1>{Dinner.itemName}</h1>
              <h1>{Dinner.vegan}</h1>
              <h1 className="mb-2">₹{Dinner.price}</h1>
              <button className=" rounded-lg border-stone-300 p-1 bg-orange-600">
                Add to cart
              </button>
            </div>
            <div className="object-cover">
              <img
                src={Dinner.img}
                alt="breakfast-item"
                width="100px"
                height="100px"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function Burger() {
  return (
    <>
      <h1 className="bg-slate-100 text-center text-xl">Time for Burger</h1>
      <div className="w-full bg-slate-100 grid grid-cols-2 gap-0">
        {burgers.map((burger) => (
          <div
            key={burger.id}
            className="flex justify-between border-4 h-36 rounded-lg border-stone-300  ml-36 pl-4 mt-8 mb-8  w-96"
          >
            <div>
              <h1>{burger.itemName}</h1>
              <h1>{burger.vegan}</h1>
              <h1 className="mb-2">₹{burger.price}</h1>
              <button className=" rounded-lg border-stone-300 p-1 bg-orange-600">
                Add to cart
              </button>
            </div>
            <div className="object-cover">
              <img
                src={burger.img}
                alt="breakfast-item"
                width="100px"
                height="100px"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Foodlist;
