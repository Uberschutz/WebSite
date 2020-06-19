import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/HomePage.css';

import logo from '../../assets/Uberschutz-Icon.png';
import french from '../../assets/icons8-france-96.png';
import english from '../../assets/icons8-grande-bretagne-48.png';

import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Nav from 'reactstrap/lib/Nav';
import Collapse from 'reactstrap/lib/Collapse';
import NavItem from 'reactstrap/lib/NavItem';
import DropdownMenu from 'reactstrap/lib/DropdownMenu'
import DropdownToggle from 'reactstrap/lib/DropdownToggle'
import ButtonDropdown from 'reactstrap/lib/ButtonDropdown'
import { displayContent } from '../../utils/translationDisplay';
import axios from 'axios';

const Link = require("react-router-dom").Link;

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            logged: false,
	        lastname: undefined,
            firstname: undefined,
            lang: 'fr'
        };

        this.frenchClass = "clickable-flag" + (this.state.lang === "fr" ? " touched" : "");
        this.EnglClass = "clickable-flag" + (this.state.lang === "en" ? " touched" : "");

        this.toggle = this.toggle.bind(this);
        this.refreshAccount = this.refreshAccount.bind(this);
        this.getUser = this.getUser.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
    }

    componentDidMount() {
    	// console.log('header mounted');
	    if (this.props.base) {
		    const { base: { language, logged } } = this.props;
		    this.setState({
			    lang: language,
			    logged
		    });
		    this.getUser();
		    this.refreshAccount();
	    }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    	// console.log('header update');
	    if (this.props.base !== prevProps.base) {
		    this.setState({logged: this.props.base.logged});
	    }
    }

    getUser() {
        if (this.props.base && this.props.base.token && this.props.base.logged) {
            axios.get('/get_auth_user', {
                headers: {
                    'x-access-token': this.props.base.token
                }
            }).then(response => {
                if (response && response.data) {
                    this.setState({
                        firstname: response.data.firstname,
                        lastname: response.data.lastname
                    });
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    refreshAccount() {
        setInterval(this.getUser, 1000 * 30);
    }

	toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getFlag()  {
        switch (this.state.lang) {
            case 'fr':
                return (<img src={french} className={this.frenchClass} alt="french" width="35" height="35"/>);
            case 'en':
                return (<img src={english} className={this.EnglClass} alt="english" width="35" height="33"/>);
            default:
                return (<img src={french} className={this.frenchClass} alt="french" width="35" height="35"/>);
        }
    }

    setLanguage(lang) {
    	console.log(lang.target.dataset.lang);
    	this.props.setLanguage(lang.target.dataset.lang);
    	this.setState({lang: lang.target.dataset.lang, isOpen: !this.state.isOpen});
    }

    disconnect() {
    	this.props.setLogged(false);
    	this.props.setUser(undefined, undefined, undefined, undefined);
    	this.props.setAuthToken(undefined);
    	this.setState({logged: false, lastname: undefined});
    }

    render () {
        let i = 2;

        return (
            <div>
                <Navbar className="navbar navbar-expand-sm uber-color" light expand="md">
                    <img src={logo} alt="logo" width={65} height={70}/>
                    <NavbarBrand className="navbar-brand uber-color button-footer" href="/"> Überschutz</NavbarBrand>
	                {this.state.logged ? <text className="navbar-brand uber-color button-footer">{displayContent(this.state.lang, 0, 'navbar')} {this.state.lastname} !</text> : null}
	                {this.state.logged ? <button onClick={this.disconnect}>{displayContent(this.state.lang, 1, 'navbar')}</button> : null}
	                {/*<NavbarToggler className="navbar-toggler" onClick={this.toggle}/>
                    <Collapse className="collapse navbar-collapse" isOpen={this.state.isOpen} navbar>*/}
                    <Collapse className="collapse navbar-collapse" isOpen={true} navbar>
                        <Nav className="ml-auto navbar  navbar-expand-md" navbar>
                            <React.Fragment>
                                <NavItem className="nav-item">
                                    <Link className="nav-link uber-color" to="/">Menu</Link>
                                </NavItem>
	                            { !this.state.logged ?
                                <NavItem className="nav-item">
                                    <Link className="nav-link uber-color" to="/Connection">{displayContent(this.state.lang, i++, 'navbar')}</Link>
                                </NavItem> : i++ && null }
                                <NavItem className="nav-item">
                                    <Link to="/Contact+FAQ" className="nav-link uber-color">Contact + FAQ</Link>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <Link to="/Subscription" className="nav-link uber-color">{displayContent(this.state.lang, i++, 'navbar')}</Link>
                                </NavItem>
	                            { this.state.logged ?
                                <NavItem className="nav-item">
	                                <Link to="/Profile" className="nav-link uber-color">{displayContent(this.state.lang, i++, 'navbar')}</Link>
                                    {/*<NavLink className="nav-link uber-color" href="/Profile">{displayContent(this.state.lang, i++, 'navbar')} </NavLink>*/}
                                </NavItem> : null }
	                            {this.state.logged ?
	                            <NavItem className="nav-item">
                                    <Link to="/Report" className="nav-link uber-color">{displayContent(this.state.lang, i++, 'navbar')}</Link>
                                </NavItem> : null }
	                            {this.state.logged ?
                                <NavItem className="nav-item">
	                                <Link to="/Parameters" className="nav-link uber-color">{displayContent(this.state.lang, i, 'navbar')}</Link>
                                    {/*<NavLink className="nav-link uber-color" href="/Parameters">{displayContent(this.state.lang, i, 'navbar')} </NavLink>*/}
                                </NavItem> : null }
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
				                <img src={french} className={this.frenchClass} alt="french" width="35" height="35" data-lang='fr' onClick={this.setLanguage}/>
			                </div>
			                <div>
				                <img src={english} className={this.EnglClass} alt="english" width="35" height="33" data-lang='en' onClick={this.setLanguage}/>
			                </div>
		                </DropdownMenu>
	                </ButtonDropdown>
                </Navbar>
            </div>
        );
    }
}

export default Header;