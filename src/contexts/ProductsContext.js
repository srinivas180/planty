import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

import { CategoriesContext } from "./CategoriesContext";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const { categories } = useContext(CategoriesContext);
    const [showAllCategories, setShowAllCategories] = useState(true);
    let filteredProducts = [...products];
    const [isLoading, setIsLoading] = useState(true);

    const [filters, setFilters] = useState({
        searchQuery: null,
        categoriesCheckedState: categories.map(() => false),
        rating: 1,
        sortLowToHigh: false,
        sortHighToLow: false,
    });

    if (filters.searchQuery) {
        filteredProducts = filteredProducts.filter((product) =>
            product.title
                .toLowerCase()
                .includes(filters.searchQuery.toLowerCase())
        );
    }

    if (!showAllCategories) {
        filteredProducts = filters.categoriesCheckedState.reduce(
            (categoryFilteredProducts, checkedState, index) => {
                if (checkedState) {
                    return [
                        ...categoryFilteredProducts,
                        ...filteredProducts.filter(
                            (product) =>
                                product.categoryName ===
                                categories[index].categoryName
                        ),
                    ];
                }
                return categoryFilteredProducts;
            },
            []
        );
    }

    filteredProducts = filteredProducts.filter(
        (product) => product.rating >= filters.rating
    );

    if (filters.sortLowToHigh) {
        filteredProducts.sort(
            (product1, product2) => product1.price - product2.price
        );
    }

    if (filters.sortHighToLow) {
        filteredProducts.sort(
            (product1, product2) => product2.price - product1.price
        );
    }

    async function getProducts() {
        setIsLoading(true);
        try {
            const response = await fetch("/api/products");

            if (response.status === 200) {
                const json = await response.json();
                setProducts(json.products);
            }
        } catch (error) {
            console.error(error);
            toast.error("Some error occurred. Fetching products failed.", {
                position: "bottom-right",
            });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setFilters((filters) => ({
            ...filters,
            categoriesCheckedState: categories.map(() => false),
        }));
    }, [categories]);

    useEffect(() => {
        setShowAllCategories(
            !filters.categoriesCheckedState?.find((state) => state)
        );
    }, [filters, showAllCategories]);

    return (
        <ProductsContext.Provider
            value={{
                products,
                filters,
                filteredProducts,
                setFilters,
                isLoading,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}
