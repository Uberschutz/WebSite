import React, {Component} from "react";
import '../../styles/bootstrap.css';
import '../../styles/Connection.css';

import axios from "axios";
import {displayContent, displayHttpMessages} from "../../utils/translationDisplay";
import Alert from "reactstrap/lib/Alert";
import loading from "../../assets/Spinner-1s-70px.gif";

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastname: '',
            firstname: '',
            email: '',
            passwd: '',
            alphaName: false,
            alphaSurname: false,
            lang: "fr",
	        status: '',
	        statusErr: false,
	        emailSent: false,
	        pending: false
        };

        this.register = this.register.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
	    this._handleKeyPressed = this._handleKeyPressed.bind(this);
    }

    componentDidMount() {
        if (this.props.base) {
            const { base: { language } } = this.props;
            // console.log(language, this.state.lang, 'kek')
            if (this.state.lang !== language) {
                this.setState({
                    lang: language
                })
            }
        }
    }

	_handleKeyPressed(e) {
		if (e.key === 'Enter') {
			this.register();
		}
	}

    static isAlpha(char) {
        const re = /^[a-zA-Z]+$/g;
        return re.test(char);
    }

    onChangeLastName(name) {
        if (name.target.value && !Registration.isAlpha(name.target.value)) {
            this.setState({alphaName: true, lastname: name.target.value});
        } else {
            this.setState({alphaName: false, lastname: name.target.value});
        }
    }

    onChangeFirstname(surname) {
        if (surname.target.value && !Registration.isAlpha(surname.target.value)) {
            this.setState({alphaSurname: true, firstname: surname.target.value});
        } else {
            this.setState({alphaSurname: false, firstname: surname.target.value});
        }
    }

    onChangeEmail(email) {
        this.setState({email: email.target.value});
    }

    onChangePass(pass) {
        this.setState({passwd: pass.target.value});
    }

    register() {
        if (this.state.email !== '' && this.state.passwd !== '' && this.state.lastname !== '') {
        	this.setState({pending: true});
            axios.post('/register', {
                email: this.state.email,
                passwd: this.state.passwd,
                lastname: this.state.lastname,
	            firstname: this.state.firstname
            }).then(response => {
            	console.log(response);
	            this.setState({
		            emailSent: true,
		            pending: false,
		            statusErr: false,
		            status: this.state.lang === "en" ? `${response.data}` : `${displayHttpMessages(this.state.lang, response.status, response.data)}`
	            }, () => {
	            	setTimeout(() => {this.setState({emailSent: false})}, 10000);
	            });
            }).catch(err => {
            	console.log(err);
	            this.setState({
		            emailSent: true,
		            statusErr: true,
		            pending: false,
		            status: this.state.lang === "en" ? `An error occurred : ${err.response.data}` : `${displayHttpMessages(this.state.lang, err.response.status, err.response.data)}`
	            }, () => {
		            setTimeout(() => {this.setState({emailSent: false})}, 10000);
	            });
            });
        } else {

        }
    }

    render() {
        let i = 0;
        return (
            <div className="col">
                <br/>
                <div className="card text-white bg-dark box-center">
                    <div className="card-body bg-dark item-align text-align">
                        <h5 className="card-title text-align">
                            {displayContent(this.state.lang, i++, 'registration')}
                        </h5>
                        <p className="card-text">
                            {displayContent(this.state.lang, i++, 'registration')}
                        </p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            {this.state.alphaName ?
	                            <input value={this.state.lastname} onChange={this.onChangeLastName} type="text" className="form-control form-box-error" aria-label="Nom" onKeyPress={this._handleKeyPressed}/>
	                            :
                                <input value={this.state.lastname} onChange={this.onChangeLastName} type="text" className="form-control" aria-label="Nom" onKeyPress={this._handleKeyPressed}/>}
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            {this.state.alphaSurname ?
	                            <input value={this.state.firstname} onChange={this.onChangeFirstname} type="text" className="form-control form-box-error" aria-label="Prénom" onKeyPress={this._handleKeyPressed}/>
	                            :
                                <input value={this.state.firstname} onChange={this.onChangeFirstname} type="text" className="form-control" aria-label="Prénom" onKeyPress={this._handleKeyPressed}/>}
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input value={this.state.email} onChange={this.onChangeEmail} type="text" className="form-control" aria-label="Email" onKeyPress={this._handleKeyPressed}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            <input value={this.state.password} onChange={this.onChangePass} type="password" className="form-control" aria-label="Email" onKeyPress={this._handleKeyPressed}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.register}>{displayContent(this.state.lang, i++, 'registration')}</button>
                        <br/>
                        {this.state.alphaSurname || this.state.alphaName ?
                            <span className="address text-danger">{displayContent(this.state.lang, i, 'registration')}</span> : null}
                    </div>
	                {
		                this.state.pending ? <img src={loading} alt="loading"/>
			                : null
	                }
                </div>
	            {
		            this.state.emailSent ?
			            <Alert color={this.state.statusErr ? "danger" : "success"}> {this.state.status}</Alert>
			            : null
	            }
            </div>
        )
    }
}

export default Registration;