import React, { useState } from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";
import "./header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);

  };

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li className={activeLink === "/"?"active":""} onClick={() => handleLinkClick("/")}>Home</li>
            <li className={activeLink === "projects"?"active":""}onClick={() => handleLinkClick("projects")}>Projects</li>
            <li className={activeLink === "about"?"active":""} onClick={() => handleLinkClick("about")}>About me</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        {activeLink === "/" && <Home />}
        {activeLink === "projects" && <Projects />}
        {activeLink === "about" && <About />}
      </div>
    </>
  );
};

export default Header;
