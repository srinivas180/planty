import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";

import "./Cart.css";

export function Cart() {
    const {cart} = useContext(CartContext);

    return (
        <div className="container row row--center">
            <div className="cart">
                <h2>Cart ({ cart.length } items)</h2>
                <div className="cart__items">
                {
                    cart.map(item => <CartItem key={item.id} item={item} />)
                }
                </div>
            </div>
            <PriceDetails />
        </div>
    )
}