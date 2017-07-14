import React, {Component} from 'react';

import './contact.css';

export default class Contact extends Component {
    
    render() {
        return (
            <div id="contact"  className="contact-container">
                <div className="contact-contents">
                    <div className="title">Contact</div>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    <i className="fa fa-slack" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}