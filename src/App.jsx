import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import { useRecoilValue } from "recoil";
import { modalState } from "./recoil/ModalState.jsx";
import { Suspense } from "react";

function App() {
  const { detail, add } = useRecoilValue(modalState);

  return (
    <>
      <Header />
      <main>
          <CategoryFilter />
          <Suspense fallback={<div>Loading...</div>}>
              <RestaurantList />
          </Suspense>
      </main>
        <aside>
            {detail && <RestaurantDetailModal />}
            {add && <AddRestaurantModal />}
        </aside>
    </>
  );
}

export default App;