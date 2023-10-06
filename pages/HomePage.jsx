import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";


export default function HomePage() {
    return(
        <>
        <TopBar/>
        <section className="page">
        <h1>HelloPotato</h1>
        </section>
        <NavBar/>
        </>
    )
}