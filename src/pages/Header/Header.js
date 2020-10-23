import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/HomePage.css';

import logo from '../../assets/Uberschutz-Icon.png';
import french from '../../assets/icons8-france-96.png';
import english from '../../assets/icons8-grande-bretagne-48.png';
import typo from '../../assets/Überschutz-typo-resize.png'

import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Nav from 'reactstrap/lib/Nav';
import Collapse from 'reactstrap/lib/Collapse';
import NavItem from 'reactstrap/lib/NavItem';
import DropdownMenu from 'reactstrap/lib/DropdownMenu'
import DropdownToggle from 'reactstrap/lib/DropdownToggle'
import ButtonDropdown from 'reactstrap/lib/ButtonDropdown'
import { displayContent } from '../../utils/translationDisplay';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Cookies from "universal-cookie/lib";
import CookieConsent from "react-cookie-consent";

const cookies = new Cookies();
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
	    let logged = false;
	    if (cookies.get('token') !== undefined) {
		    logged = true;
	    }
	    if (this.props.base) {
	    	if (!logged && !this.props.base.logged)
	    		this.props.setLogged(false);
		    const { base: { language } } = this.props;
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
		    this.getUser();
	    }
    }

    getUser() {
    	// console.log(this.token);
    	// console.log(cookies.get('token'));
        if (cookies.get('token') !== undefined && this.props.base && this.props.base.logged) {
            axios.get('/get_auth_user')
	            .then(response => {
                if (response && response.data) {
                    this.setState({
                        firstname: response.data.firstname,
                        lastname: response.data.lastname
                    });
                }
            }).catch(err => {
                console.log(err);
            })
        } else if (this.props.base.logged) {
	        axios.get('/disconnect').then().catch();
	        cookies.remove('token');
	        cookies.remove('token.sig');
	        this.props.setLogged(false);
        }
    }

    refreshAccount() {
        setInterval(this.getUser, 1000 * 15);
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
    	this.props.setLanguage(lang.target.dataset.lang);
    	this.setState({lang: lang.target.dataset.lang, isOpen: !this.state.isOpen});
    }

    disconnect() {
    	this.props.setLogged(false);
    	// this.props.setUser(undefined, undefined, undefined, undefined);
    	// this.props.setAuthToken(undefined);
	    cookies.remove('token');
	    cookies.remove('token.sig');
	    axios.get('/disconnect').then().catch();
	    this.setState({logged: false, lastname: undefined});
    }

    acceptGACookies() {
        cookies.set('Universal-cookieAnalytics', true);
    }

    declineGACookies() {
       cookies.set('Universal-cookieAnalytics', false);
        this.props.history.push("/NotFound");
    }

    render () {
        let i = 2;

        return (
            <div>
                <CookieConsent
                    location="bottom"
                    cookieName="Universal-cookieAnalytics"
                    style={{ background: "#2B373B", height: "13%", textAlign: "justify" }}
                    buttonText="I accept"
                    buttonStyle={{ backgroundColor: "#27ae60", color: "#000000" }}
                    enableDeclineButton={true}
                    declineButtonStyle={{ backgroundColor: "#e53935", color: "#000000" }}
                    expires={365}
                    onAccept={() => {this.acceptGACookies()}}
                    onDecline={() => {this.declineGACookies()}}>
                    We use cookies and similar technologies ("cookies") to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience.<br/>
                    To learn more about our use of cookies see our Data Collect information.<br/>
                    Select "I accept" to consent to this use, "I decline" to reject this use, or "More info" to control our cookies' use.
                    <Link to={'/DataInformations'}>
                        <button className="btn btn-primary more-info">More info</button>
                    </Link>
                </CookieConsent>

                <Navbar className="navbar navbar-expand-sm uber-color" light expand="md">
                    <img src={logo} alt="logo" width={65} height={70}/>
                    <NavbarBrand className="navbar-brand uber-color button-footer" href="/">
                        <img src={typo} alt="typo"/>
                    </NavbarBrand>
	                {this.state.logged ? <text className="navbar-brand uber-color button-footer">{displayContent(this.state.lang, 0, 'navbar')} {this.state.lastname} !</text> : null}
	                {this.state.logged ? <button onClick={this.disconnect}>{displayContent(this.state.lang, 1, 'navbar')}</button> : null}
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
                                </NavItem> : null }
	                            {this.state.logged ?
	                            <NavItem className="nav-item">
                                    <Link to="/Report" className="nav-link uber-color">{displayContent(this.state.lang, i++, 'navbar')}</Link>
                                </NavItem> : null }
	                            {this.state.logged ?
                                <NavItem className="nav-item">
	                                <Link to="/Parameters" className="nav-link uber-color">{displayContent(this.state.lang, i, 'navbar')}</Link>
                                </NavItem> : null }
                            </React.Fragment>
                        </Nav>
                    </Collapse>
	                <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} size="sm">
		                <DropdownToggle caret color="primary">
                            {this.getFlag()}
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

export default withRouter(Header);
