import React from "react";
// import airBnbLogo from "../images/airbnb-logo.png";

export default function Navbar(){
    return (
        <nav>
            {/* <img src={airBnbLogo} className="nav--logo"/> */}
            <img src={process.env.PUBLIC_URL+"images/airbnb-logo.png"} className="nav--logo"/>
        </nav>
    )
}