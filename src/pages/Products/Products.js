import { useContext } from "react"

import { ProductsContext } from "../../contexts/ProductsProvider";
import { Product } from "../../components/Product/Product";

import "./Products.css"

function CategoryFilter() {
    return (
        <div className="filters__category">
            <h3 className="filters__heading">Category</h3>
            <label className="category__label">
                <input className="category__input" type="checkbox"/>
                Indoor Plants
            </label>
            <label className="category__label">
                <input className="category__input" type="checkbox"/>
                Outdoor Plants
            </label>
            <label className="category__label">
                <input className="category__input" type="checkbox"/>
                Air Purifier Plants
            </label>
            <label className="category__label">
                <input className="category__input" type="checkbox"/>
                Mosquito Repellent Plants
            </label>
            <label className="category__label">
                <input className="category__input" type="checkbox"/>
                Bonsai Plants
            </label>
        </div>
    );
}

export function Products() {
    const { products } = useContext(ProductsContext);

    return (
        <div className="row container">
            <div class="filters">
                <h2>Filters</h2>
                <CategoryFilter />

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