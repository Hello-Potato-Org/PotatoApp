import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

export default function EditRecipe() {
    console.log("EditRecipe");
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


    async function handleSubmit(event) {
        event.preventDefault();
        const recipeToUpdate = {
            caption:caption,
            image:image
        }
        
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(recipeToUpdate)
        });

        if (response.ok) {
            navigate("/recipes")
            } else {
                console.log("Something went wrong")
            }
    }

    async function deleteRecipe() {
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (response.ok) {
            navigate("/recipes")
            } else {
                console.log("Something went wrong")
            }
    }

    return (
        <>
        <TopBar/>
        <section className="page">
                    <h2>Edit Recipe</h2>
                    <form onSubmit={handleSubmit}>


                    <label>Image</label>
                        <input 
                            type="url" 
                            required
                            placeholder="Paste an image url"
                            value={image} 
                            onChange={event =>setImage(event.target.value)}>
                        </input>

                    <input 
                        type="image"
                        src={image} 
                        alt="placeholder"
                        onChange={event =>setImage(event.target.value)}>
                        </input>


                        <label>Caption</label>
                        <input 
                            type="text" 
                            required
                            placeholder="Type a caption"
                            value={caption} 
                            onChange={event=> setCaption (event.target.value)}>
                        </input>

                        <button className="button">Save</button>

                    </form>
                    <button className="button" onClick={deleteRecipe}>Delete</button>
        </section>
        <NavBar/>
        </>
    );
}