import React, { Component } from "react";

import axios from 'axios';
import { displayContent } from '../../utils/translationDisplay';

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
            lang: 'fr',
            account_licence: null,
            available_licences: []
        };

        this.addLicence = this.addLicence.bind(this);
        this.deleteLicence = this.deleteLicence.bind(this);
    }

    componentDidMount() {
        if (this.props.base) {
            const { base: { language} } = this.props;
            this.setState({
                lang: language
            });
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.base && (this.props.base.language !== this.state.lang)) {
            // console.log(prevProps, this.props);
            this.setState({lang: this.props.base.language}, () => console.log('re'));
        }
    }

    addLicence(data) {
        console.log(data.target.dataset);
        if (this.props.base.logged) {
            axios.post('/subscribe', {
                subscription: this.state.available_licences[+data.target.dataset.idx]
            }, {
                headers: {
                    'x-access-token': this.props.base.token
                }
            }).then(response => {
                this.setState({
                    account_licence: response.data
                });
                this.props.history.push("/Profile");
            }).catch(err => {
                console.log(err);
            });
        } else {
            this.props.history.push("/Connection");
        }
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
        let i = 0;
        return (
            <div className="fixed-size">
                <div className="title-intro">
                    <h4>{displayContent(this.state.lang, i++, 'subscription')}</h4> <br/>
                </div>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <img className="image-border" src={addOn} alt="addOn"/> <br/>
                            <span className="title-products">Add-on</span> <br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            <button type="button" className="btn btn-success button-border">{displayContent(this.state.lang, i++, 'subscription')}</button> <br/>
                        </div>
                        <div className="col-sm">
                            <img className="image-border" src={software} alt="software"/> <br/>
                            <span className="title-products">{displayContent(this.state.lang, i++, 'subscription')}</span> <br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            <button type="button" className="btn btn-warning button-border">{displayContent(this.state.lang, i++, 'subscription')}</button> <br/>
                        </div>
                    </div>
                </div> <br/>
                <div className="title-intro">
                    <h4>{displayContent(this.state.lang, i++, 'subscription')}</h4> <br/>
                </div>
                <div>
                    <div className="row">
                        <div className="col-xl-4">
                            <img className="image-border" src={family} alt="family"/> <br/>
                            <span className="title-products">{displayContent(this.state.lang, i++, 'subscription')}</span> <br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            <button type="button" className="btn btn-info button-border" onClick={this.addLicence} data-idx={0}>{displayContent(this.state.lang, i++, 'subscription')}</button> <br/>
                        </div>
                        <div className="col-xl-4">
                            <img className="image-border" src={familyPlus} alt="familyPlus"/> <br/>
                            <span className="title-products">{displayContent(this.state.lang, i++, 'subscription')}</span> <br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            <button type="button" className="btn btn-info button-border" onClick={this.addLicence} data-idx={1}>{displayContent(this.state.lang, i++, 'subscription')}</button> <br/>
                        </div>
                        <div className="col-xl-4">
                            <img className="image-border" src={newLicence} alt="newLicence"/> <br/>
                            <span className="title-products">{displayContent(this.state.lang, i++, 'subscription')}</span> <br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            {displayContent(this.state.lang, i++, 'subscription')}<br/>
                            <button type="button" className="btn btn-info image-border button-border" onClick={this.addLicence} data-idx={2}>{displayContent(this.state.lang, i++, 'subscription')}</button> <br/>
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
    }
}