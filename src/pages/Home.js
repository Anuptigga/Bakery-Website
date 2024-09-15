import React from "react";
import "../styles/Home.css";
function Home(){
    return(
        <div className="home">
            <div className="hero"><h1>Freshly baked goods that satisfy your cravings</h1>
            <p>Indulge in our delicious breads, cupcakes, and cakes, made with love and care.<br/> Experience the joy of homemade desserts like never before.</p>
            <div className="action"><button id="expo">Explore</button>
            <button id="order">Order Now</button></div>
            </div>
        </div>
    ) 
}
export default Home;