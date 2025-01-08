import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice.js";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
});

export default store;