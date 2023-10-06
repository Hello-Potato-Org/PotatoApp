import { useNavigate } from "react-router-dom";

export default function Commodity({commodity}) {

    const navigate= useNavigate()
    function handleClick() {
        navigate(`commodities/${commodity.id}`)
    }

    return (
        <article onClick={handleClick}>
            <h2>{commodity.commodityId}</h2>
            <h2>{commodity.name}</h2>
            <h2>{commodity.Category}</h2>
            <h2>{commodity.Description}</h2>
        </article>    
        );
}