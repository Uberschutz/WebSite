import React, { Component } from 'react';
import './styles/bootstrap.css';
import './styles/HomePage.css';

import {Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink} from 'reactstrap';

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
                    <NavbarBrand className="navbar-brand uber-color" href="/">Überschutz</NavbarBrand>
                    <NavbarToggler className="navbar-toggler" onClick={this.toggle}/>
                    <Collapse className="collapse navbar-collapse" isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto navbar  navbar-expand-md" navbar>
                            <React.Fragment>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Home">Menu</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Connexion">Connexion</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Contact + FAQ">Contact + FAQ</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Profil">Profil</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link uber-color" href="/Paramètres">Paramètres</NavLink>
                                </NavItem>
                            </React.Fragment>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;