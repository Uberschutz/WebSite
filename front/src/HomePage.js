import React, { Component } from 'react';
import './styles/bootstrap.css';

import Header from "./Header";
import './styles/HomePage.css';
import canvas from './assets/canvas.png';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <img src={canvas} alt="canvas" className="responsive-image"/>
            </div>
        )
    }
}

export default HomePage;