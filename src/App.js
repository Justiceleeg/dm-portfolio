import React, { Component } from 'react';

import Navbar from './components/Navbar/navbar';
import Landing from './components/Landing/landing';
import Projects from './components/Projects/projects'
import Skills from './components/Skills/skills';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Landing />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

// Navbar
// Landing
// Projects
// Skills
// About
// Contact
// Footer
