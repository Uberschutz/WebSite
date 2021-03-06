import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Connection.css';

import { displayContent, displayHttpMessages } from '../../utils/translationDisplay';
import axios from 'axios';
import Alert from "reactstrap/lib/Alert";
import loading from "../../assets/Spinner-1s-70px.gif";

import ReactGA from 'react-ga';

const Link = require("react-router-dom").Link;

class Connection extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	name: '',
	        surname: '',
	        email: '',
	        password: '',
	        alphaName: false,
	        alphaSurname: false,
	        lang: 'fr',
	        failAuth: false,
            requestSent: false,
            requestCode: 200,
            requestMessage: ""
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this._handleKeyPressed = this._handleKeyPressed.bind(this);
        this.connect = this.connect.bind(this);
    }

	componentDidMount() {
		if (process.env.REACT_APP_ANALYTICS === 'true') {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
		if (this.props.base) {
			const { base: { language } } = this.props;
			if (this.state.lang !== language) {
				this.setState({
					lang: language
				})
			}
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base.language !== prevProps.base.language && this.setState({lang: this.props.base.language}, () => console.log('re'));
	}

	_handleKeyPressed(e) {
		if (e.key === 'Enter') {
			this.connect();
		}
	}

    static isAlpha(char) {
        const re = /^[a-zA-Z]+$/g;
        return re.test(char);
    }

    onChangeEmail(email) {
		this.setState({email: email.target.value});
	}

	onChangePass(pass) {
		this.setState({password: pass.target.value});
	}

	connect() {
		if (this.state.email && this.state.email !== '' && this.state.password !== '') {
            this.setState({requestSent: true});
		    axios.post('/connect', {
		        email: this.state.email,
                passwd: this.state.password
            }).then(response => {
                // console.log(response.data);
                this.props.setLogged(true);
                // this.props.setUser(this.state.email, response.data.lastname, response.data.firstname);
                this.props.setAuthToken(response.data.token);
                // this.props.setNewsletter(response.data.newsletter);
                this.props.history.push('/');
            }).catch(err => {
                console.log(err.response);
                this.setState({
	                failAuth: true,
	                requestCode: err.response.status,
	                requestMessage: err.response.data,
	                requestSent: false
                }, () => {
	                setTimeout(() => {
		                this.setState({failAuth: false});
	                }, 10 * 1000);
                });
            });
		}
	}

    render() {
	    let i = 0;
        return (
            <div>
                <br/>
                <div className="card text-white bg-dark box-center">
                    <div className="card-body bg-dark item-align text-align">
                        <h5 className="card-title text-align">
                            {displayContent(this.state.lang, i++, 'connexion')}
                        </h5>
                        <p className="card-text">
                            {displayContent(this.state.lang, i++, 'connexion')}
                        </p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input value={this.state.email} onChange={this.onChangeEmail} onKeyPress={this._handleKeyPressed} type="text" className="form-control" aria-label="Email"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'connexion')}</span>
                            </div>
                            <input value={this.state.password} onChange={this.onChangePass} onKeyPress={this._handleKeyPressed} type="password" className="form-control" aria-label="Email"/>
                        </div>
                        <button onClick={this.connect} type="button" className="btn btn-primary">{displayContent(this.state.lang, i++, 'connexion')}</button> <br/>
                        {
                            this.state.requestSent ? <img src={loading} alt="loading"/>
                                : null
                        }
                    </div>
                </div>
	            {
	            	this.state.failAuth ? <Alert color="danger">{this.state.lang === "en" ? this.state.requestMessage : displayHttpMessages(this.state.lang, this.state.requestCode, this.state.requestMessage)}</Alert> : null
	            }
                <br/>
                <span>
                    {displayContent(this.state.lang, i++, 'connexion')}
                </span> <br/>
                <Link to={'/Registration'}>
                    <button type="button" className="btn button-footer btn-primary">{displayContent(this.state.lang, i++, 'connexion')}</button>
                </Link>
            </div>
        )
    }
}

export default Connection;
