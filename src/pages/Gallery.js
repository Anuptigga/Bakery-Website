import "../styles/Gallery.css";
function Gallery(){
    return(
        <div>
            <h1>Our Bakery</h1>
            <h3>Delicious treats made with love and passion</h3>
            <div className="gallery">
                <div className="column">
                <div class="photo_box"><img class="photos" src={require("../assets/Ham-and-Cheese-Sandwich-with-Tomatoes-and-Green-Salad.jpg")} alt="something"></img></div>
                <div class="photo_box"><img class="photos" src={require("../assets/GarlicRolls-blog-26-500x500.jpg")} alt="something"></img></div>
                </div>
                <div className="column">
                <div class="photo_box"><img class="photos" src={require("../assets/OIP (2).jpeg")} alt="something"></img></div>
                <div class="photo_box"><img class="photos" src={require("../assets/OIP (6).jpeg")} alt="something"></img></div>
                
                </div>
                <div className="column">
                <div class="photo_box"><img class="photos" src={require("../assets/OIP (7).jpeg")} alt="something"></img></div>
                <div class="photo_box"><img class="photos" src={require("../assets/OIP (8).jpeg")} alt="something"></img></div>
                <div class="photo_box"><img class="photos" src={require("../assets/OIP.jpeg")} alt="something"></img></div>
                </div>   
            </div>
        </div>
    )
}
export default Gallery;