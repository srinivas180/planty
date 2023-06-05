import { useContext } from "react"

import { ProductsContext } from "../../contexts/ProductsContext";
import { Product } from "../../components/Product/Product";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";

import "./Products.css"

export function Products() {
    const { filteredProducts } = useContext(ProductsContext);

    return (
        <div className="row container">
            <div className="filters">
                <div className="filters__head">
                    <h2 className="filters__title">Filters</h2>
                    <button className="button--primary">Clear Filters</button>
                </div>
                <ProductsFilter />
            </div>
            <div className="products">
                <h2>Products</h2>
                <div className="products__list">
                    {
                        filteredProducts.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}