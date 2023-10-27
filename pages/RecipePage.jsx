import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

export default function RecipePage () {
    const [recipe, setRecipe] =useState({})
    const params =useParams()
    const url = `https://potato-meal-planner-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId.json}`
    

    useEffect(() => {
        async function getRecipe() {
            const response = await fetch(url);
            const data = await response.json();
            setRecipe(data);
            console.log(data);
        }

        getRecipe();
    }, [recipe.name, recipe.imageId, url])


    return (
        <>
        <TopBar/>
        <section className="page">
                    <h2>{recipe.name}</h2>
                    <img className="image-preview" src={recipe.imageId} />
                    <Link to={"/editrecipe/" + params.recipeId} className="button">Edit</Link>
                    
                    
        </section>
        <NavBar/>
        </>
    );
    }
