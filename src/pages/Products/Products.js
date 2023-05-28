import { useContext } from "react"

import { ProductsContext } from "../../contexts/ProductsProvider";
import { Product } from "../../components/Product/Product";

export function Products() {
    const { products } = useContext(ProductsContext);

    return (
        <div className="container">
            <h2>Products</h2>
            <div className="products">
                {
                    products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}