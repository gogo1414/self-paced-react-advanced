import { atom } from 'recoil';
import {getRestaurantsSelector} from "./GetRestaurantsSelector.jsx";

export const restaurantListState = atom({
    key: 'restaurantListState',
    default: getRestaurantsSelector,
});
