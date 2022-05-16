import { Link } from "react-router-dom";
import { image } from "../assets/Images";



// import logo from "../y-logo";
// export const Navbar = () => {
//   return (
//     <div className="bg-black h-14 ">
//       <img src="" alt="Logo" />
//       <div className=" text-white  flex flex-row-reverse  ">
//         <nav className=" mr-10  space-x-14 text-xl">
//           <Link to="About">About</Link>
//           <Link to="LoginPage">Login</Link>
//           <Link to="Signup">Signup</Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

export const Navbar = () => {
  return (
    <>
      <div className="h-16 w-full bg-slate-900 flex justify-between">
        <Link to="/">
         
          <img
            className="h-8 w-20 mt-4 ml-4"
            src={image}
            alt="logo"
            width="40px"
            height="10px"
          />
        </Link>
        <div>
          <ul className="flex mt-4 text-xl">
            <Link to="/About">
              <li className="text-white mr-4">About</li>
            </Link>
            <Link to="/LoginPage">
              <li className="text-white mr-4">Login</li>
            </Link>
            <Link to="">
              <li className="text-white mr-4">Signup</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
