import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Commodity from "../components/Commodity";

export default function Commodities() {
const[commodities, setCommodities] =useState([]);

useEffect(() => {
    async function getCommodities() {
        const url = "https://commodityservice.onrender.com/commodity";
        const response = await fetch(url);
        const data = await response.json();
        const commoditiesArray = Object.keys(data).map(key => ({ id: key, ...data[key]}));
        setCommodities(commoditiesArray);
    }
    getCommodities();

}, []);

return (
    <section className="page">
        <h1>Home</h1>
    <section className="grid">
        {commodities.map(commodity => (
            <Commodity commodity={commodity} key={commodity.id} />
        ))}
    </section>
    <NavBar/>
    </section>
);
}