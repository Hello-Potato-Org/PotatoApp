import { useNavigate } from "react-router-dom";

export default function Post({post}) {

    const navigate= useNavigate()
    function handleClick() {
        navigate(`posts/${post.id}`)
    }

    return (
        <article onClick={handleClick}>
            <img src={post.image} alt={post.caption} />
            <h2>{post.caption}</h2>
        </article>    
        );
}