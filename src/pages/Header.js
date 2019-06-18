import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import logo from '../assets/Uberschutz-logo.png';
import french from '../assets/french-flag.png';
import english from '../assets/english-flag2.png';

import {Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

const content = require('../assets/text');

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    displayContent(content) {
        // return(<div dangerouslySetInnerHTML={ {__html: content} }/>)
        return(content)
    }

    render () {

        const frenchClass = "clickable-flag" + (this.props.lang === "fr" ? " touched" : "");
        const EnglClass = "clickable-flag" + (this.props.lang === "en" ? " touched" : "");
        console.log(frenchClass);
        console.log(EnglClass);
        let i = 0;

        return (
            <div>
                <Navbar className="navbar navbar-expand-md uber-color" light expand="md">
                    <img src={logo} alt="logo"/>
                    <NavbarBrand className="navbar-brand uber-color button-footer" href="/"> Überschutz</NavbarBrand>
                    <NavbarToggler className="navbar-toggler" onClick={this.toggle}/>
                    <Collapse className="collapse navbar-collapse" isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto navbar  navbar-expand-md" navbar>
                            <React.Fragment>
                                <NavItem className="nav-item">
                                    <Link className="nav-link uber-color" to="/">Menu</Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <Link className="nav-link uber-color" to="/Connection">{/*Connexion*/} {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.navbar[i++])} </Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <Link to="/Contact+FAQ" className="nav-link uber-color">Contact + FAQ</Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Profile">{/*Profil*/} {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.navbar[i++])} </NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Parameters">{/*Paramètres*/} {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.navbar[i++])} </NavLink>
                                </NavItem>
                            </React.Fragment>
                        </Nav>
                    </Collapse>
	                <img src={french} className={frenchClass} alt="french" width="50" height="35" onClick={() => this.props.setLanguage('fr')}/>
	                <img src={english} className={EnglClass} alt="english" width="35" height="33" onClick={() => this.props.setLanguage('en')}/>
                </Navbar>
            </div>
        );
    }
}

export default Header;