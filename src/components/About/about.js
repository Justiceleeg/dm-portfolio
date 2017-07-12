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
            <div className="about-container">
                <div className="title">My Story</div>
                <div className="portrait">
                    <img src={profile} alt="Me" className="profile-pic"/>
                    { dogPic() }
                </div>
                <div className="about-text-container">
                    <p className="about-text">I'm Justice Perez White. I graduated from Rice University in 2015 with a B.S. in Mechanical Engineering. I worked in Healthcare IT and Quality Engineering before realizing my true passion for web development. To accelerate my forray into the industry I recently graduated from <a className="about-text underline" href="#">DevMountain</a>, an industry-leading coding bootcamp.</p>
                    <br/>
                    <p className="about-text">I'm excited to continue problem solving and learning in this constantly evolving field.</p>
                    <br/>
                    <p className="about-text">Outside of work, you'll find my tinkering with code, reading a novel, or listening to NPR podcasts on long walks with my <span className="about-text underline" onClick={() => this.addDog()}>dog</span>.</p>
                </div>
            </div>
        )
    }
}