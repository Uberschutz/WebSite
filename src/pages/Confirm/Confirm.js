import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Connection.css'

import axios from 'axios';
import signup from '../../assets/signup-4.png';
import mailerror from '../../assets/mirage-unsubscribe.png';
import alreadyverified from '../../assets/mirage-list-is-empty.png';

import NotFound from "../NotFound";

import {displayContent} from "../../utils/translationDisplay";
const querystring = require("query-string");

class Confirm extends Component {

    constructor(props) {
        super(props);

        this.state = {
        	lang: 'fr',
            status: '',
	        pending: false
        };

        if (props && props.location && props.location.search) {
        	if (querystring.parse(props.location.search).id) {
		        this.id = querystring.parse(props.location.search).id;
	        } else {
        		this.error = true;
	        }
        } else {
        	this.error = true;
        }
    }

    componentDidMount() {
    	if (this.props.base) {
			const {base: {language}} = this.props;
			this.setState({lang: language, pending: true});
			if (this.id) {
				axios.post('/verifyaccount', {
					id: this.id
				}).then(response => {
					this.setState({status: 'verified', pending: false});
					console.log(response);
					setTimeout(() => this.props.history.push('/'), 5000);
				}).catch(err => {
					if (err.response && err.response.data === 'Invalid request: Unknown user') {
						this.setState({status: 'expired', pending: false});
					} else if (err.response && err.response.data === 'Invalid request: Account has been already confirmed') {
						this.setState({status: 'confirmed', pending: false});
					} else {
						this.setState({status: 'error', pending: false});
					}
					console.log(err);
				});
			} else {
				this.setState({pending: false});
			}
		}
    }

    render() {
    	let i = 0;
	    if (!this.error && this.state.status !== 'error' && !this.state.pending) {
		    if (this.state.status === 'verified') {
			    return (
				    <div>
					    <br/>
					    <h5>{displayContent(this.state.lang, i++,'confirm')}<br/> {displayContent(this.state.lang, i,'confirm')}</h5><br/>
					    <img src={signup} alt="signup"/> <br/>
				    </div>
			    )
		    } else if (this.state.status === 'expired') {
			    return (
				    <Expired lang={this.state.lang}/>
			    )
		    } else {
			    return (
				    <AlreadyConfirmed lang={this.state.lang}/>
			    )
		    }
	    } else {
	    	if (this.state.pending) {
	    		return (<div/>)
		    } else {
			    return (
				    <NotFound/>
			    );
		    }
    }
}
}

class AlreadyConfirmed extends Component {
    render() {
    	let i = 2;
        return (
            <div>
                <br/>
                <h5> {displayContent(this.props.lang, i,'confirm')}</h5> <br/>
                <img src={alreadyverified} alt="alreadyverify"/>
            </div>
        )
    }
}

class Expired extends Component {
    render() {
    	let i = 3;
        return (
            <div>
                <h5> {displayContent(this.props.lang, i,'confirm')}</h5> <br/>
                <img src={mailerror} alt="mailerror"/>
            </div>
        )
    }
}

export default Confirm;