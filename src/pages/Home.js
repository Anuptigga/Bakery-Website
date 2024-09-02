import React from "react";
import Nav from "../components/Nav"
import "../styles/Home.css"
function Home(){
    return(
        <body>
            <Nav></Nav>
            <div class="hero"><h1>Freshly baked goods that satisfy your cravings</h1>
            <p>Indulge in our delicious breads, cupcakes, and cakes, made with love and care.<br/> Experience the joy of homemade desserts like never before.</p>
            <div class="action"><button class="btn1">Explore</button>
            <button class="btn2">Order Now</button></div>
            
            </div>
        </body>
    ) 
}
export default Home;