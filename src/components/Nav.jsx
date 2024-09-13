import React from "react";
import '../styles/Nav.css'
function Nav(){
    return(
        <div id="header">
            <a href="h.html"><img class="logo" src={require("../assets/bakery-logo3.png")} alt="logo" /></a>
            <div>
            <ul id="nav">
            <li><a className="active" href="about.html">Home</a></li>
            <li><a href="about.html">Contact</a></li>
            <li><a href="about.html">Products</a></li>
            <li><a href="about.html">More</a></li>
            </ul>
        </div>
        </div>   
    )
}
export default Nav;