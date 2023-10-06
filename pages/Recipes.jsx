import NavBar from "../components/NavBar";

export default function Recipes() {
const[posts, setPosts] =useState([]);

useEffect(() => {
    async function getPosts() {
        const url = "https://potato-meal-planner-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
        const response = await fetch(url);
        const data = await response.json();
        const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key]}));
        setPosts(postsArray);
    }
    getPosts();

}, []);

return (
    <section className="page">
        <h1>Home</h1>
    <section className="grid">
        {posts.map(post => (
            <Post post={post} key={post.id} />
        ))}
    </section>
    <NavBar/>
    </section>
);
}

export default function Recipes() {
    return (
        <>
        <section className="page">
        <h1>Recipes</h1>
        </section>
        <NavBar/>
        </>
    )
}