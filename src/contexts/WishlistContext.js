import { createContext, useState, useContext } from "react";

import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);
    const { encodedToken } = useContext(AuthContext);

    async function addToWishlist(product) {
        const response = await fetch("api/user/wishlist", {
            method: "POST",
            headers: {
                "authorization": encodedToken,
            },
            body: JSON.stringify({
                product
            }),
        });

        const data = await response.json();
        setWishlist(data.wishlist);
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
            { children }
        </WishlistContext.Provider>
    );
}