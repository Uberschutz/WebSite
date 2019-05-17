import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Connexion.css';

import { Link } from 'react-router-dom';

class Connexion extends Component {

    /* constructor(){
        super();
        this.state = {value: ''};
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({value: e.target.value})
            console.log(re.test(e.target.value));
        }
    } */

    render() {
        return (
            <div>
                <div className="row responsive-image">
                    <div className="col">
                        <br/>
                        <div className="card text-white bg-dark box-center">
                            <div className="card-body bg-dark item-align">
                                <h5 className="card-title text-align">
                                    Authentication
                                </h5>
                                <p className="card-text">
                                    Please enter an email and a password to continue
                                </p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Email"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                    </div>
                                    <input type="password" className="form-control" aria-label="Email"/>
                                </div>
                                <Link to ='/'>
                                    <button type="button" className="btn btn-primary align-continue">Continue</button>
                                </Link>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <br/>
                        <div className="card text-white bg-dark box-center">
                            <div className="card-body bg-dark item-align">
                                <h5 className="card-title text-align">
                                    Inscription
                                </h5>
                                <p className="card-text">
                                    Merci de remplir ces champs pour continuer
                                </p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Nom</span>
                                    </div>
                                    <input /*value={this.state.value} onChange={this.onChange}*/ type="text" className="form-control" aria-label="Nom"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Prénom</span>
                                    </div>
                                    <input /*value={this.state.value} onChange={this.onChange}*/ type="text" className="form-control" aria-label="Prénom"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Email"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                    </div>
                                    <input type="password" className="form-control" aria-label="Email"/>
                                </div>
                                <Link to ='/Profil'>
                                    <button type="button" className="btn btn-primary align-continue">Continue</button>
                                </Link>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}



class Consdsdsnexion extends Component {
    render() {
        return (
            <div>
                <div className="card text-white bg-dark box-center">
                    <div className="card-body bg-dark item-align">
                        <h5 className="card-title text-align">
                            Authentication
                        </h5>
                        <p className="card-text">
                            Please enter an email and a password to continue
                        </p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Email"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                            </div>
                            <input type="password" className="form-control" aria-label="Email"/>
                        </div>
                        <button type="button" className="btn btn-light">Continue</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connexion;