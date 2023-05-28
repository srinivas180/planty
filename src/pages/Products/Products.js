import { useContext } from "react"

import { ProductsContext } from "../../contexts/ProductsProvider";
import { Product } from "../../components/Product/Product";

import "./Products.css"

export function Products() {
    const { products } = useContext(ProductsContext);

    return (
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
    )
}