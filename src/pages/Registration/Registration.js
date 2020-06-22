import React, {Component} from "react";
import '../../styles/bootstrap.css';
import '../../styles/Connection.css';

import axios from "axios";
import {displayContent, displayHttpMessages} from "../../utils/translationDisplay";
import {Alert} from "reactstrap";
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
        if (name && !Registration.isAlpha(name)) {
            this.setState({alphaName: true});
        } else {
            this.setState({alphaName: false});
        }
        this.setState({lastname: name});
    }

    onChangeFirstname(surname) {
        if (surname && !Registration.isAlpha(surname)) {
            this.setState({alphaSurname: true});
        } else {
            this.setState({alphaSurname: false});
        }
        this.setState({firstname: surname});
    }

    onChangeEmail(email) {
        this.setState({email: email});
    }

    onChangePass(pass) {
        this.setState({passwd: pass});
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
            <div className="col button-footer">
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
	                            <input value={this.state.lastname} onChange={(name) => this.onChangeLastName(name.target.value)} type="text" className="form-control form-box-error" aria-label="Nom" onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
	                            :
                                <input value={this.state.lastname} onChange={(name) => this.onChangeLastName(name.target.value)} type="text" className="form-control" aria-label="Nom" onKeyPress={(event) => {this._handleKeyPressed(event)}}/>}
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            {this.state.alphaSurname ?
	                            <input value={this.state.firstname} onChange={(surname) => this.onChangeFirstname(surname.target.value)} type="text" className="form-control form-box-error" aria-label="Prénom" onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
	                            :
                                <input value={this.state.firstname} onChange={(surname) => this.onChangeFirstname(surname.target.value)} type="text" className="form-control" aria-label="Prénom" onKeyPress={(event) => {this._handleKeyPressed(event)}}/>}
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input value={this.state.email} onChange={(email) => this.onChangeEmail(email.target.value)} type="text" className="form-control" aria-label="Email" onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            <input value={this.state.password} onChange={(password) => this.onChangePass(password.target.value)} type="password" className="form-control" aria-label="Email" onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.register()}>{displayContent(this.state.lang, i++, 'registration')}</button>
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
