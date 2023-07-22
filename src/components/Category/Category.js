import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductsContext } from "../../contexts/ProductsContext";

import "./Category.css";

export function Category({ category, index }) {
    const { setFilters } = useContext(ProductsContext);
    const navigate = useNavigate();

    return (
        <li
            className="category__item"
            onClick={() => {
                setFilters((filters) => ({
                    ...filters,
                    categoriesCheckedState: filters.categoriesCheckedState.map(
                        (state, position) => (index == position ? true : false)
                    ),
                }));
                navigate("/products");
            }}
        >
            <div className="category__image-wrapper">
                <img
                    className="category__image"
                    src={category.imageLink}
                    alt={category.altText}
                />
            </div>
            <h3 className="category__heading">{category.categoryName}</h3>
            <p className="category__description">{category.description}</p>
        </li>
    );
}
