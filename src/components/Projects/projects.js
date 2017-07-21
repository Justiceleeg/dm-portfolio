import React, {Component} from 'react';

import './projects.css';
import cardiac from './../../imgs/Cardiac.jpg';
import fiftyClone from './../../imgs/FiftyClone.jpg';

export default class Projects extends Component {
    
    render() {
        return (
            <div id="portfolio" className="projects-container">
                <div className="projects-contents">
                    <div className="title">Portfolio</div>
                    <div className="project-box">
                        <a target="_blank" className="project-img-tag" href="http://cardiac.justicepwhite.com/"><img className="project-img" src={cardiac} alt="cardiac website"/></a>
                        <div className="project-info">
                            <span className="underlined">Cardiac - Nutrition Influenced Game</span>
                            <br/>
                            <li>React.js, Redux, Node.js, Express.js and PostgreSQL</li>
                            <li>Created API endpoints on Node.js server and connected React.js app for CRUD operations</li>
                            <li>Designed and built the About page, utilizing state change to affect CSS properties</li>
                        </div>
                    </div>
                    <div className="project-box">
                        <a target="_blank" className="project-img-tag" href="http://fiftyclone.justicepwhite.com/"><img className="project-img" src={fiftyClone} alt="cardiac website"/></a>
                        <div className="project-info">
                            <span className="underlined">Site Clone - Fifty/Fifty Bottles</span>
                                <br/>
                                <li>Angular 2/4, Node.js, Express.js and PostgreSQL</li>
                                <li>Created relational database of products and their descriptions using PostgreSQL on Heroku</li>
                                <li>Practiced best practices for Angular 2/4 apps by using proper module and component patterns</li>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}