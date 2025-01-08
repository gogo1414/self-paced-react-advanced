

export const addRestaurant = () => {
    const addNewRestaurant = async (newRestaurant) => {
        try {
            const response = await fetch("http://localhost:3000/restaurants", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newRestaurant),
            });

            if (response.status === 201) {
                alert(`Successfully added`);
            }
            else {
                alert("레스토랑 데이터를 저장하는데 문제가 발생했습니다.\n" + response.status);
            }
        } catch (error) {
            alert("레스토랑 데이터를 저장하는데 문제가 발생했습니다.\n" + error);
        }
    };

    return { addNewRestaurant };
}