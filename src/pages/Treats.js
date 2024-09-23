import "../styles/Treats.css";
function Treats(){
    return(
    <div id="treat">
       <div class="container">
                <h3>Delicious</h3>
                <h2>Indulge in Our Sweet Treats</h2>
                <h3>From breads to cupcakes, we have it all.</h3>
            </div>
        <div class="cards">
            <div class="texts">
                <h3>Delicious</h3>
                <h2>Discover Our Weekly Selection of Delights</h2>
                <p>Each week, we curate a delightful assortment of breads, cupcakes, and desserts for you to 
                enjoy. Don't miss out on our special treats!</p> 
                <div><button className="exp">Explore</button><button class="arr">Order Now <span id="arr">›</span></button></div>
            </div>
            <div class="photo"><img src={require("../assets/R (2).jpeg")} alt="burger"></img></div>
        </div>
        <div class="cards">
        <div class="photo"><img src={require("../assets/R (2).jpeg")} alt="burger"></img></div>
            <div class="texts">
                <h3>Delicious</h3>
                <h2>Discover Our Weekly Selection of Delights</h2>
                <p>Each week, we curate a delightful assortment of breads, cupcakes, and desserts for you to 
                enjoy. Don't miss out on our special treats!</p> 
                <div><button className="exp">Explore</button><button class="arr">Order Now <span id="arr">›</span></button></div>
            </div>
        </div>
        <div class="cards">
            <div class="texts">
                <h3>Delicious</h3>
                <h2>Discover Our Weekly Selection of Delights</h2>
                <p>Each week, we curate a delightful assortment of breads, cupcakes, and desserts for you to 
                enjoy. Don't miss out on our special treats!</p> 
                <div><button className="exp">Explore</button><button class="arr">Order Now <span id="arr">›</span></button></div>
            </div>
            <div class="photo"><img src={require("../assets/R (2).jpeg")} alt="burger"></img></div>
        </div>
        
    </div>
    )
}
export default Treats;