import { Link } from "react-router-dom";
// import logo from "./"
export const Navbar = () => {
  return (
    <div className="bg-black h-14 ">
      <img src="loginBg" alt="Logo" />
      <div className=" text-white  flex flex-row-reverse  ">
        <nav className=" mr-10  space-x-14 text-xl">
          <Link to="About">About</Link>
          <Link to="LoginPage">Login</Link>
          <Link to="Signup">Signup</Link>
        </nav>
      </div>
    </div>
  );
};
