import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

class Footer extends Component {
    render() {
        return (
            <div className="uber-color2 form-align">
                <button type="button" className="btn btn-light button-footer">Contact</button>
                <br/>
                <span>
                    © 2019
                </span>
                <br/>
                <span>
                    Created by Marianne LEVEE & Thomas DEROTE-PARCELLIER
                </span>
            </div>
        )
    }
}

export default Footer;