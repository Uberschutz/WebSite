import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import logo from '../assets/Uberschutz-logo.png';
import french from '../assets/french-flag.png';
import english from '../assets/english-flag2.png';

import {Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

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

    render () {
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
                                    {/*<NavLink className="nav-link uber-color" href="/" lang={this.props.lang}>Menu</NavLink>*/}
                                    <Link className="nav-link uber-color" to="/">Menu</Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    {/*<NavLink className="nav-link uber-color" href="/Connexion">Connexion</NavLink>*/}
                                    <Link className="nav-link uber-color" to="/Connexion">Connexion</Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    {/*<NavLink className="nav-link uber-color" href="/Contact+FAQ">Contact + FAQ</NavLink>*/}
                                    {/*<NavLink to="/Contact+FAQ" activeClassName="selected">Contact + FAQ</NavLink>*/}
                                    <Link to="/Contact+FAQ" className="nav-link uber-color">Contact + FAQ</Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Profil">Profil</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Parametres">Paramètres</NavLink>
                                </NavItem>
                            </React.Fragment>
                        </Nav>
                    </Collapse>
	                <img src={french} alt="french" width="55" height="40" onClick={() => this.props.setLanguage('fr')}/>
	                <img src={english} alt="english" width="40" height="38" onClick={() => this.props.setLanguage('en')}/>
                </Navbar>
            </div>
        );
    }
}

export default Header;