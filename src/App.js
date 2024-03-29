import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { Profile } from "./pages/Profile/Profile";
import { Checkout } from "./pages/Checkout/Checkout";

import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:productId" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/mockman" element={<Mockman />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
