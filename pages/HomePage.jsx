import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";


export default function HomePage() {
    return(
        <>
        <NavBar/>
        <section className="page">
        {TopBar}
        <h1>HelloPotato</h1>
        </section>
        <NavBar/>
        </>
    )
}