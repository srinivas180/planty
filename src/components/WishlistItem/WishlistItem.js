import { useContext } from "react";

import { WishlistContext } from "../../contexts/WishlistContext";
import { CartContext } from "../../contexts/CartContext";

export function WishlistItem({ product }) {
    const { removeFromWishlist } = useContext(WishlistContext);
    const { addToCart, hasProduct, quantityHandler} = useContext(CartContext);

    return (
        <div className="product__item">
            <img className="product__image" src={product.imageLink} />
            <h3 className="prdudct__heading">{product.title}</h3>
            <div className="product__buttons">
                <button className="product__button product__button--secondary" 
                    onClick={() => removeFromWishlist(product._id)}
                >Remove Item</button>
                <button className="product__button product__button--primary"
                    onClick={() => {
                        if(hasProduct(product)) {
                            quantityHandler(product._id, "increment");
                        } else {
                            addToCart(product);
                        }
                    }}
                >Add to cart</button>
            </div>
        </div>
    )
}