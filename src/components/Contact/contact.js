import React, {Component} from 'react';

import './contact.css';

import discord from './../../imgs/discord.png';

export default class Contact extends Component {
    
    render() {
        return (
            <div id="contact"  className="contact-container">
                <div className="contact-contents">
                    <div className="title">Contact</div>
                    <div className="contacts">
                        <div className="contact-box">
                            <div className="contact-logo"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                            <div className="contact-name">Email</div>
                            <div className="contact-username">justicepwhite<br/>@gmail.com</div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-logo"><a target="_blank" className="linkedin-link" href="https://www.linkedin.com/in/justiceperezwhite/">
                                 <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                            </div>
                            <div className="contact-name">LinkedIn</div>
                            <div className="contact-username">My Profile</div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-logo"><i className="fa fa-slack" aria-hidden="true"></i></div>
                            <div className="contact-name">Slack</div>
                            <div className="contact-username">@Justiceleeg</div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-logo"><img className="discord" src={discord} alt="Discord"/></div>
                            <div className="contact-name">Discord</div>
                            <div className="contact-username">@Justiceleeg</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}