
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import MealPlan from "../pages/Mealplan";
import ShoppingList from "../pages/ShoppingList";
import Recipes from "../pages/Recipes";
function App() {

  return (
    <>
        <main>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/mealplan" element={<MealPlan/>} />
                <Route path="/shoppinglist" element={<ShoppingList/>} />
                <Route path="/recipes" element={<Recipes/>} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </main>
    </>
);
}

export default App;
