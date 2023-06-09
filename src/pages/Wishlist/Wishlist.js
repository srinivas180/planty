import { useContext } from "react";
import { Link } from "react-router-dom";

import { WishlistContext } from "../../contexts/WishlistContext";
import { WishlistItem } from "../../components/WishlistItem/WishlistItem";

export function Wishlist() {
    const { wishlist } = useContext(WishlistContext);

    return (
        <>
            {
                wishlist.length === 0 ? (
                    <div className="container cart--empty">
                        <h2>Your wishlist is empty</h2>
                        <Link className="explore-button" to="/products">Explore products</Link>
                    </div>
                ) : (
                    <div className="products container">
                        <h2>Wishlist ({ wishlist.length } items)</h2>
                        <div className="products__list">
                            {
                                wishlist.map(product => (
                                    <WishlistItem key={product.id} product={product} />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}