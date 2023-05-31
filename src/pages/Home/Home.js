import { useContext } from "react";

import "./Home.css";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { Category } from "../../components/Category/Category";

export function Home() {
    const { categories } = useContext(CategoriesContext);

    return (
        <div className="container">
            <h2>Categories</h2>
            <div className="categories">
                <ul className="categories__list">
                    {
                        categories?.map(category => 
                            <Category key={category.id} category={category} />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}