import { useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";
import { ProductsContext } from "../../contexts/ProductsContext";

export function ProductsFilter() {
    const { filters, setFilters } = useContext(ProductsContext);
    const { categories } = useContext(CategoriesContext);

    return (
        <>
            {/* Category Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">Category</h3>
                {
                    categories.map((category, clickedCategoryIndex) => (
                        <label key={category.id} className="filters__label">
                            <input
                                className="filters__input"
                                type="checkbox"
                                value={category.categoryName}
                                checked={filters.categoriesCheckedState[clickedCategoryIndex]}
                                onChange={() => setFilters(
                                    filters => (
                                        {
                                            ...filters,
                                            categoriesCheckedState: filters.categoriesCheckedState.map((state, index) => index == clickedCategoryIndex ? !state : state),
                                        }
                                    )
                                )}
                            />
                            {category.categoryName}
                        </label>
                    ))
                }
            </div>

            {/* Rating Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">Rating</h3>
                <input
                    className="filters__input input__range"
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={filters.rating}
                    onChange={
                        (event) => setFilters(
                            (filters) => (
                                {...filters, rating: event.target.value}
                            ))
                    }
                    />
            </div>

            {/* Price Sort Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">Sort By</h3>
                <label className="filters__label">
                    <input 
                        className="filters__input"
                        type="radio"
                        value="SORT_LOW_TO_HIGH"
                        name="rating"
                        checked={filters.sortLowToHigh}
                        onChange={
                            () => setFilters(
                                filters => ({...filters, sortLowToHigh: true, sortHighToLow: false}))
                        }
                    />
                    Price - Low to High
                </label>
                <label className="filters__label">
                    <input
                        className="filters__input"
                        type="radio"
                        value="SORT_HIGH_TO_LOW"
                        name="rating"
                        checked={filters.sortHighToLow}
                        onChange={
                            () => setFilters(
                                filters => ({...filters, sortHighToLow: true, sortLowToHigh:false}))
                        }
                    />
                    Price - High to Low
                </label>
            </div>
        </>
    );
}