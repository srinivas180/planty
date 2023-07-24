import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "./AuthContext";

import "react-toastify/dist/ReactToastify.css";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);
    const { encodedToken } = useContext(AuthContext);

    async function addToWishlist(product) {
        try {
            const response = await fetch("/api/user/wishlist", {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                },
                body: JSON.stringify({
                    product,
                }),
            });

            if (response.status === 201) {
                const data = await response.json();
                setWishlist(data.wishlist);

                toast.success("Added to wishlist", {
                    position: "bottom-right",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Some error occurred. Cannot add to wishlist.", {
                position: "bottom-right",
            });
        }
    }

    async function removeFromWishlist(productId) {
        try {
            const response = await fetch(`/api/user/wishlist/${productId}`, {
                method: "DELETE",
                headers: {
                    authorization: encodedToken,
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                setWishlist(data.wishlist);

                toast.warning("Removed from wishlist", {
                    position: "bottom-right",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Some error occurred. Cannot remove from wishlist.", {
                position: "bottom-right",
            });
        }
    }

    function wishlistHasItem(item) {
        return wishlist.find((product) => product.id === item.id);
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                wishlistHasItem,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}
