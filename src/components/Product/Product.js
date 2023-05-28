import "./Product.css";

export function Product({ product }) {
    return (
        <div className="product__item">
            <img className="product__image" src={product.imageLink} />
            <h3 className="prdudct__heading">{product.title}</h3>
        </div>
    )
}