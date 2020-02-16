import React, { Component } from "react";

import axios from 'axios';
import Unauthorized from "../Unauthorized";
import '../../styles/Subscription.css';

export default class Subscription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account_licence: null,
            available_licences: []
        };

        this.addLicence = this.addLicence.bind(this);
        this.deleteLicence = this.deleteLicence.bind(this);
    }

    componentDidMount() {
        if (this.props.base) {
            axios.get('/get_available_licences', {
                headers: {
                    'x-access-token': this.props.base.token
                }
            }).then(response => {
                this.setState({
                    available_licences: response.data
                });
            }).catch(err => {
                console.log(err);
            });
            axios.get('/get_subscription', {
                headers: {
                    'x-access-token': this.props.base.token
                }
            }).then(response => {
                this.setState({
                    account_licence: response.data
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }

    addLicence(data) {
        console.log(data.target.dataset);
        axios.post('/subscribe', {
            subscription: this.state.available_licences[+data.target.dataset.idx]
        }, {
            headers: {
                'x-access-token': this.props.base.token
            }
        }).then(response => {
            this.setState({
                account_licence: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    deleteLicence() {
        axios.post('/unsubscribe', {

        }, {
            headers: {
                'x-access-token': this.props.base.token
            }
        }).then(response => {
            console.log(response.data);
            this.setState({
                account_licence: null
            })
        }).catch(err => {
            console.log(err);
        });
    }

    updateLicence() {

    }

    render() {
        if (this.props.base.logged) {
            return (

                <div>
                    <div className="title-intro">
                        <h4>Logiciels et plug-in</h4> <br/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                One of three columns
                            </div>
                            <div className="col-sm">
                                One of three columns
                            </div>
                            <div className="col-sm">
                                One of three columns
                            </div>
                        </div>
                    </div> <br/>
                    <div className="title-intro">
                        <h4>Licences</h4> <br/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                One of two columns
                            </div>
                            <div className="col-sm">
                                One of two columns
                            </div>
                        </div>
                    </div>
                </div>

                /*<div>
                    {
                        this.state.available_licences.map(licence => {
                            return (
                              <div>
                                  {licence.name}
                              </div>
                            );
                        })
                    }
                    <div>
                        My licence {this.state.account_licence !== null ? this.state.account_licence : ''}
                    </div>
                    <div>
                        <button data-idx={1} onClick={this.addLicence}>Add</button>
                    </div>
                    <div>
                        <button onClick={this.deleteLicence}>Delete</button>
                    </div>
                </div>*/
            );
        } else {
            return (
              <Unauthorized/>
            );
        }
    }

}