import { Link } from "react-router-dom";
import Potato from '../src/assets/potato-nb.png'

export default function TopBar () {
return (
        <Link className="logoLink" to="/home">
                <img src={Potato}></img>
                <p>POTATO</p>
        </Link>
)
}