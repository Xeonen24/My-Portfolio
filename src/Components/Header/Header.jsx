import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;