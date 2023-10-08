import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Recipe from "../components/RecipeCard";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";

export default function Recipes() {
const[recipes, setRecipes] =useState([]);

useEffect(() => {
    async function getRecipes() {
        const url = "https://recipeservice.onrender.com/recipes";
        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = Object.keys(data).map(key => ({ id: key, ...data[key]}));
        setRecipes(recipesArray);
    }
    getRecipes();

}, []);

return (
    <>
    <TopBar/>
    <section className="page">
        <h1>Recipes</h1>
    <section className="recipe-grid">
        {recipes.map(recipe => (
            <Recipe recipe={recipe} key={recipe.id} />
        ))}
    </section>
    </section>
    <div className="buttonContainer">
    <Link className="addRecipeButton" to="/addrecipe">Add recipe</Link>
    </div>
    <NavBar/>
    </>
);
}