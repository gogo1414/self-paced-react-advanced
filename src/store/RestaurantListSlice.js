import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async (unused, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3000/restaurants");
            const data = await response.json();

            if(response.ok) {
                return data;
            } else {
                return rejectWithValue(response.statusText);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    restaurants: [],
    status: 'idle',
    error: null,
};

const restaurantListSlice = createSlice({
    name: "RestaurantListState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.restaurants = action.payload;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || '데이터를 가져오는 중 문제가 발생했습니다.';
            });
    },
});

export default restaurantListSlice.reducer;