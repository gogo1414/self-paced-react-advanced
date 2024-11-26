import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import { useState } from "react";
import { useRestaurants } from "./hooks/useRestaurants.js";
import { v4 as uuidv4 } from 'uuid';
import {RestaurantProvider} from "./contexts/RestaurantContext.jsx";

function App() {
  const { restaurants, addRestaurant } = useRestaurants();
  const [ clickedRestaurantItem, setClickedRestaurantItem ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    detail: false,
    add: false,
  });

  const toggleModal = (modalType, isOpen, detailData = null, event = null) => {
    setIsModalOpen((prev) => ({ ...prev, [modalType]: isOpen }));

    if (modalType === "detail" && isOpen && detailData) {
      setClickedRestaurantItem(detailData);
    } else if (modalType === "add" && !isOpen && event) {
      addRestaurant({
        id: uuidv4(),
        name: event.name,
        description: event.description,
        category: event.category
      });
    }
  };

  return (
    <RestaurantProvider>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {isModalOpen.detail && 
          <RestaurantDetailModal
            restaurant={clickedRestaurantItem} 
            onChangeDetailModal={() => toggleModal("detail", false)}
          />
        }
        {isModalOpen.add && 
          <AddRestaurantModal
            onFormSubmit={(event) => toggleModal("add", false, null, event)}
            onChangeAddModal={() => toggleModal("add", false)}
          />
        }
      </aside>
    </RestaurantProvider>
  );
}

export default App;
