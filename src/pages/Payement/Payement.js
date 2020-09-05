import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";
import "../../styles/Payement.css";
import "../../styles/Contact.css";

import trash from "../../assets/icons8-delete-bin-24.png";
import add from "../../assets/plus.png";

import ReactGA from 'react-ga';
import axios from "axios";

export default class Payement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
        };

        this.purchaseLicence = this.purchaseLicence.bind(this);
    }

    componentDidMount() {
        if (process.env.REACT_APP_ANALYTICS === 'true') {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
        if (this.props.base) {
            const {base: {language}} = this.props;
            this.setState({
                lang: language
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.base && (this.props.base.language !== this.state.lang)) {
            // console.log(prevProps, this.props);
            this.setState({lang: this.props.base.language}, () => console.log('re'));
        }
    }

    purchaseLicence() {
        if (this.props.base.logged) {
            axios.post('/subscribe', {
                subscription: this.props.base.licence
            }, {
                headers: {
                    'x-access-token': this.props.base.token
                }
            }).then(response => {
                this.props.history.push('/Profile');
            }).catch(err => {
                console.log(err);
            });
        }
    }


    render() {
        let i = 0;
        return(
            <div className="responsive-image">
                <h4 className="button-border">Panier</h4> <br/>
                <div className="row responsive-image">
                    <div className="col">
                        <span className="title-products">{displayContent(this.state.lang, i++, 'payement')}</span> <br/>
                        <p className="description-txt">Nom de la licence</p>
                        <p className="description-txt">{this.props.base.licence.description}Blablablaazazazaz  Blablablaazazazaz Blablablaazazazaz Blablablaazazazaz BlablablaazazazazBlablablaazazazaz</p>
                        <button className="btn btn-danger float-right">
                            <img src={trash} alt="trash"/>
                        </button>
                        <button className="btn btn-primary float-right">
                            <img src={add} alt="add"/>
                        </button>
                    </div>
                    <div className="col-4 grey-background">
                        <span className="title-products">{displayContent(this.state.lang, i++, 'payement')}</span> <br/>
                        <span className="options-margin float-left">{this.props.base.licence.name}</span>
                        <span className="options-margin float-right">{this.props.base.licence.price}€</span> <br/>
                        <button className="btn btn-success options-margin button-border" onClick={this.purchaseLicence}>Payer</button>
                    </div>
                </div>
            </div>
        )
    }
}
