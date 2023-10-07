import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";


export default function HomePage() {
    return(
        <>
        <TopBar/>
        <section className="page">
        <h1>Hey you!</h1>
        <h3>What do you want to cook today?</h3>
        </section>
        <NavBar/>
        </>
    )
}