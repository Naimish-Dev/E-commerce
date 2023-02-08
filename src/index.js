import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterContextProvider } from "./context/FilterContext";
import { ProductProvider } from "./context/ProductContext"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import { AddtoCartContext } from "./context/AddtoCartContext";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
     <Auth0Provider
        domain="dev-ov5e8zgk32b3b8bd.us.auth0.com"
        clientId="q81I39wGjyLChudK03U3vpepzdfMQn0j"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ProductProvider>
        <FilterContextProvider>
        <AddtoCartContext>
        <App />
        </AddtoCartContext>
        </FilterContextProvider>
    </ProductProvider>
    </Auth0Provider>
);

// i need Product in side of ProductProvider so this is hire order 
