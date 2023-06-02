import { useContext } from "react"

import { WishlistContext } from "../../contexts/WishlistContext";
import { WishlistItem } from "../../components/WishlistItem/WishlistItem";

export function Wishlist() {
    const { wishlist } = useContext(WishlistContext);

    return (
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