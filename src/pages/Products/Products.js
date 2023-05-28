import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsProvider"

export function Products() {
    const { products } = useContext(ProductsContext);

    return (
        <div className="container">
            <h2>Products</h2>
            <div className="products">
                {
                    products.map(product => (
                        <div className="product">
                            <img className="product__image" src={product.imageLink} />
                            <h3 className="prdudct__heading">{product.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}