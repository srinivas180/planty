import { useContext } from "react";
import { Loader } from "../../components/Spinner/Spinner";
import "./Home.css";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { Category } from "../../components/Category/Category";

export function Home() {
    const { categories } = useContext(CategoriesContext);

    return (
        
        <div className="container categories-container">
            
            <h2>Categories</h2>
            <div className="categories">
                <ul className="categories__list">
                    {
                        categories.length === 0 ? (
                            <Loader/>
                        ) : (
                            categories.map((category, index) => 
                                <Category key={category.id} category={category} index={index} />
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}