import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <nav className="footer-container">
            <div className="footer-side"></div>
            <div className="footer-content">2017 Justicepwhite.com</div>
            <div className="footer-side">
                <a target="_blank" className="footer-link" href="https://github.com/Justiceleeg/">
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a target="_blank" className="footer-link" href="https://www.linkedin.com/in/justiceperezwhite/">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
            </div>
        </nav>
    )
}

export default Footer;