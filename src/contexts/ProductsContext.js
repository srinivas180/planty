import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await fetch("/api/products");

        if(response.status === 200) {
            const json = await response.json();
            setProducts(json.products);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            { children }
        </ProductsContext.Provider>
    );
}