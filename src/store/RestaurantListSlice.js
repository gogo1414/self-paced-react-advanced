import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurants: [],
};

const restaurantListSlice = createSlice({
    name: "RestaurantListState",
    initialState,
    reducers: {
        setRestaurants: (state, action) => {
            state.restaurants = action.payload;
        }

    }
});

export const {
    setRestaurants,
} = restaurantListSlice.actions;

export default restaurantListSlice.reducer;