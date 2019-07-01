import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Connection.css';

import { Link } from 'react-router-dom';
import { displayContent } from '../utils/translationDisplay';

class Connection extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	name: '',
	        surname: '',
	        email: '',
	        password: '',
	        alphaName: false,
	        alphaSurname: false
        };
    }

    static isAlpha(char) {
        const re = /^[a-zA-Z]+$/g;
        return re.test(char);
    }

    onChangeName(name) {
		if (name && !Connection.isAlpha(name)) {
			this.setState({alphaName: true});
		} else {
			this.setState({alphaName: false});
		}
	    this.setState({name: name});
    }

    onChangeSurname(surname) {
		if (surname && !Connection.isAlpha(surname)) {
			this.setState({alphaSurname: true});
		} else {
			this.setState({alphaSurname: false});
		}
	    this.setState({surname: surname});
    }

	onChangeEmail(email) {
		this.setState({email: email});
	}

	onChangePass(pass) {
		this.setState({password: pass});
	}

    render() {
	    let i = 0;
        return (
            <div>
                <div className="row responsive-image">
                    <div className="col">
                        <br/>
                        <div className="card text-white bg-dark box-center">
                            <div className="card-body bg-dark item-align text-align">
                                <h5 className="card-title text-align">
                                    {/*Authentication*/}
                                    {displayContent(this.props.lang, i++, 'connexion')}
                                </h5>
                                <p className="card-text">
                                    {/*Please enter an email and a password to continue*/}
                                    {displayContent(this.props.lang, i++, 'connexion')}
                                </p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Email"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.props.lang, i++, 'connexion')}</span>
                                    </div>
                                    <input type="password" className="form-control" aria-label="Email"/>
                                </div>
                                <Link to ='/'>
                                    <button type="button" className="btn btn-primary">{displayContent(this.props.lang, i++, 'connexion')}</button>
                                </Link>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <br/>
                        <div className="card text-white bg-dark box-center">
                            <div className="card-body bg-dark item-align text-align">
                                <h5 className="card-title text-align">
                                    {/*Inscription*/}
                                    {displayContent(this.props.lang, i++, 'connexion')}
                                </h5>
                                <p className="card-text">
                                    {/*Merci de remplir ces champs pour continuer*/}
                                    {displayContent(this.props.lang, i++, 'connexion')}
                                </p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.props.lang, i++, 'connexion')}</span>
                                    </div>
	                                {this.state.alphaName ? <input value={this.state.name} onChange={(name) => this.onChangeName(name.target.value)} type="text" className="form-control form-box-error" aria-label="Nom"/> :
                                    <input value={this.state.name} onChange={(name) => this.onChangeName(name.target.value)} type="text" className="form-control" aria-label="Nom"/>}
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.props.lang, i++, 'connexion')}</span>
                                    </div>
	                                {this.state.alphaSurname ? <input value={this.state.value} onChange={(surname) => this.onChangeSurname(surname.target.value)} type="text" className="form-control form-box-error" aria-label="Prénom"/> :
                                    <input value={this.state.value} onChange={(surname) => this.onChangeSurname(surname.target.value)} type="text" className="form-control" aria-label="Prénom"/>}
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input value={this.state.email} onChange={(email) => this.onChangeEmail(email.target.value)} type="text" className="form-control" aria-label="Email"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.props.lang, i++, 'connexion')}</span>
                                    </div>
                                    <input value={this.state.password} onChange={(password) => this.onChangePass(password.target.value)} type="password" className="form-control" aria-label="Email"/>
                                </div>
                                <Link to ='/Profil'>
                                    <button type="button" className="btn btn-primary">{displayContent(this.props.lang, i++, 'connexion')}</button>
                                </Link>
	                            <br/>
	                            {this.state.alphaSurname || this.state.alphaName ?
		                            <span className="address text-danger">{displayContent(this.props.lang, i, 'connexion')}</span> : null}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connection;