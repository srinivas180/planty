import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { ProductsContext } from "../../contexts/ProductsContext";
import { AuthContext } from "../../contexts/AuthContext";

import "./Header.css"

export function Header() {
    const { setFilters } = useContext(ProductsContext);
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="logo">
                <img className="logo__image" src="" width="50px" alt="" />
                <h1 className="logo__name">Planty</h1>
            </div>
            <nav className="nav">
                <NavLink className="nav__link" to="/products">Products</NavLink>
                <NavLink className="nav__link" to="/wishlist">Wishlist</NavLink>
                <NavLink className="nav__link" to="/cart">Cart</NavLink>
                {
                    isLoggedIn ? (
                        <NavLink className="nav__link" to="/profile">Profile</NavLink>
                    ) : (
                        <NavLink className="nav__link" to="/login">Login</NavLink>
                    )
                }
            </nav>

            <div className="search">
                <label className="search__label">
                    <input
                        title="Search for products"
                        className="search__input"
                        type="search"
                        placeholder="Search for products"
                        onChange={(event) => setFilters(filters => (
                            {
                                ...filters,
                                searchQuery: event.target.value,
                            }
                        ))}
                    />
                </label>
            </div>
        </header>
    )
}