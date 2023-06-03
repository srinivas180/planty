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
            <h3 className="prdudct__heading">{product.title}</h3>
            <div className="product__buttons">
                <button className="product__button product__button--secondary" onClick={() => addToWishlist(product)}>Add to wishlist</button>
                <button className="product__button product__button--primary" onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}