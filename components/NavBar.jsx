import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            {/* <NavLink to="/home">Home</NavLink> */}
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/mealplan">Meal Plan</NavLink>
            <NavLink to="/shoppinglist">Shopping List</NavLink>
        </nav>
    );
}
