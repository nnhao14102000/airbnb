import React from "react";
// import airbnbGrid from "../images/airbnb-grid.png";

export default function Hero() {
    
    return (
        <section className="hero">
            {/* <img src={airbnbGrid} className="hero--photo"/> */}
            <img src={process.env.PUBLIC_URL+"images/airbnb-grid.png"} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}