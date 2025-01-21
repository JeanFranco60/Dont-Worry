import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import LogOut from "./pages/LogOutPage";
import Register from "./pages/Register";
import Accessories from "./pages/Accessories";
import Cart from "./pages/shopping/Cart";
import Orders from "./pages/Orders";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ordenes" element={<Orders />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
