import { Link } from "react-router-dom";
import Potato from '../src/assets/potato-nb.png'

export default function TopBar () {

<Link className="logoLink" to="/home">
        <img src={Potato}></img>
        <p>POTATO</p>
        </Link>

}