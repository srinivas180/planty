import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const AddressContext = createContext();

export function AddressProvider({ children }) {
    const defaultAddress = {
        _id: uuid(),
        title: "Home",
        houseNo: "4534",
        colony: "MG Colony",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pinCode: "543234"
    };

    const [addresses, setAddresses] = useState([defaultAddress]);

    const addAddress = (address) => {
        setAddresses(addresses => [...addresses, {_id: uuid(), ...address}]);
    }

    function removeAddress(addressId) {
        const updatedAddresses = addresses.filter(address => address._id !== addressId);
        setAddresses(updatedAddresses);
    }

    return (
        <AddressContext.Provider value={{ addresses, setAddresses, addAddress, removeAddress }}>
            { children }
        </AddressContext.Provider>
    )
}