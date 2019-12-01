import React, { Component } from 'react';
import '../../styles/bootstrap.css';

import axios from 'axios';
import signup from '../../assets/signup-4.png';
import mailerror from '../../assets/mirage-unsubscribe.png';
import alreadyverified from '../../assets/mirage-list-is-empty.png';
const querystring = require("query-string");

class Confirm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: ''
        };

        if (props && props.location && props.location.search) {
	        this.id = querystring.parse(props.location.search).id;
        }
    }

    componentDidMount() {
    	if (this.id) {
		    console.log(this.props.match.params.id);
		    axios.post('/verifyaccount', {
			    id: this.id
		    }).then(response => {
		        this.setState({status: 'verified'});
			    console.log(response);
			    setTimeout(() => this.props.history.push('/'), 5000);
		    }).catch(err => {
		        if (err.response && err.response.data === 'Unknown user') {
		            this.setState({status: 'expired'});
                } else if (err.response && err.response.data === 'Account has been already confirmed') {
		            this.setState({status: 'confirmed'});
                }
			    console.log(err);
		    });
	    }
    }

    render() {
        if (this.state.status === 'verified') {
            return (
                <div>
                    <br/>
                    <h5>Votre compte a bien été confirmé !<br/> Merci !</h5><br/>
                    <img src={signup} alt="signup"/> <br/>
                </div>
            )
        } else if (this.state.status === 'expired') {
            return (
                <Expired/>
            )
        } else {
            return (
                <AlreadyConfirmed/>
            )
        }
    }
}

class AlreadyConfirmed extends Component {
    render() {
        return (
            <div>
                <br/>
                <h5>Votre compte est déjà confirmé</h5> <br/>
                <img src={alreadyverified} alt="alreadyverify"/>
            </div>
        )
    }
}

class Expired extends Component {
    render() {
        return (
            <div>
                <h5>Ce lien est expiré, veuillez vous inscrire à nouveau</h5> <br/>
                <img src={mailerror} alt="mailerror"/>
            </div>
        )
    }
}

export default Confirm;