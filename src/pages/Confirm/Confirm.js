import React, { Component } from 'react';
import '../../styles/bootstrap.css';

import axios from 'axios';
import signup from '../../assets/signup-4.png';
import mailerror from '../../assets/mirage-unsubscribe.png';
const querystring = require("query-string");

class Confirm extends Component {

    constructor(props) {
        super(props);
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
			    console.log(response);
			    setTimeout(() => this.props.history.push('/'), 5000);
		    }).catch(err => {
			    console.log(err);
		    });
	    }
    }

    render() {
        return (
            <div>
                <br/>
                <h5>Votre compte a bien été confirmé !<br/> Merci !</h5><br/>
                <img src={signup} alt="signup"/> <br/>

                {/*<img src={mailerror} alt="mailerror"/>*/}

            </div>
        )
    }
}

export default Confirm;