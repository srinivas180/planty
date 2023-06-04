import { useContext } from "react"

import { ProductsContext } from "../../contexts/ProductsContext";
import { Product } from "../../components/Product/Product";
import { CategoriesContext } from "../../contexts/CategoriesContext";

import "./Products.css"

export function Products() {
    const { products, setFilters, filteredProducts } = useContext(ProductsContext);
    const { categories } = useContext(CategoriesContext);

    function CategoryFilter() {
        return (
            <div className="filters__container">
                <h3 className="filters__heading">Category</h3>
                {
                    categories.map(category => (
                        <label className="filters__label">
                            <input className="filters__input" type="checkbox"/>
                            {category.categoryName}
                        </label>
                    ))
                }
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
                    <input 
                        className="filters__input"
                        type="radio"
                        value="SORT_LOW_TO_HIGH"
                        name="rating"
                        onClick={
                            () => setFilters(
                                filters => ({...filters, sortLowToHigh: true, sortHighToLow: false}))
                        }
                    />
                    Price - Low to High
                </label>
                <label className="filters__label">
                    <input
                        className="filters__input"
                        type="radio"
                        value="SORT_HIGH_TO_LOW"
                        name="rating"
                        onClick={
                            () => setFilters(
                                filters => ({...filters, sortHighToLow: true, sortLowToHigh:false}))
                        }
                    />
                    Price - High to Low
                </label>
            </div>
        );
    }

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
                        ((filteredProducts.length == 0) ? products : filteredProducts).map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}