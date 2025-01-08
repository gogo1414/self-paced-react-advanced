import { setRestaurants } from "./RestaurantListSlice.js";

export const fetchRestaurants = () => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:3000/restaurants");
        const data = await response.json();

        if(response.status === 200) {
            dispatch(setRestaurants(data));
        } else {
            console.log("레스토랑 데이터를 조회하는데 실패했습니다.\n", response.statusText);
        }
    } catch (error) {
        alert("레스토랑 데이터를 가져오는데 문제가 발생했습니다.\n" + error);
    }
}