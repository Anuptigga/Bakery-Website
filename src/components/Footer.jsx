import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
        <div>
            <div id="footer">
            {/* Logo Section */}
            <div className="footer-logo">
                <a href="h.html">
                    <img src={require("../assets/bakery-logo.avif")} alt="logo" className="logo_bottom" />
                </a>
            </div>
            
            {/* Navigation Links */}
            <div className="footer-links">
                <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="faqs.html">FAQs</a></li>
                    <li><a href="shop.html">Shop</a></li>
                </ul>
            </div>
            
            {/* Social Media Icons */}
            <div className="footer-social">
                <ul>
                    <li><a href="facebook.html">face</a></li>
                    <li><a href="instagram.html">insta</a></li>
                    <li><a href="twitter.html">tueb</a></li>
                    <li><a href="linkedin.html">twit</a></li>
                    <li><a href="youtube.html">lnkd</a></li>
                </ul>
            </div>
        </div>
        <hr/>
        <div id="cpyright">
            <p>© 2024 Relume. All rights reserved.</p>
            <p>Privacy Policiy</p>
            <p>Terms and Conditions</p>
            <p>Cookie Policy</p>
        </div>
        </div>
    );
}

export default Footer;
