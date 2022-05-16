import SlidingPanel from "react-sliding-side-panel";
import { useState } from "react";
import { Link } from "react-router-dom";
export const About = () => {
  const [openPanel, setOpenPanel] = useState(true);
  return (
    <div className="w-2/6 bg-gray-200">
      <SlidingPanel type={"left"} isOpen={openPanel} size={100}>
        <div>
          <div className="flex flex-row justify-evenly pt-7 ">
            <h1 className="text-2xl">who are we?</h1>
            <p
              className="text-2xl bg-red-700 pl-3 pr-3 rounded-xl text-white font-bold cursor-pointer"
              onClick={() => setOpenPanel(false)}
            >
              X
            </p>
          </div>

          <div className="pt-7 items-center justify-center py-2 px-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              dolor finibus, rutrum sem non, aliquet ex. Praesent vehicula felis
              eget imperdiet aliquam. Nulla interdum risus non facilisis
              fermentum. Curabitur at massa sed nunc vulputate tristique. Fusce
              viverra libero at aliquam suscipit. Sed eu orci finibus, molestie
              orci nec, dapibus magna
            </p>
          </div>
          <ul className="justify-evenly flex pt-7">
            <Link to="/Foodlist">
              <li className="bg-blue-700 text-white hover:bg-gray-400  font-bold py-2 px-4 rounded">
                Menu
              </li>
            </Link>
            <Link to="">
              <li className="bg-blue-700 text-white hover:bg-gray-400  font-bold py-2 px-4 rounded">
                Login
              </li>
            </Link>
            <Link to="">
              <li className="bg-blue-700 text-white hover:bg-gray-400 font-bold py-2 px-4 rounded">
                Sign Up
              </li>
            </Link>
          </ul>
        </div>
      </SlidingPanel>
    </div>
  );
};
