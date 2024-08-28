// src/components/Footer/Footer.js
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import './Footer.css';
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";


const Footer = () => {

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
    }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
            <img src={logo} alt="" className='logo' width={180} />
            <h1>TápTipp</h1>
        </div>
        <div className="footer-section">
          <h3>Linkek</h3>
          <ul>
            <Link to={"/"} onClick={scrollToTop}><li>Főoldal</li></Link>
            <Link to={"/jelentkezes/"} onClick={scrollToTop}><li>Jelentkezés</li></Link>
            <Link to={"/csomagok/"} onClick={scrollToTop}><li>Csomagok</li></Link>
            <Link to={"/blog/"} onClick={scrollToTop}><li>Blog</li></Link>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Dokumentumok</h3>
          <ul>
            <Link to={"/impresszum/"} onClick={scrollToTop}><li>Impresszum</li></Link>
            <Link to={"/csomagok/"} onClick={scrollToTop}><li>ÁSZF</li></Link>
            <Link to={"/"} onClick={scrollToTop}><li>Adatkezelési Tájékoztató</li></Link>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Kövess minket</h3>
          <a href="https://github.com/AndorkaDominik" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord  /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TápTipp. Minden jog fenntartva</p>
      </div>
    </footer>
  );
};

export default Footer;
