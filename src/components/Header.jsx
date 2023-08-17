import { useState } from "react";

import "./Header.css";
import Menu from "../assets/menu.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
        <header id="header" className="content-wrapper">
        <nav id="main-nav" aria-label="Main navigation"> 
          <div id="site-logo">
            <div className="slogan nav" id="logo"><a href="/">Yan Can Code</a></div>
          </div>
          <a href="#about" className="nav">about</a>
          <span className="nav">|</span>
          <a href="#project" className="nav">projects</a>
          <span className="nav">|</span>
          <a href="#education" className="nav">education</a>
          <span className="nav">|</span>
          <a href="#footer" className="nav">contact</a>
        </nav>
        <div id="header-right">
          <div>
            <a href="https://www.linkedin.com/in/ywpang/" target="_blank"><img src={Linkedin} alt="Linkedin logo" id="linkedin"/></a>
            <a href="https://github.com/yanwing61/" target="_blank"><img src={Github} alt="Github logo" id="github"/></a>
          </div>
          <div id="mobile-menu">
            <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Mobile Menu"
            >
            <img id="m-menu-icon" src={Menu} alt="menu icon" />
            </button>
            <ul className="mobile-menu">
              <li><a href="#about">skills</a></li>
              <li><a href="#project">projects</a></li>
              <li><a href="#education">education</a></li>
              <li><a href="#footer">contact</a></li>
            </ul>
          </div>
        </div>
      </header>
  
    );
  }