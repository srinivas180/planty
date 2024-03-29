import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import "./CartItem.css";

export function CartItem({ item }) {
    const { removeFromCart, quantityHandler } = useContext(CartContext);
    const { addToWishlist, removeFromWishlist, wishlistHasItem } =
        useContext(WishlistContext);

    return (
        <div className="cart-item">
            <img
                className="cart-item__image"
                src={item.imageLink}
                alt={item.altText}
            />
            <div className="cart-item__details">
                <h2 className="cart-item__heading">{item.title}</h2>
                <p className="cart-item__price">₹{item.price}</p>
                <div className="cart-item__category">
                    <span className="category__title">Category: </span>{" "}
                    {item.categoryName}
                </div>
                <div className="quantity">
                    <span className="quantity__title">Quantity: </span>
                    <button
                        className="quantity__button button  button--secondary"
                        onClick={() => quantityHandler(item._id, "decrement")}
                        disabled={item.qty === 1}
                    >
                        -
                    </button>
                    <span className="quantity__number">{item.qty}</span>
                    <button
                        className="quantity__button button  button--secondary"
                        onClick={() => quantityHandler(item._id, "increment")}
                    >
                        +
                    </button>
                </div>
                <div className="cart-item__buttons">
                    <button
                        className="cart-item__button button  button--secondary"
                        onClick={() => removeFromCart(item._id)}
                    >
                        Remove Item
                    </button>
                    <button
                        className="cart-item__button button  button--secondary"
                        onClick={() => {
                            wishlistHasItem(item)
                                ? removeFromWishlist(item._id)
                                : addToWishlist(item);
                        }}
                    >
                        {wishlistHasItem(item)
                            ? "Unwishlist"
                            : "Add to wishlist"}
                    </button>
                </div>
            </div>
        </div>
    );
}
