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
                        <li><Link to="https://github.com/Xeonen24" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
                       <li><Link to="https://www.linkedin.com/in/alpesh-pote-9aa9961b5/" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
                      <li><Link to="mailto:captainsparkelz32@gmail.com" target="_blank" rel="noopener noreferrer">Email-Me</Link></li>
                    </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © 2023
                        <a href="#">Alpesh Pote</a> | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;