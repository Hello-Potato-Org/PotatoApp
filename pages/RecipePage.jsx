import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

export default function RecipePage () {
    const [recipe, setRecipe] =useState({})
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState("")
    // const [imageFile, setImageFile] =useState("")
    const params =useParams()
    const navigate = useNavigate()
    const url = `https://potato-meal-planner-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}.json`
    

    useEffect(() => {
        async function getRecipe() {
            const response = await fetch(url);
            const data = await response.json();
            setRecipe(data);
            console.log(data);
            setCaption(recipe.caption)
            setImage(recipe.image)
        }

        getRecipe();
    }, [recipe.caption, recipe.image, url])


    return (
        <>
        <TopBar/>
        <section className="page">
                    <h2>{recipe.caption}</h2>
                    <img className="image-preview" src={recipe.image} />
                    <Link to={"/editrecipe/" + params.recipeId} className="button">Edit</Link>
                    
                    
        </section>
        <NavBar/>
        </>
    );
    }
