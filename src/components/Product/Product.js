export function Product({ product }) {
    return (
        <div className="product">
            <img className="product__image" src={product.imageLink} />
            <h3 className="prdudct__heading">{product.title}</h3>
        </div>
    )
}