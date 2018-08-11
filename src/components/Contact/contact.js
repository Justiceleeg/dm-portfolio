import React, {Component} from 'react';

import './contact.css';

export default class Contact extends Component {
    
    render() {
        return (
            <div id="contact"  className="contact-container">
                <div className="contact-contents">
                    <div className="title">Contact</div>
                    <div className="contacts">
                        <div className="contact-box">
                            <div className="contact-logo"><a target="_blank" rel="noopener noreferrer" className="linkedin-link" href="mailto:justicepwhite@gmail.com">
                                <i className="fa fa-envelope" aria-hidden="true"></i></a>
                                </div>
                            <div className="contact-name">Email</div>
                            <div className="contact-username">justicepwhite<br/>@gmail.com</div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-logo"><a target="_blank" rel="noopener noreferrer" className="linkedin-link" href="https://www.linkedin.com/in/justiceperezwhite/">
                                 <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                            </div>
                            <div className="contact-name">LinkedIn</div>
                            <div className="contact-username">My Profile</div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-logo">
                                <a target="_blank" rel="noopener noreferrer" className="linkedin-link" href="https://github.com/Justiceleeg/">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="contact-name">Github</div>
                            <div className="contact-username">@Justiceleeg</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}