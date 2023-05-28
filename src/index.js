import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { CategoriesProvider } from "./contexts/CategoriesProvider";
import { ProductsProvider } from "./contexts/ProductsProvider";

// Call make Server
makeServer();

ReactDOM.render(
    <Router>
      <ProductsProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </ProductsProvider>
    </Router>,
  document.getElementById("root")
);
