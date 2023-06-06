import { createContext, useState } from "react";

export const AddressContext = createContext();

export function AddressProvider({ children }) {
    const defaultAddress = {
        title: "Home",
        houseNo: "4534",
        colony: "MG colony",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pinCode: "343234"
    };

    const [addresses, setAddresses] = useState([defaultAddress]);

    const addAddress = (address) => {
        setAddresses(addresses => [...addresses, address]);
    }

    return (
        <AddressContext.Provider value={{ addresses, setAddresses, addAddress }}>
            { children }
        </AddressContext.Provider>
    )
}