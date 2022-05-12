import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import { LoginPage } from "./pages/LoginPage";
import { Menu } from "./pages/Menu";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  </div>
  );
}

export default App;
