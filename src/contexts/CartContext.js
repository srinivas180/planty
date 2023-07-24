import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const { encodedToken } = useContext(AuthContext);
    const navigate = useNavigate();

    async function addToCart(product) {
        try {
            const response = await fetch("/api/user/cart", {
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
                setCart(data.cart);
                toast.success("Added to cart", {
                    position: "bottom-right",
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function removeFromCart(productId) {
        try {
            const response = await fetch(`/api/user/cart/${productId}`, {
                method: "DELETE",
                headers: {
                    authorization: encodedToken,
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                setCart(data.cart);
                toast.warning("Removed from cart", {
                    position: "bottom-right",
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function quantityHandler(productId, type) {
        try {
            const response = await fetch(`api/user/cart/${productId}`, {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                },
                body: JSON.stringify({
                    action: {
                        type,
                    },
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                setCart(data.cart);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function cartHasProduct(product) {
        return cart.find((item) => item.id === product.id);
    }

    function navigateToCart() {
        navigate("/cart");
    }

    function getItemsPrice() {
        return cart.reduce(
            (totalPrice, currentItem) =>
                (totalPrice += Number(currentItem.price) * currentItem.qty),
            0
        );
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                quantityHandler,
                getItemsPrice,
                cartHasProduct,
                navigateToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
