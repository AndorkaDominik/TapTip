import React, { useRef, useState } from 'react';
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const showNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    }

    function handleLinkClick() {
        scrollToTop();
        closeNavbar();
    }

    return (
        <div className='navbar'>
            <Link  to={"/"} className='logo-container' onClick={scrollToTop}>
                <img src={logo} alt="" className='logo' />
            </Link>
            {!isNavOpen && <FaBars className="menu-btn" onClick={showNavbar} />}
            {isNavOpen && <FaTimes className="menu-btn" onClick={showNavbar} />}
                <ul className={isNavOpen ? 'show' : ''} ref={navRef}>
                    <Link to={"/"} onClick={handleLinkClick}><li>Főoldal</li></Link>
                    <Link to={"/jelentkezes/"} onClick={handleLinkClick}><li>Jelentkezés</li></Link>
                    <Link to={"/csomagok/"} onClick={handleLinkClick}><li>Csomagok</li></Link>
                    <Link to={"/blog/"} onClick={handleLinkClick}><li>Blog</li></Link>
                    <div className="under768px">
                        {/* <img src={profilePicture} className='profilePicture' alt="" /> */}
                        <Link to="/jelentkezes/" className="cta" onClick={handleLinkClick}>Jelentkezés</Link>

                    </div>
                </ul>
                <div className="nav-right over768px">
                    <Link to="/jelentkezes/" className="cta" onClick={handleLinkClick}>Jelentkezés</Link>
                    {/* <img src={profilePicture} className='profilePicture' alt="" /> */}
                </div>
                
        </div>
    );
};

export default Navbar;
