import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import logo from '../assets/Uberschutz-logo.png';
import french from '../assets/french-flag.png';
import english from '../assets/english-flag2.png';

import {Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink} from 'reactstrap';
import {DropdownItem, DropdownMenu, DropdownToggle, ButtonDropdown} from 'reactstrap'
import {Link} from "react-router-dom";
import { displayContent } from '../utils/translationDisplay';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            // lang: undefined
            lang: 'fr'
        };

        this.frenchClass = "clickable-flag" + (this.state.lang === "fr" ? " touched" : "");
        this.EnglClass = "clickable-flag" + (this.state.lang === "en" ? " touched" : "");
    }

    componentDidMount() {
    	console.log(this.props);
        // const { state: { language }} = this.props;
        // this.setState({lang: language});
        // console.log(language);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getFlag()  {
        switch (this.state.lang) {
            case 'fr':
                return (<img src={french} className={this.frenchClass} alt="french" width="35" height="35" onClick={() => this.props.setLanguage('fr')}/>);
            case 'en':
                return (<img src={english} className={this.EnglClass} alt="english" width="35" height="33" onClick={() => this.props.setLanguage('en')}/>)
            default:
                return (<img src={french} className={this.frenchClass} alt="french" width="35" height="35" onClick={() => this.props.setLanguage('fr')}/>)
        }
    }

    render () {
        console.log(this.frenchClass);
        console.log(this.EnglClass);
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
                                    <Link className="nav-link uber-color" to="/Connection">{displayContent(this.state.lang, i++, 'navbar')} </Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <Link to="/Contact+FAQ" className="nav-link uber-color">Contact + FAQ</Link>
                                </NavItem>
                                <NavItem className="nav-item">
	                                <Link to="/Profile" className="nav-link uber-color">{displayContent(this.state.lang, i++, 'navbar')}</Link>
                                    {/*<NavLink className="nav-link uber-color" href="/Profile">{displayContent(this.state.lang, i++, 'navbar')} </NavLink>*/}
                                </NavItem>
                                <NavItem className="nav-item">
	                                <Link to="/Parameters" className="nav-link uber-color">{displayContent(this.state.lang, i, 'navbar')}</Link>
                                    {/*<NavLink className="nav-link uber-color" href="/Parameters">{displayContent(this.state.lang, i, 'navbar')} </NavLink>*/}
                                </NavItem>
                            </React.Fragment>
                        </Nav>
                    </Collapse>
	                <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} size="sm">
		                <DropdownToggle caret color="primary">
                            {this.getFlag()}
			                {/*<img src={french} className={frenchClass} alt="french" width="35" height="35" onClick={() => this.props.setLanguage('fr')}/>*/}
		                </DropdownToggle>
		                <DropdownMenu className="drop btn">
			                <div>
				                <img src={french} className={this.frenchClass} alt="french" width="35" height="35" onClick={() => this.props.setLanguage('fr')}/>
			                </div>
			                <div>
				                <img src={english} className={this.EnglClass} alt="english" width="35" height="33" onClick={() => this.props.setLanguage('en')}/>
			                </div>
		                </DropdownMenu>
	                </ButtonDropdown>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		lang: state.lang
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setLanguage: () => dispatch({type: 'SET_LANGUAGE'})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);