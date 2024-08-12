import React, { useRef, useState } from 'react';
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import profilePicture from "../../assets/profile.jpg"
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
        closeNavbar();
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
                    <Link to={"/"} onClick={handleLinkClick}><li>Home</li></Link>
                    <Link to={"/typescript/"} onClick={handleLinkClick}><li>Course</li></Link>
                    <Link to={"/learning/"} onClick={handleLinkClick}><li>My Learning</li></Link>
                    <Link to={"/join/"} onClick={handleLinkClick}><li>Join Us</li></Link>
                    <div className="under768px">
                        {/* <img src={profilePicture} className='profilePicture' alt="" /> */}
                        <Link to="/typescript/" className="cta">Get Started</Link>

                    </div>
                </ul>
                <div className="nav-right over768px">
                    <Link to="/typescript/" className="cta">Get Started</Link>
                    {/* <img src={profilePicture} className='profilePicture' alt="" /> */}
                </div>
                
        </div>
    );
};

export default Navbar;
