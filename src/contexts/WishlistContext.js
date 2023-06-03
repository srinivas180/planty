import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    return (
        <WishlistContext.Provider value={{ wishlist }}>
            { children }
        </WishlistContext.Provider>
    );
}