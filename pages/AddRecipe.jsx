import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

export default function AddRecipe() {

    const [caption, setCaption] = useState("")
    const [image, setImage] = useState("")
    const navigate =useNavigate()

    async function addRecipe(event) {
        event.preventDefault()

        const newRecipe ={
            caption:caption,
            image:image,
            uid: "ZfPTVEMQKf9vhNiUh0bj"
        }

    const url = "https://potato-meal-planner-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
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

            <h1>Add Recipe</h1>
            <form onSubmit={addRecipe}>

                <label>Caption</label>
                <input 
                    type="text" 
                    required
                    placeholder="Type a caption"
                    value={caption} 
                    onChange={event=>setCaption(event.target.value)}>
                </input>

                <label>Image</label>
                <input 
                    type="url" 
                    required
                    placeholder="Paste an image url"
                    value={image} 
                    onChange={event =>setImage(event.target.value)}>
                </input>

                {image ? (
                    <img src={image} className="image-preview" alt="Image Preview" />
                ) : (
                    <img
                        src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        className="image-preview"
                        alt="placeholder"
                        />
                )}
   
                <button>Save</button> 
            </form>
        </section>
        <NavBar/>
        </>
    );
}
