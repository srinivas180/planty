import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

import "./Product.css";

export function Product({ product }) {
    const { addToCart, cartHasProduct, navigateToCart } = useContext(CartContext);
    const { addToWishlist, removeFromWishlist, wishlistHasItem } = useContext(WishlistContext);
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="product__item">
            <Link to={`/product/${product._id}`}>
                <img className="product__image" src={product.imageLink} />
            </Link>
            <div className="product__head">
                <div className="product__rating-heading">
                    <div className="product__rating">
                        <span>{product.rating}</span>
                        <span className="fa fa-star"></span>
                    </div>
                    <h3 className="product__heading">{product.title}</h3>
                </div>


                <span className="product__price">₹{product.price}</span>
            </div>
            <div className="product__buttons">
                <button className="product__button product__button--secondary"
                    onClick={() => {
                        if(!isLoggedIn) {
                            navigate("/login");
                        } else {
                            wishlistHasItem(product) ? removeFromWishlist(product._id) : addToWishlist(product)
                        }
                    }}
                >
                    {
                        wishlistHasItem(product) ? "Unwishlist" : "Add to wishlist"
                    }
                </button>
                <button className="product__button product__button--primary" onClick={() => {
                    if(!isLoggedIn) {
                        navigate("/login");
                    } else {
                        cartHasProduct(product) ? navigateToCart() : addToCart(product);
                    }
                }}>
                    {
                        cartHasProduct(product) ? "Go to cart" : "Add to cart"
                    }
                </button>
            </div>
        </div>
    )
}