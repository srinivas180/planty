import { useContext, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";
import { AddressContext } from "../../contexts/AddressContext";

import "./Checkout.css";

export function Checkout() {
    const { cart } = useContext(CartContext);
    const { addresses } = useContext(AddressContext);
    const [address, setAddress] = useState(addresses[0]);

    return (
        <>
            <div className="checkout container row row--center">
                {/* Address Options */}
                <div>
                    {
                        addresses.map((address, index) => (
                            <div className="checkout__address">
                                <label className="address-options">
                                    <input type="radio" name="address-input" onChange={()=> setAddress(address)} defaultChecked={index === 0 ? true : false}/>
                                    <h4 className="checkout__address-title">{ address.title }</h4>
                                </label>
                                <div className="address">

                                        {address.houseNo}, Ring Road, Sampath Nagar


                                        {address.colony}
                                    <div>
                                        {address.city}, {address.state} - {address.pinCode}
                                    </div>
                                    <div>
                                        {address.country}
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>

                <div>
                    {/* Order Details */}
                    <div className="order-details w-100">
                        <h2 className="order__heading">Order Details</h2>

                        <div className="order__split">
                            <div className="order__item">
                                <p className="order__item-title">Item</p>
                                <p className="order__quantity-title">Quantity</p>
                            </div>
                            {
                                cart.map(item => (
                                    <div className="order__item">
                                        <p className="order__attribute">{ item.title }</p>
                                        <p className="order__value">{ item.qty }</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <PriceDetails />

                    {/* Delivery to */}
                    <div className="p-20 delivery-address">
                        <h2 className="order__heading">Delivery to</h2>
                        <div className="address">
                            {address.houseNo}, Ring Road, Sampath Nagar
                            {address.colony}
                            
                            <div>
                                {address.city}, {address.state} - {address.pinCode}
                            </div>

                            <div>
                                {address.country}
                            </div>

                        </div>
                    </div>
                    <button className="button--primary price__checkout">Place Order</button>
                </div>
            </div>
        </>
    )
}