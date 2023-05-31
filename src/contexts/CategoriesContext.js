import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
    const [categories, setCategories] = useState([]);
    async function getCategories() {
        const response = await fetch('api/categories');
        if(response.status === 200) {
            const json = await response.json();
            setCategories(json.categories)
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <CategoriesContext.Provider value={{categories}}>
            { children }
        </CategoriesContext.Provider>
    );
}