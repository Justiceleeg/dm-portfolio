import React from 'react';
import './navbar.css';

import resumePDF from './../../imgs/JusticePerezWhite_HDResume.pdf';

const Navbar = () => {

    return (
        <nav className="navbar-container">
            <ul className="navbar-link-container">
                <li className="navbar-links"><a className="a-tag" href="#portfolio">Portfolio</a></li>
                <li className="navbar-links"><a className="a-tag" href="#experience">Experience</a></li>
                <li className="navbar-links"><a className="a-tag" href="#about">About</a></li>
                <li className="navbar-links"><a className="a-tag" href="#contact">Contact</a></li>
                
            </ul>
            <div className="nav-resume"><a className="a-tag" target="_blank" href={ resumePDF }>Resume</a></div>
        </nav>
    )
}

export default Navbar;