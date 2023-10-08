import { useNavigate } from "react-router-dom";

export default function Recipe({recipe}) {

    const navigate= useNavigate()
    function handleClick() {
        
        console.log(recipe.id);
        navigate(`/recipepage/${recipe.id}`)
    }

    return (
        <article onClick={handleClick}>
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
        </article>    
        );
}