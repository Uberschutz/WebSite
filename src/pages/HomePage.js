import React, { Component } from 'react';
import '../styles/bootstrap.css';

import Header from "./Header";
import Footer from "./Footer";
import '../styles/HomePage.css';
import Contact from "./Contact";
import canvas from '../assets/canvas.png';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <img src={canvas} alt="canvas" className="responsive-image"/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;