import { createContext, useState, useReducer } from "react";

export const CartContext = createContext();

function CartReducer(cart, action) {
    switch(action.type) {
        case "ADD_TO_CART":
            return [...cart, action.item];
        case "REMOVE_FROM_CART":
            break;
        case "INCREASE_QUANTITY":
            break;
        case "DECREASE_QUANTITY":
            break;
        default:
            return cart;
    }
}

export function CartProvider({ children }) {
    const [cart, dispatchCart] = useReducer(CartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatchCart }}>
            { children }
        </CartContext.Provider>
    );
}