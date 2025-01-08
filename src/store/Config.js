import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./ModalSlice.js";
import categoryReducer from "./CategorySlice.js";
import restaurantListSlice from "./RestaurantListSlice.js";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        category: categoryReducer,
        restaurants: restaurantListSlice,
    },
});

export default store;