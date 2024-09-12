import React from "react";
import "../styles/Menu.css";
function Menu(){
    return(
        <div className="Menu">
            <h1>Indulge in Our Sweet Treats</h1>
            <h3>From breads to cupcakes we have it all</h3>
             <div className="Menu_card">
                <div className="item_1">
                    <div class="c1">
                    <h1>Discover our Tempting baked Crossants</h1>
                    <h3>Our bakery offers a wide range of freshly baked goods, made with love.</h3>
                    </div>
                    <div class="food">
                        <img src={require("../assets/OIP (8).jpg")} alt="croissant"/>
                    </div>
                </div>
                <div className="item_2">
                    <div>
                        <img src={require("../assets/cupcakes.jpeg")} alt="cupcakes"/>
                    </div>
                    <div><h2>Treat Yourself to Our Mouthwatering Cupcakes</h2>
                    Choose from a variety of flavors and toppings for the perfect bite-sized indulgence.
                    </div>
                    
                </div>
                <div className="item_3">
                    <div>
                    <h1>Discover Our Freshly Baked Breads</h1>
                    <h3>From crusty baguettes to soft sandwich loaves, our breads are baked to perfection</h3>
                    </div>
                    <div class="food">
                        <img src={require("../assets/bread.jpg")} alt="bread"/>
                    </div>
                </div>
                <div className="item_4"><h2>Explore Our Delicious Cake Selection</h2>
                From classic flavors to unique creations, we have the perfect cake for every occasion.<br></br>
                <img class="down" src={require("../assets/OIP (2).jpeg")} alt="cakes"></img></div>
                
                <div className="item_5"><h2>Discover Our Irresistible Desserts</h2>
                From creamy cheesecakes to decadent chocolate treats, satisfy your sweet tooth.<br></br>
                <img class="down" src={require("../assets/R (1).jpg")} alt="desserts"></img></div>
             </div>
        </div>
    )
}
export default Menu;