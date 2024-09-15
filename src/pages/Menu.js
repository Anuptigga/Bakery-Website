import React from "react";
import "../styles/Menu.css";
function Menu(){
    return(
        <div class="container">
            <div class="items item_1">
                Freshly
                <h2>Discover Our Tempting Selection of Baked Goods</h2>
                <p>Our bakery offers a wide range of freshly baked goods, made with love</p>
                <img src={require("../assets/GarlicRolls-blog-26-500x500.jpg")} alt="Freshly Baked Bread"/>
            </div>
            <div class="items item_2">
                <img src={require("../assets/Ham-and-Cheese-Sandwich-with-Tomatoes-and-Green-Salad.jpg")} alt="Bread on Table"/>
                <div><h2>Treat Yourself to Our Mouthwatering Cupcakes</h2>
                <p>Choose from a variety of flavors and toppings for the perfect bite-sized indulgence.</p></div>
            </div>
            <div class="items item_3">
                <h2>Discover Our Freshly Baked Breads</h2>
                <p>From crusty baguettes to soft sandwich loaves, our breads are baked to perfection.</p>
                <img src={require("../assets/OIP (7).jpeg")} alt="Variety of Breads"/>
            </div>
            <div class="items item_4">
                <h2>Artisan Cakes</h2>
                <p>Our cakes are handcrafted with the finest ingredients. Perfect for every occasion!</p>
                <img src={require("../assets/OIP (8).jpeg")} alt="Artisan Cake"/>
            </div>
            <div class="items item_5">
                <h2>Special Pastries</h2>
                <p>Indulge in our assortment of pastries, each one baked to perfection.</p>
                <img src={require("../assets/cupcake.jpg")} alt="Special Pastries"/>
            </div>
        </div>
    )
}
export default Menu;