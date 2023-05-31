export function CartItem({ item }) {
    return (
        <div className="cart-item">
            <img className="cart-item__image" src={item.imageLink} alt={item.altText}/>
            <h2 className="cart-item__heading">{item.title}</h2>
            <p>Category: {item.categoryName}</p>
            <button>Remove Item</button>
            <button>Move to Wishlist</button>
            <p>₹{item.price}</p>
        </div>
    )
}