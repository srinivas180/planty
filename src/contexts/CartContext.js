import { createContext, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const { encodedToken } = useContext(AuthContext);
    const navigate = useNavigate();

    async function addToCart(product) {
        const response = await fetch("/api/user/cart", {
            method: "POST",
            headers: {
                "authorization": encodedToken,
            },
            body: JSON.stringify({
                product
            }),
        });
        
        const data = await response.json();
        setCart(data.cart);
        toast.success("Added to cart", {
            position: "bottom-right"
        });
    }

    async function removeFromCart(productId) {
        const response = await fetch(`/api/user/cart/${productId}`, {
            method: "DELETE",
            headers: {
                "authorization": encodedToken,
            },
        });
        
        const data = await response.json();
        setCart(data.cart);
        toast.warning("Removed from cart", {
            position: "bottom-right"
        });
    }

    async function quantityHandler(productId, type) {
        const response = await fetch(`api/user/cart/${productId}`, {
            method: "POST",
            headers: {
                "authorization": encodedToken,
            },
            body: JSON.stringify({
                action: {
                    type,
                }
            }),
        });

        const data = await response.json();
        setCart(data.cart);
    }

    function cartHasProduct(product) {
        return cart.find(item => item.id === product.id)
    }

    function navigateToCart() {
        navigate("/cart");
    }

    function getItemsPrice() {
        return cart.reduce((totalPrice, currentItem) => 
            totalPrice += Number(currentItem.price) * currentItem.qty, 0);
    }

    return (
        <>
            <CartContext.Provider 
                value={
                        { 
                            cart,
                            addToCart,
                            removeFromCart,
                            quantityHandler,
                            getItemsPrice,
                            cartHasProduct,
                            navigateToCart,
                        }
                }>
                { children }
            </CartContext.Provider>
            <ToastContainer/>
        </>
    );
}