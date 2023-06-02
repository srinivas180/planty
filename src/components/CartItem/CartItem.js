import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import "./CartItem.css";

export function CartItem({ item }) {
    const { removeFromCart } = useContext(CartContext);
    return (
        <div className="cart-item">
            <img className="cart-item__image" src={item.imageLink} alt={item.altText}/>
            <div className="cart-item__details">
                <h2 className="cart-item__heading">{item.title}</h2>
                <p className="cart-item__price">₹{item.price}</p>
                <div className="cart-item__category">
                    <span className="category__title">Category: </span> {item.categoryName}
                </div>
                <div className="quantity">
                    <span className="quantity__title">Quantity: </span>
                    <button className="quantity__button button--secondary">-</button>
                    <span className="quantity__number">1</span>
                    <button className="quantity__button button--secondary">+</button>
                </div>
                <div className="cart-item__buttons">
                    <button className="cart-item__button button--secondary" onClick={() => removeFromCart(item._id)}>Remove Item</button>
                    <button className="cart-item__button button--secondary">Move to Wishlist</button>
                </div>
            </div>
        </div>
    )
}