import { useContext, useState } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.css";

export function Profile() {
    const { user, logoutHandler } = useContext(AuthContext);
    const { addresses, addAddress, removeAddress } = useContext(AddressContext);
    const [ address, setAddress] = useState({
        title: "",
        houseNo: "",
        colony: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    });
    const [showAddressForm, setShowAddressForm] = useState(false);

    function resetForm() {
        setAddress({
            title: "",
            houseNo: "",
            colony: "",
            city: "",
            state: "",
            country: "",
            pinCode: ""
        });
    }

    return (
        <>
            {
                ( user == undefined || user == null ) ? "Loading" : (
                    <div
                        className="container column column--center"
                    >
                        <div className="column" style={{ display: showAddressForm ? "none" : "flex"}}>
                            <h2 className="account">Account</h2>
                            <h3 className="account__sub-heading">Profile</h3>
                            <div className="profile__details">
                                <div>
                                    <span className="profile__title">Full Name:</span>
                                    <span className="profile__value">{ user.firstName } { user.lastName }</span>
                                </div>
                                <div>
                                    <span className="profile__title">Email:</span>
                                    <span className="profile__value">{ user.email }</span>
                                </div>
                            </div>

                            <div className="row row--space-between address__title">
                                <h3 className="account__sub-heading">Address</h3>
                                <button className="add-address button--primary" onClick={() => {
                                    setShowAddressForm(true);
                                }}>Add Address</button>
                            </div>
                            {
                                addresses.map(address => (
                                    <div className="address">
                                        <h4 className="address__subheading">{ address.title }</h4>
                                        <div>
                                            {address.houseNo}, Ring Road, Sampath Nagar
                                        </div>
                                        <div>
                                            {address.colony}
                                        </div>
                                        <div>
                                            {address.city}, {address.state} - {address.pinCode}
                                        </div>
                                        <div>
                                            {address.country}
                                        </div>
                                        <div className="address__buttons">
                                            <button
                                                className="button--secondary address__button"
                                                onClick={() => {
                                                    setShowAddressForm(true);
                                                    setAddress(address);
                                            }}>
                                                Edit
                                            </button>
                                            <button
                                                className="button--secondary address__button"
                                                onClick={
                                                    () => removeAddress(address._id) }>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                            <button className="button--primary logout" onClick={() => logoutHandler()}>Logout</button>
                        </div>

                        <div
                            className="column column--center address-form-container" 
                            style={{ display: showAddressForm ? "flex" : "none"}}
                        >
                                <form className="form column address-form" onSubmit={(event) => {
                                    event.preventDefault();
                                    addAddress(address);
                                    setShowAddressForm(false);
                                    resetForm();
                                }}>
                                    <h2 className="form__heading">Add or Edit Address</h2>
                                    <input
                                        className="form__input"
                                        required={true}
                                        type="text"
                                        name="title"
                                        value={address.title}
                                        placeholder="Enter title, ex: Home or Office"
                                        onChange={(event) => setAddress(
                                            address => ({
                                                ...address,
                                                title: event.target.value,
                                            })
                                        )} 
                                    />
                                    <input
                                        className="form__input"
                                        required={true}
                                        type="text"
                                        value={address.houseNo}
                                        placeholder="House or Flat Number"
                                        onChange={(event) => setAddress(
                                            address => ({
                                                ...address,
                                                houseNo: event.target.value,
                                            })
                                        )} 
                                    />
                                    <input
                                        className="form__input"
                                        required={true}
                                        type="text"
                                        value={address.colony}
                                        placeholder="Colony"
                                        onChange={(event) => setAddress(
                                            address => ({
                                                ...address,
                                                colony: event.target.value,
                                            })
                                        )} 
                                    />
                                    <input
                                        className="form__input"
                                        required={true}
                                        type="text"
                                        value={address.city}
                                        placeholder="City"
                                        onChange={(event) => setAddress(
                                            address => ({
                                                ...address,
                                                city: event.target.value,
                                            })
                                        )} 
                                    />
                                    <input
                                        className="form__input"
                                        required={true}
                                        type="text"
                                        value={address.state}
                                        placeholder="State"
                                        onChange={(event) => setAddress(
                                            address => ({
                                                ...address,
                                                state: event.target.value,
                                            })
                                        )} 
                                    />
                                    <input
                                        className="form__input"
                                        required={true}
                                        type="number"
                                        value={address.pinCode}
                                        placeholder="Pincode"
                                        onChange={(event) => setAddress(
                                            address => ({
                                                ...address,
                                                pinCode: event.target.value,
                                            })
                                        )} 
                                    />
                                    <input
                                        className="form__input"
                                        required={true}
                                        type="text"
                                        value={address.country}
                                        placeholder="Country"
                                        onChange={(event) => setAddress(
                                            address => ({
                                                ...address,
                                                country: event.target.value,
                                            })
                                        )} 
                                    />
                                    <div className="address-form__buttons">
                                        <button
                                            className="button--secondary address-form__button"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                resetForm();
                                                setShowAddressForm(false)
                                            }}>
                                                Cancel</button>
                                        <button className="button--primary form__submit address-form__button" type="submit">
                                            Save
                                        </button>
                                    </div>
                                </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}