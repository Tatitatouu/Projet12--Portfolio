import React, { useState } from "react";
import logo from "../../assets/logo-static-white.png"
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <header className="header">
        <img src={logo} alt="Tatiana Fuhrer - Développeuse Web" className="logo-image" />

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
          <a href="#about">À propos</a>
          <a href="#compétences">Compétences</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;