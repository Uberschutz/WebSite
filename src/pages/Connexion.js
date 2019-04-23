import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Connexion.css';

class Connexion extends Component {
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