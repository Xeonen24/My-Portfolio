import React from 'react';
const Header = () => {
    return (
        <div className="footer">
            <footer>
                <div class="footer-content">
                    <div class="footer-section about">
                        <h2>About Me</h2>
                        <p>Write a brief description of yourself and your skills.</p>
                    </div>
                    <div class="footer-section contact">
                        <h2>Contact Me</h2>
                        <ul>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">Address</a></li>
                        </ul>
                    </div>
                    <div class="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Me</a></li>
                            <li><a href="/contact">Contact Me</a></li>
                            <li><a href="/resume">Resume</a></li>
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

export default Header;