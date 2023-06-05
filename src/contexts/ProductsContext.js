import { createContext, useState, useEffect, useContext } from "react";
import { CategoriesContext } from "./CategoriesContext";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { categories } = useContext(CategoriesContext);
    const [showAllCategories, setShowAllCategories] = useState(true);

    const [filters, setFilters] = useState({
        searchQuery: null,
        categoriesCheckedState: categories.map(() => false),
        rating: 1,
        sortLowToHigh: false,
        sortHighToLow: false,
    });
    
    function applyFilters() {
        let filteredProducts = [...products];
        if(filters.searchQuery) {
            filteredProducts = filteredProducts.filter(
                product => product.title.toLowerCase() === filters.searchQuery.toLowerCase()
            );
        }

        if(!showAllCategories) {
            console.log(filteredProducts)
            filteredProducts = filters.categoriesCheckedState.reduce(
                (categoryFilteredProducts, checkedState, index) => {
                    if(checkedState) {
                        return [...categoryFilteredProducts, ...filteredProducts.filter(product => product.categoryName === categories[index].categoryName)];
                    }
                    return categoryFilteredProducts;
                }, []
            );
        }

        filteredProducts = filteredProducts.filter(product => product.rating >= filters.rating);

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
        setFilters(filters => ({...filters, categoriesCheckedState: categories.map(() => false)}))
    }, [categories])

    useEffect(() => {
        setFilteredProducts(applyFilters());

        setShowAllCategories(!filters.categoriesCheckedState?.find(state => state))
    }, [filters, showAllCategories])

    return (
        <ProductsContext.Provider value={{ products, filters, filteredProducts, setFilters }}>
            { children }
        </ProductsContext.Provider>
    );
}