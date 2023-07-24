import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

import { Loader } from "../../components/Spinner/Spinner";

import "./SingleProduct.css";

export function SingleProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState();

    const { addToCart, cartHasProduct, navigateToCart } =
        useContext(CartContext);
    const { addToWishlist, removeFromWishlist, wishlistHasItem } =
        useContext(WishlistContext);

    const [isLoading, setIsLoading] = useState(true);

    async function fetchProduct() {
        try {
            const response = await fetch(`/api/products/${productId}`);

            if (response.status === 200) {
                const { product } = await response.json();
                setProduct(product);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="loader">
                    <Loader />
                </div>
            ) : (
                <div className="cart-item single-product">
                    <img
                        className="cart-item__image"
                        src={product.imageLink}
                        alt={product.altText}
                    />
                    <div className="cart-item__details single-product__details">
                        <h2 className="cart-item__heading">{product.title}</h2>
                        <p className="cart-item__price">₹{product.price}</p>
                        <div className="cart-item__category">
                            <span className="category__title">Category: </span>{" "}
                            {product.categoryName}
                        </div>
                        <div className="single-product__description">
                            Lorem magna euismod magna ipsum et sit dolore ea
                            eleifend voluptua labore kasd lorem enim ipsum ipsum
                            amet. Lorem vero ipsum sea ea duo ea stet justo ut
                            no ut. Sed euismod laoreet consectetuer volutpat
                            amet adipiscing accusam tincidunt dolore diam et et
                            te amet nulla.
                        </div>
                        <div className="cart-item__buttons">
                            <button
                                className="cart-item__button button button--secondary"
                                onClick={() => {
                                    cartHasProduct(product)
                                        ? navigateToCart()
                                        : addToCart(product);
                                }}
                            >
                                {cartHasProduct(product ?? false)
                                    ? "Go to cart"
                                    : "Add to cart"}
                            </button>
                            <button
                                className="cart-item__button button button--secondary"
                                onClick={() => {
                                    wishlistHasItem(product)
                                        ? removeFromWishlist(product._id)
                                        : addToWishlist(product);
                                }}
                            >
                                {wishlistHasItem(product ?? false)
                                    ? "Unwishlist"
                                    : "Add to wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
