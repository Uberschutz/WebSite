import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";
import "../../styles/Payement.css";
import "../../styles/Contact.css";

import trash from "../../assets/icons8-delete-bin-24.png";

import ReactGA from 'react-ga';
import Cookies from "universal-cookie/lib";
import axios from "axios";

const cookies = new Cookies();

export default class Payement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
        };

        this.purchaseLicence = this.purchaseLicence.bind(this);
        this.deleteLicence = this.deleteLicence.bind(this);
    }

    componentDidMount() {
        const cookieConsent = cookies.get('Universal-cookieAnalytics') || false;
        if (process.env.REACT_APP_ANALYTICS === 'true' && cookieConsent) {
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
            }).then(async response => {

                const user = await axios.get('/get_auth_user')
                const { lastname, email } = user.data
                await axios.post('/email', {
                    name: lastname,
                    email: email,
                    message: "Bonjour, \nNous vous remercions de votre commande. Nous espérons que la protection d'Überschutz vous satisfera !\nN'hésitez pas à nous contacter sur test.controleparental.epitech@gmail.com pour toutes questions.\n\nBonne journée !\nL'équipe Uberschutz",
                    subject: "Votre commande Überschutz.online"
                })
                this.props.history.push('/Profile');
            }).catch(err => {
                console.log(err);
            });
        }
    }

    deleteLicence() {
       this.props.setLicence(null);
    }


    render() {
        let i = 0;
        return(
            <div className="responsive-image">
                <h4 className="button-border">Panier</h4> <br/>
                <div className="row responsive-image">
                    <div className="col">
                        <span className="title-products">{displayContent(this.state.lang, i++, 'payement')}</span> <br/>
                        {
                            this.props.base.licence ? <div> <p className="description-txt h7-font">{this.props.base.licence.name}</p>
                                <p className="description-txt">{this.props.base.licence.desc}</p> </div> : null
                        }
                        <button className="btn btn-danger float-right" onClick={this.deleteLicence}>
                            <img src={trash} alt="trash"/>
                        </button>
                    </div>
                    <div className="col-4 grey-background">
                        <span className="title-products">{displayContent(this.state.lang, i++, 'payement')}</span> <br/>
                        {
                            this.props.base.licence ? <div> <span className="options-margin float-left">{this.props.base.licence.name}</span>
                                <span className="options-margin float-right">{this.props.base.licence.price}€</span> <br/> </div> : null
                        }
                        <button className="btn btn-success options-margin button-border" onClick={this.purchaseLicence}>{displayContent(this.state.lang, i++, 'payement')}</button>
                    </div>
                </div>
            </div>
        )
    }
}
