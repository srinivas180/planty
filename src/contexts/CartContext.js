import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    async function addToCart(product) {
        const response = await fetch("api/user/cart", {
            method: "POST",
            headers: {
                "authorization": localStorage.getItem("encodedToken"),
            },
            body: JSON.stringify({
                product
            }),
        });
        
        const data = await response.json();
        setCart(data.cart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            { children }
        </CartContext.Provider>
    );
}