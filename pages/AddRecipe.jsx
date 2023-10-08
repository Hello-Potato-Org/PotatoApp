import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

export default function AddRecipe() {

    const [name, setName] = useState("")
    const [imageId, setImageId] = useState("")
    const [instructions, setInstructions] = useState("")
    const[servingSize, setServingSize] = useState("")
    const[categories, setCategories] = useState("")
    const navigate =useNavigate()

    async function addRecipe(event) {
        event.preventDefault()

        const newRecipe ={
            name:name,
            imageId:imageId
        }

    const url = "https://recipeservice.onrender.com/recipes"
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newRecipe)
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

            <h2>Add Recipe</h2>
            <form onSubmit={addRecipe}>


                {imageId ? (
                    <img src={imageId} className="image-preview" alt="Image Preview" />
                ) : (
                    <img
                        src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        className="image-preview"
                        alt="placeholder"
                        />
                )}

                <input 
                    type="number" 
                    placeholder="Paste an image url"
                    value={imageId} 
                    onChange={event =>setImageId(event.target.value)}>
                </input>

                <label>Recipe Name</label>
                <input 
                    type="text" 
                    required
                    placeholder="Name of the recipe"
                    value={name} 
                    onChange={event=>setName(event.target.value)}>
                </input>
                <label>Serving Size</label>
                <div className=""></div>
                <input 
                    type="button" 
                    required
                    placeholder="Name of the recipe"
                    value={servingSize} 
                    onChange={event=>setServingSize(event.target.value)}>
                </input>

                <label>Instructions</label>
                <input 
                    type="text" 
                    placeholder="Name of the recipe"
                    value={instructions} 
                    onChange={event=>setInstructions(event.target.value)}>
                </input>
  
                <button>Add Recipe</button> 
            </form>
        </section>
        <NavBar/>
        </>
    );
}
