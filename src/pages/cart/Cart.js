import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../../components/CartItem/CartItem";

import "./Cart.css";

export function Cart() {
    const {cart} = useContext(CartContext);

    function PriceDetails() {
        return (
            <div className="price-details">
                <h2 className="price__heading">Price Details</h2>

                <div className="price__split">
                    <div className="price__item">
                        <p className="price__attribute">Price ({ cart.length } items)</p>
                        <p className="price__value">₹4500</p>
                    </div>
                    <div className="price__item">
                        <p className="price__attribute">Discount</p>
                        <p className="price__value">-₹1000</p>
                    </div>
                    <div className="price__item">
                        <p className="price__attribute">Delivery Charges</p>
                        <p className="price__value">₹100</p>
                    </div>
                </div>

                <div className="total-price price__item">
                    <p className="total-price__attribute">Total Amount</p>
                    <p className="total-price__value">₹3500</p>
                </div>

                <p className="price__savings">
                    You will save ₹1000.00 on this order
                </p>

                <button className="button--primary price__checkout">Checkout</button>
            </div>
        )
    }

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