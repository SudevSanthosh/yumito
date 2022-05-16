import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import { LoginPage } from "./pages/LoginPage";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { SignUp } from "./pages/SignUp";
import Foodlist from "./components/Foodlist";
import { Navbar } from "./components/Navbar";
import {
  Breakfast,
  Lunch,
  Snacks,
  Dinner,
  Burger,
} from "./components/Foodlist";

function App() {
  return (
    <>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/Foodlist" element={<Foodlist />}></Route>
          <Route path="/Navbar/Breakfast" element={<Breakfast />}></Route>
          <Route path="/Navbar/Lunch" element={<Lunch />}></Route>
          <Route path="/Navbar/Snacks" element={<Snacks />}></Route>
          <Route path="/Navbar/Dinner" element={<Dinner />}></Route>
          <Route path="/Navbar/Burger" element={<Burger />}></Route>
        </Routes>
        {/* <Foodlist /> */}
      </div>
    </>
  );
}

export default App;
