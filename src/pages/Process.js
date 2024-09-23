import "../styles/Process.css";
function Process(){
    return(
        <div>
            <h3 class="text_bold">Freshly Baked Goodness</h3>
            <h1>Our Baking Process</h1>
            <h3>Using only the freshest ingredients and traditional techniques, our bakery creates a wide
                 variety of delicious baked goods. From breads and cupcakes to custom cakes and desserts, 
                 we take pride in delivering freshly baked delights to satisfy your cravings. Learn more 
                 about our baking process and indulge in the taste of homemade goodness.</h3>

            <div className="container_process">
                <div className="item"><img src={require("../assets/stop-and-drop-healthy-sandwich.jpg")} alt="something"/>
                <h2>Delicious Assortment</h2>Experience the joy of freshly baked treats.</div>
                <div className="item"><img src={require("../assets/stop-and-drop-healthy-sandwich.jpg")} alt="something"/>
                <h2>Delicious Assortment</h2>Experience the joy of freshly baked treats.</div>
                <div className="item"><img src={require("../assets/stop-and-drop-healthy-sandwich.jpg")} alt="something"/>
                <h2>Delicious Assortment</h2>Experience the joy of freshly baked treats.</div>
            </div>
            <button className="exp">Learn More</button><button className="arr">Discover <span id="arr"> ›</span></button>
        </div>
    )
}
export default Process;