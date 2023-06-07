import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

export function PriceDetails() {
    const {cart, getItemsPrice} = useContext(CartContext);
    const itemsPrice = getItemsPrice();

    return (
        <div className="price-details w-100 p-20">
            <h2 className="price__heading">Price Details</h2>

            <div className="price__split">
                <div className="price__item">
                    <p className="price__attribute">Price ({ cart.length } items)</p>
                    <p className="price__value">₹{itemsPrice}.00</p>
                </div>
                <div className="price__item">
                    <p className="price__attribute">Discount</p>
                    <p className="price__value">-₹100.00</p>
                </div>
                <div className="price__item">
                    <p className="price__attribute">Delivery Charges</p>
                    <p className="price__value">₹100.00</p>
                </div>
            </div>

            <div className="total-price price__item">
                <p className="total-price__attribute">Total Amount</p>
                <p className="total-price__value">₹{itemsPrice}.00</p>
            </div>

            <p className="price__savings">
                You will save ₹100.00 on this order
            </p>
        </div>
    )
}