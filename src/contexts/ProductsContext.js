import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [filters, setFilters] = useState({
        searchQuery: null,
        includeCategory: [],
        rating: -1,
        sortLowToHigh: false,
        sortHighToLow: false,
    });
    
    function applyFilters() {
        console.log("applying filters")
        let filteredProducts = [...products];
        if(filters.searchQuery) {
            filteredProducts = filteredProducts.filter(
                product => product.title.toLowerCase() === filters.searchQuery.toLowerCase()
            );
        }

        if(filters.includeCategory.length > 0) {
            filteredProducts = filters.includeCategory.reduce(
                (categoryFilteredProducts, currentCategory) => {
                    return categoryFilteredProducts.filter(product => product.categoryName === currentCategory)
                },
                filteredProducts
            );
        }

        if(filters.rating != -1) {
            filteredProducts = filteredProducts.filter(product => product.rating > filters.rating);
        }

        if(filters.sortLowToHigh) {
            filteredProducts.sort((product1, product2) => product1.price - product2.price);
        }

        if(filters.sortHighToLow) {
            filteredProducts.sort((product1, product2) => product2.price - product1.price);
        }

        return filteredProducts;
    }

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

    useEffect(() => {
        setFilteredProducts(applyFilters());
    }, [filters])

    return (
        <ProductsContext.Provider value={{ products, filteredProducts, setFilters }}>
            { children }
        </ProductsContext.Provider>
    );
}