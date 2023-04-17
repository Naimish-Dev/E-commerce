import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterContextProvider } from "./context/FilterContext";
import { ProductProvider } from "./context/ProductContext"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import { AddtoCartContext } from "./context/AddtoCartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  
    <ProductProvider>
      <FilterContextProvider>
        <AddtoCartContext>
          <App />
        </AddtoCartContext>
      </FilterContextProvider>
    </ProductProvider>
);

// i need Product in side of ProductProvider so this is hire order 
