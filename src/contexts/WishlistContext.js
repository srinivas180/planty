import { createContext, useReducer } from "react";

export const WishlistContext = createContext();

function WishlistReducer(wishlist, action) {
    switch(action.type) {
        case "ADD_TO_WISHLIST":
            break;
        case "REMOVE_FROM_WISHLIST":
            break;
        default:
            return wishlist;
    }
}

export function WishlistProvider({ children }) {
    const [wishlist, dispatchWishlist] = useReducer(WishlistReducer, []);

    return (
        <WishlistContext.Provider value={{ wishlist, dispatchWishlist }}>
            { children }
        </WishlistContext.Provider>
    );
}