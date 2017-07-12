import React, {Component} from 'react';

import './landing.css';
// import landingBack from './../../imgs/portfolio-back.jpg';

export default class Landing extends Component {
    
    render() {
        return (
            <div className="landing-container">
                <div className="landing-contents">
                    <div className="landing-name">Justice Perez White</div>
                    <div className="landing-title">Web Developer</div>
                </div>
            </div>
        )
    }
}