import { NavLink } from "react-router-dom";

import "./Header.css"

export function Header() {

    function Logo() {
        return (
            <div className="logo">
                <img className="logo__image" src="" width="50px" alt="" />
                <h1 className="logo__name">Planty</h1>
            </div>
        );
    }
    
    function Search() {
        return (
            <div className="search">
                <label className="search__label">
                    <input title="Search for products" className="search__input" type="search" placeholder="Search for products"/>
                </label>
            </div>
        );
    }
    
    function Nav() {
        return (
            <nav className="nav">
                <NavLink className="nav__link" to="/login">Login</NavLink>
                <NavLink className="nav__link" to="/products">Products</NavLink>
                <NavLink className="nav__link" to="/wishlist">Wishlist</NavLink>
                <NavLink className="nav__link" to="/cart">Cart</NavLink>
            </nav>
        );
    }
    
    return (
        <header className="header">
            <Logo />
            <Nav />
            <Search />
        </header>
    )
}