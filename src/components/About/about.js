import React, {Component} from 'react';

import './about.css';
import profile from './../../imgs/profile.jpg';
import kida from './../../imgs/kida.jpg';

export default class About extends Component {
    
    constructor(){
        super()

        this.state = {
            showDog: false
        }
    }

    addDog = function() {
        this.setState({
            showDog: !this.state.showDog
        })
    }


    render() {
        let dogPic = ()=> '';
        
        if (this.state.showDog){
            dogPic = function() {
                return (
                    <img src={kida} alt="My dog Kida" className="profile-pic"/>
                )
            }
        }

        return (
            <div id="about" className="about-container">
                <div className="title">My Story</div>
                <div className="portrait">
                    <img src={profile} alt="Me" className="profile-pic"/>
                    { dogPic() }
                </div>
                <div className="about-text-container">
                    <p className="about-text">I'm Justice Perez White, a 2015 graduate from Rice University with a B.S. in Mechanical Engineering, and
                        I have a passion for programming solutions to complex problems.</p>
                    <br/>
                    <p className="about-text">I'm excited to continue problem solving, learning, and contributing to diverse projects.</p>
                    <br/>
                    <p className="about-text">Outside of work, you'll find me tinkering with code, reading a novel, or listening to NPR podcasts on long walks with my <span className="about-text underline" onClick={() => this.addDog()}>dog</span>.</p>
                </div>
            </div>
        )
    }
}