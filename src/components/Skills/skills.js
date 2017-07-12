import React, {Component} from 'react';

import './skills.css';
import nodejs from './../../imgs/skill_logos/nodejs.svg';
import jquery from './../../imgs/skill_logos/jquery.svg';
import angularjs from './../../imgs/skill_logos/angularjs.svg';
import massivejs from './../../imgs/skill_logos/massivejs.png';
import expressjs from './../../imgs/skill_logos/express.png';
import javascript from './../../imgs/skill_logos/javascript.svg';
import typescript from './../../imgs/skill_logos/typescript.svg';
import postgresql from './../../imgs/skill_logos/postgresql.svg';
import heroku from './../../imgs/skill_logos/heroku.svg';
import github from './../../imgs/skill_logos/github.svg';
import git from './../../imgs/skill_logos/git.svg';
import gimp from './../../imgs/skill_logos/gimp.svg';
import css from './../../imgs/skill_logos/css3.svg';
import html from './../../imgs/skill_logos/html5.svg';
import gulp from './../../imgs/skill_logos/gulp.svg';
import sass from './../../imgs/skill_logos/sass.svg';
import react from './../../imgs/skill_logos/react.svg';
import redux from './../../imgs/skill_logos/redux.png';

export default class Skills extends Component {
    
    render() {
        return (
            <div className="skills-container">
                <div className="skills-contents">
                    <div className="title">Experience</div>
                    <div className="icon-row">
                        <div className="icon-container">
                            <img className="icon "src={html} alt="html5"/>
                            <p className="icon-name">HTML5</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={css} alt="css3"/>
                            <p className="icon-name">CSS3</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={javascript} alt="javascript"/>
                            <p className="icon-name">Javascript</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={react} alt="react js"/>
                            <p className="icon-name">React</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={redux} alt="redux"/>
                            <p className="icon-name">Redux</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={angularjs} alt="angular js"/>
                            <p className="icon-name">Angular JS</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={typescript} alt="typescript"/>
                            <p className="icon-name">Typescript</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={git} alt="git"/>
                            <p className="icon-name">Git</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={github} alt="github"/>
                            <p className="icon-name">Github</p>
                        </div>
                    </div>
                    <div className="icon-row">
                        <div className="icon-container">
                            <img className="icon "src={nodejs} alt="nodejs"/>
                            <p className="icon-name">Node JS</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={jquery} alt="jquery"/>
                            <p className="icon-name">Jquery</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={massivejs} alt="massive js"/>
                            <p className="icon-name">Massive JS</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={expressjs} alt="express js"/>
                            <p className="icon-name">Express JS</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={postgresql} alt="postgresql"/>
                            <p className="icon-name">PostgreSQL</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={heroku} alt="heroku"/>
                            <p className="icon-name">Heroku</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={sass} alt="sass"/>
                            <p className="icon-name">Sass / Scss</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={gulp} alt="gulp"/>
                            <p className="icon-name">Gulp</p>
                        </div>
                        <div className="icon-container">
                            <img className="icon "src={gimp} alt="gimp"/>
                            <p className="icon-name">GIMP</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}