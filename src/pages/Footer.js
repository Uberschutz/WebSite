import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="uber-color2 form-align footer">
                <Link to ='/Contact+FAQ'>
                    <button type="button" className="btn btn-primary button-footer">Contact</button>
                </Link>
                <br/>
                <span>
                    © 2018 - 2019
                </span>
                <br/>
                <span>
                    Created by Marianne LEVEE & Thomas DEROTE-PARCELLIER <br/> App icon by <a href="https://icones8.fr">icons8</a> <br/>
                </span>
            </div>
        )
    }
}

export default Footer;