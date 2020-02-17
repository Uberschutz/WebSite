import React, { Component } from "react";

import axios from 'axios';
import Unauthorized from "../Unauthorized";
import '../../styles/Subscription.css';
import addOn from '../../assets/icons8-add-on-80.png';
import software from '../../assets/icons8-logiciel-96.png';
import family from '../../assets/family-1.1s-128px.png';
import familyPlus from '../../assets/familyPlus128px.png';
import newLicence from '../../assets/new-1.1s-128px.png';

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
                                <img className="image-border" src={addOn} alt="addOn"/> <br/>
                                <span className="title-products">Add-on</span> <br/>
                                One of two columns <br/>
                                Permet d'analyser votre navigation internet <br/>
                                Avoir un compte-rendu de toxicité <br/>
                                De gérer son compte <br/>
                                GRATUIT <br/> <br/>
                                <button type="button" className="btn btn-success">Télécharger</button> <br/>
                            </div>
                            <div className="col-sm">
                                <img className="image-border" src={software} alt="software"/> <br/>
                                <span className="title-products">Logiciel</span> <br/>
                                One of two columns <br/>
                                Permet de gérer son comptes sur un bureau de pc <br/>
                                Avoir un compte-rendu de toxicité <br/>
                                Possibilité d'achat <br/> <br/>
                                <button type="button" className="btn btn-warning">Télécharger</button> <br/>
                            </div>
                        </div>
                    </div> <br/>
                    <div className="title-intro">
                        <h4>Licences</h4> <br/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <img className="image-border" src={family} alt="family"/> <br/>
                                <span className="title-products">Licence Basique</span> <br/>
                                One of three columns <br/>
                                Basique : <br/>
                                - 1 appareils protégé et analysé <br/>
                                - convient à des familles qui ont 1 enfant à protéger <br/>
                                - à partir de 20€ <br/> <br/>
                                <button type="button" className="btn btn-info">Acheter</button> <br/>
                            </div>
                            <div className="col-xl-4">
                                <img className="image-border" src={familyPlus} alt="familyPlus"/> <br/>
                                <span className="title-products">Licence Famille Plus</span> <br/>
                                One of three columns <br/>
                                Famille : <br/>
                                - 3 appareils protégés et analysés <br/>
                                - convient à des familles qui ont 1 ou 2 enfants à protéger <br/>
                                - à partir de 35€ <br/> <br/>
                                <button type="button" className="btn btn-info">Acheter</button> <br/>
                            </div>
                            <div className="col-xl-4">
                                <img className="image-border" src={newLicence} alt="newLicence"/> <br/>
                                <span className="title-products">Licence Premium</span> <br/>
                                One of three columns <br/>
                                Premium : <br/>
                                - 5 appareils protégés et analysés <br/>
                                - convient à des familles qui ont plus de 2 enfants à protéger <br/>
                                - à partir de 50€ <br/>
                                Avantages ! <br/>
                                - Profitez de ... <br/> <br/>
                                <button type="button" className="btn btn-info">Acheter</button> <br/> <br/> <br/> <br/>
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