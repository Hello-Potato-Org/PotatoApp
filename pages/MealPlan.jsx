import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import Potato from '../src/assets/potato-nb.png'

export default function MealPlan() {
    return(
        <>
        <TopBar/>
        <section className="page">
        <h1>Meal Plan</h1>
        <section className="mealplan-grid">
           <div className="weekday-container">
            <h2>MONDAY</h2>
            <img src={Potato} />
           
           </div> 
           <div className="weekday">hello</div> 
           <div className="weekday">hello</div> 
           <div className="weekday">hello</div> 
           <div className="weekday">hello</div> 
           <div className="weekday">hello</div> 
           <div className="weekday">hello</div> 

    </section>
        </section>
        <NavBar />
        </>
    )
}
