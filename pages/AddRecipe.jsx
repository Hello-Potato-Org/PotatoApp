import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Placeholder from "../src/assets/placeholder-image.png"

export default function AddRecipe(recipe) {

    const [name, setName] = useState("")
    const [imageId, setImageId] = useState("")
    const [imageBytea, setImageBytea] = useState("")
    // const [instructions, setInstructions] = useState("")
    // const[servingSize, setServingSize] = useState("")
    // const[categories, setCategories] = useState("")
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        if (recipe) {
            setName(recipe.name);
            setImageId(recipe.imageId);
        }
    }, [recipe]);


    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file.size < 200000) {
            // image file size must be below 0,5MB
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = event => {
                setImageBytea(event.target.result);
            };
            setErrorMessage(""); // reset errorMessage state
        } else {
            // if not below 2MB display an error message using the errorMessage state
            setErrorMessage("The image file is too big!");
        }
    }

    async function submitRecipe(event) {
        event.preventDefault()


        async function submitImage(event) {
            event.preventDefault()

            const newImage = {
                imageBytea: imageBytea

            }
            const url = "https://recipeservice.onrender.com/images"
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(newImage)
            })
            console.log(response)

            
        }

        const newImageId = submitImage()

        const newRecipe = {
            name: name,
            imageId: newImageId
        }

        const url = "https://recipeservice.onrender.com/recipes"
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newRecipe)
        })

        if (response.ok) {
            navigate("/recipes")
        } else {
            console.log("Something went wrong")
        }
    }

    return (
        <>
            <TopBar />
            <section className="page">

                <h2>Add Recipe</h2>
                <form onSubmit={submitRecipe}>

                    <label>
                        <input
                            type="file"
                            className="file-input"
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                        <img
                            className="image-preview"
                            src={Placeholder}
                            alt="Choose"
                            onError={event => (event.target.src = Placeholder)}
                        />
                    </label>

                    <label>Recipe Name</label>
                    <input
                        type="text"
                        required
                        placeholder="Name of the recipe"
                        value={name}
                        onChange={event => setName(event.target.value)}>
                    </input>

                    {/* /* <label>Serving Size</label>
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
                </input> */}

                    <p className="text-error">{errorMessage}</p>
                    <button>Add Recipe</button>
                </form>
            </section>
            <NavBar />
        </>
    )
};
