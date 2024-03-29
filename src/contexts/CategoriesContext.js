import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getCategories() {
        setIsLoading(true);
        try {
            const response = await fetch("api/categories");
            if (response.status === 200) {
                const json = await response.json();
                setCategories(json.categories);
            }
        } catch (error) {
            console.error(error);
            toast.error("Some error occurred. Fetching categories failed.", {
                position: "bottom-right",
            });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories, isLoading }}>
            {children}
        </CategoriesContext.Provider>
    );
}
