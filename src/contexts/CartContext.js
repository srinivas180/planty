import { createContext, useState, useContext } from "react";

import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const { encodedToken } = useContext(AuthContext);

    async function addToCart(product) {
        const response = await fetch("api/user/cart", {
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

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, quantityHandler }}>
            { children }
        </CartContext.Provider>
    );
}