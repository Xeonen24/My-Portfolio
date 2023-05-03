import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div class="footer-content">
                    <div class="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-me">About me</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © 2023
                        <a href="#">Your Name</a> | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;