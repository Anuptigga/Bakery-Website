import React from "react";
import '../styles/Nav.css'
function Nav(){
    return(
        <div class="nav">
            <div class="div1"> <img class="logo" src={require("../assets/logo.png")} alt="logo" /></div>
            <div class="div2">
            <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>Products</li>
            <li>More</li>
            </ul>
        </div>
        </div>   
    )
}
export default Nav;