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

// Call make Server
makeServer();

ReactDOM.render(
    <Router>
      <WishlistProvider>
        <CartProvider>
          <ProductsProvider>
            <CategoriesProvider>
              <App />
            </CategoriesProvider>
          </ProductsProvider>
        </CartProvider>
      </WishlistProvider>
    </Router>,
  document.getElementById("root")
);
