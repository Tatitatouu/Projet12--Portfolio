import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="https://github.com/Tatitatouu" target="_blank" rel="noopener noreferrer" className="icon">
          <FaGithub size={30} />
        </a>
        <a href="mailto:tatiana68270wi@gmail.com" className="icon">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/tatiana-fuhrer" target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className="text">© 2025 Tatiana. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;