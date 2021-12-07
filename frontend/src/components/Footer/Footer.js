import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerTop">
                <div className="left">
                    <h3>ADDRESS</h3>
                    <p>The Company Name Inc.<br/>8901 Marmora Road,<br/>Glasgow, D04 89GR.</p>
                </div>
                <div className="center">
                    <h3>FOLLOW US</h3>
                    <ul>
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-google-plus-g"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                        <li><i class="fab fa-pinterest"></i></li>
                    </ul>
                </div>
                <div className="right">
                    <h3>CONTACT US</h3>
                    <p>+1 800 603 6035<br/>+1 800 603 6035<br/>mail@demolink.org</p>
                </div>
            </div>
            <div className="footerBottom">
                <div className="left">
                    <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/logo.png" alt="logo"/>
                    <small>Copyright © 2019. All Rights Reserved</small>
                </div>
                <div className="right">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/menu">MENU</Link></li>
                        <li><Link to="/gallery">GALLERY</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
