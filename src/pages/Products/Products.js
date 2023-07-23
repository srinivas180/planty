import { useContext } from "react";

import { Loader } from "../../components/Spinner/Spinner";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Product } from "../../components/Product/Product";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";

import "./Products.css";
import { CategoriesContext } from "../../contexts/CategoriesContext";

export function Products() {
    const { filters, setFilters, products, filteredProducts, isLoading } =
        useContext(ProductsContext);
    const { categories } = useContext(CategoriesContext);

    return (
        <>
            {isLoading ? (
                <div className="loader">
                    <Loader />
                </div>
            ) : (
                <div className="row container">
                    <div className="filters">
                        <div className="filters__head">
                            <h2 className="filters__title">Filters</h2>
                            <button
                                className="button button--primary"
                                onClick={() =>
                                    setFilters({
                                        searchQuery: filters.searchQuery,
                                        categoriesCheckedState: categories.map(
                                            () => false
                                        ),
                                        rating: 1,
                                        sortLowToHigh: false,
                                        sortHighToLow: false,
                                    })
                                }
                            >
                                Clear Filters
                            </button>
                        </div>
                        <ProductsFilter />
                    </div>
                    <div className="products">
                        <h2>
                            Products (showing {filteredProducts.length} of{" "}
                            {products.length} plants)
                        </h2>
                        <div className="products__list">
                            {filteredProducts.length === 0
                                ? "No products available for selected filters."
                                : filteredProducts.map((product) => (
                                      <Product
                                          key={product.id}
                                          product={product}
                                      />
                                  ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
