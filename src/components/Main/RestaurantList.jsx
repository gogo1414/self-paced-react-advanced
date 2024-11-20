import RestaurantItem from './RestaurantItem.jsx';
import styled from "styled-components";

const RESTAURANT_LIST_CONTAINER = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 16px 0;
`;

function RestaurantList( { restaurants, onChangeDetailModal } ) {
    return (
        <RESTAURANT_LIST_CONTAINER>
            <ul>
                {restaurants.map((restaurant) => (
                    <RestaurantItem 
                        key={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        category={restaurant.category}
                        alt={restaurant.alt}
                        onClick={() => onChangeDetailModal(restaurant.name, restaurant.description)}
                    />
                ))}
            </ul>
        </RESTAURANT_LIST_CONTAINER>
    );
}

export default RestaurantList;