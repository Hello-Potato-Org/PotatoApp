import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

export default function EditRecipe() {
    console.log("EditRecipe");
    const [recipe, setRecipe] =useState({})
    const [name, setName] = useState("")
    const [imageId, setImageId] = useState("")
    // const [imageFile, setImageFile] =useState("")
    const params =useParams()
    const navigate = useNavigate()
    const url = `https://recipeservice.onrender.com/recipes/${params.recipeId}`
    

    useEffect(() => {
        async function getRecipe() {
            const response = await fetch(url);
            const data = await response.json();
            setRecipe(data);
            console.log(data);
            setName(recipe.name)
            setImageId(recipe.imageId)
        }

        getRecipe();
    }, [recipe.name, recipe.imageId, url])


    async function handleSubmit(event) {
        event.preventDefault();
        const recipeToUpdate = {
            name:name,
            imageId:imageId
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
                            type="number" 
                            required
                            placeholder="Paste an image url"
                            value={imageId} 
                            onChange={event =>setImageId(event.target.value)}>
                        </input>

                    <input 
                        type="image"
                        src={imageId} 
                        alt="placeholder"
                        onChange={event =>setImageId(event.target.value)}>
                        </input>


                        <label>Recipe Name</label>
                        <input 
                            type="text" 
                            required
                            placeholder="Type a name"
                            value={name} 
                            onChange={event=> setName (event.target.value)}>
                        </input>

                        <button className="button">Save</button>

                    </form>
                    <button className="button" onClick={deleteRecipe}>Delete</button>
        </section>
        <NavBar/>
        </>
    );
}