import "./Category.css"

export function Category({category}) {
    return (
        <li className="category__item" >
            <img className="category__image" src={category.imageLink} alt={category.altText} />
            <h3 className="category__heading">{category.categoryName}</h3>
            <p className="category__description">{category.description}</p>
        </li>
    )
}