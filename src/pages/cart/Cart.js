import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../../components/CartItem/CartItem";

export function Cart() {
    const {cart} = useContext(CartContext);
    return (
        <div className="container">
            <h1>Cart</h1>
            {
                cart.map(item => <CartItem key={item.id} item={item} />)
            }
        </div>
    )
}