import "../styles/Content.css";
function Content(){
    return (
        <div class="container">
            <div class="product-grid">
                <div class="card stacked featured">
                    <div class="card_content">
                        <h2 class="card_title">Discover our Tempting baked Crossants</h2>
                        <p class="card_description">Our bakery offers a wide range of freshly baked goods, made with love.</p>
                        <button className="expo">Order Now <span class="arrow">›</span> </button>
                    </div>
                    <img src={require("../assets/GarlicRolls-blog-26-500x500.jpg")} alt="garlic bread"></img>
                </div>
                <div class="card stacked small-featured">
                    <div class="card_content">
                        <h2 class="card_title">Treat Yourself to Our Mouthwatering Cupcakes</h2>
                        <p class="card_description">Choose from a variety of flavors and toppings for the perfect bite-sized indulgence.</p>
                        <button className="expo">Order Now <span class="arrow">›</span></button>
                    </div>
                    <img src={require("../assets/Ham-and-Cheese-Sandwich-with-Tomatoes-and-Green-Salad.jpg")} alt="garlic bread"></img>
                </div>
                <div class="card stacked featured">
                    <div class="card_content">
                        <h2 class="card_title">Discover Our Freshly Baked Breads</h2>
                        <p class="card_description">From crusty baguettes to soft sandwich loaves, our breads are baked to perfection</p>
                        <button className="expo">Order Now <span class="arrow">›</span> </button>
                    </div>
                    <img src={require("../assets/cupcake.jpg")} alt="garlic bread"></img>
                </div>
                <div class="card stacked">
                    <div class="card_content last">
                        <h2 class="card_title">Explore Our Delicious Cake Selection</h2>
                        <p class="card_description">From classic flavors to unique creations, we have the perfect cake for every occasion.</p>
                        <button className="expo">Order Now <span class="arrow">›</span></button>
                    </div>
                </div>
                <div class="card stacked">
                    <div class="card_content last">
                        <h2 class="card_title">Discover Our Irresistible Desserts</h2>
                        <p class="card_description">From creamy cheesecakes to decadent chocolate treats, satisfy your sweet tooth.</p>
                        <button className="expo">Order Now <span class="arrow">›</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;