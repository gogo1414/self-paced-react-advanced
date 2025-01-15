// import {setRestaurants} from "../store/RestaurantListSlice.js";
//
// export const addRestaurant = (newRestaurant) => async (dispatch, getState) => {
//     try {
//         const response = await fetch("http://localhost:3000/restaurants", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newRestaurant),
//         });
//
//         if (response.status === 201) {
//             const addedRestaurant = await response.json();
//             const currentRestaurant = getState().restaurants.restaurants;
//             const updatedRestaurant = [...currentRestaurant, addedRestaurant];
//             dispatch(setRestaurants(updatedRestaurant));
//         }
//         else {
//             alert("레스토랑 데이터 저장에 실패했습니다.\n" + response.status);
//         }
//     } catch (error) {
//         alert("레스토랑 데이터를 저장하는데 문제가 발생했습니다.\n" + error);
//     }
// };