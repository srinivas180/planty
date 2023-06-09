import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { CategoriesProvider } from "./contexts/CategoriesContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AddressProvider } from "./contexts/AddressContext";

// Call make Server
makeServer();

ReactDOM.render(
    <Router>
      <AuthProvider>
        <AddressProvider>
          <WishlistProvider>
            <CartProvider>
              <CategoriesProvider>
                <ProductsProvider>
                  <App />
                </ProductsProvider>
              </CategoriesProvider>
            </CartProvider>
          </WishlistProvider>
        </AddressProvider>
      </AuthProvider>
    </Router>,
  document.getElementById("root")
);
