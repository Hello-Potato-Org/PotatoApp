import { useNavigate } from "react-router-dom";

export default function Recipe({recipe}) {

    const navigate= useNavigate()
    function handleClick() {
        navigate(`recipes/${recipe.id}`)
    }

    return (
        <article onClick={handleClick}>
            <img src={recipe.image} alt={recipe.caption} />
            <h2>{recipe.caption}</h2>
        </article>    
        );
}