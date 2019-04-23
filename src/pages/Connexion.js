import React, { Component } from 'react';
import '../styles/bootstrap.css';

class Connexion extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="card text-white mb-3 bg-dark">
                        <div className="card-body bg-dark">
                            <h5 className="card-title">
                                Authentication
                            </h5>
                            <p className="card-text">
                                Please enter an email and a password to continue
                            </p>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                </div>
                                <input type="password" className="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                            <button type="button" className="btn btn-light">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connexion;