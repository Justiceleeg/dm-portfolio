import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-link-container">
                <li className="navbar-links">Portfolio</li>
                <li className="navbar-links">Experience</li>
                <li className="navbar-links">About</li>
                <li className="navbar-links">Contact</li>
                
            </ul>
            <div className="nav-resume"><span>Resume</span></div>
        </nav>
    )
}

export default Navbar;