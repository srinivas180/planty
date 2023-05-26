export function Category({category}) {
    return (
        <li className="category__item" key={category._id}>
            <img src={category.imageLink} alt={category.altText} />
            <h3>{category.categoryName}</h3>
            <p>{category.description}</p>
        </li>
    )
}