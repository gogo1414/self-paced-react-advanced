import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {RestaurantProvider} from "./contexts/RestaurantContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RestaurantProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </RestaurantProvider>
);
