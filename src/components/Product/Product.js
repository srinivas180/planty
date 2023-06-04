import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

import "./Product.css";

export function Product({ product }) {
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);

    return (
        <div className="product__item">
            <img className="product__image" src={product.imageLink} />
            <div className="product__head">
                <div className="product__rating-heading">
                    <div className="product__rating">
                        <span>{product.rating}</span>
                        <span class="fa fa-star"></span>
                    </div>
                    <h3 className="product__heading">{product.title}</h3>
                </div>


                <span className="product__price">₹{product.price}</span>
            </div>
            <div className="product__buttons">
                <button className="product__button product__button--secondary" onClick={() => addToWishlist(product)}>Add to wishlist</button>
                <button className="product__button product__button--primary" onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}