import { Link } from 'react-router-dom'
import Potato from '../src/assets/potato-nb.png'

export default function LandingPage() {
return (
    <>
        <section className="landingPage">
          <img src={Potato}></img>
          <h1>POTATO</h1>
          <h2>SIMPLE MEAL PLAN</h2>
          <Link className="button" to="/home">Yes please</Link>
        </section>
    </>
)
}