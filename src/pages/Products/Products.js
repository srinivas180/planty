import { useContext } from "react"

import { ProductsContext } from "../../contexts/ProductsContext";
import { Product } from "../../components/Product/Product";

import "./Products.css"

function CategoryFilter() {
    return (
        <div className="filters__container">
            <h3 className="filters__heading">Category</h3>
            <label className="filters__label">
                <input className="filters__input" type="checkbox"/>
                Indoor Plants
            </label>
            <label className="filters__label">
                <input className="filters__input" type="checkbox"/>
                Outdoor Plants
            </label>
            <label className="filters__label">
                <input className="filters__input" type="checkbox"/>
                Air Purifier Plants
            </label>
            <label className="filters__label">
                <input className="filters__input" type="checkbox"/>
                Mosquito Repellent Plants
            </label>
            <label className="filters__label">
                <input className="filters__input" type="checkbox"/>
                Bonsai Plants
            </label>
        </div>
    );
}

function RatingFilter() {
    return (
        <div className="filters__container">
            <h3 className="filters__heading">Rating</h3>
            <input className="filters__input input__range" type="range" min="1" max="5" step="1" defaultValue="3"/>
        </div>
    );
}

function PriceSortFilter() {
    return (
        <div className="filters__container">
            <h3 className="filters__heading">Sort By</h3>
            <label className="filters__label">
                <input className="filters__input" type="radio" name="rating"/>
                Price - Low to High
            </label>
            <label className="filters__label">
                <input className="filters__input" type="radio" name="rating"/>
                Price - High to Low
            </label>
        </div>
    );
}

export function Products() {
    const { products } = useContext(ProductsContext);

    return (
        <div className="row container">
            <div className="filters">
                <h2>Filters</h2>
                <CategoryFilter />
                <RatingFilter />
                <PriceSortFilter />
            </div>
            <div className="products">
                <h2>Products</h2>
                <div className="products__list">
                    {
                        products.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}