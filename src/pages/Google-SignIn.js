import React from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../actions'


class GoogleSignIn extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = { redirect : false };
	}

	componentDidMount() {
		// console.log(window.location);
		const { hash } = window.location;
		const id_token = hash.split('&')[1].slice('id_token='.length)
		// console.log(id_token);
		this.LogGoogleUser(id_token);
	}

	LogGoogleUser = (id_token) => {
		console.log('registering in redirection');
		axios.post('/google_sign_in', {
			id_token, registering: true
		}).then(() => { this.setState({ redirect: true })})
			.catch(err => console.log(err))/*.finally(() => this.setState({ redirect: true }));*/
	};

	render() {
		if (this.state.redirect)
		return (
			<Redirect to={'/Connection'}/>
		); return null;
	}
}

export default connect(() => ({}), dispatch => ({
	setLogged: bindActionCreators(actions.setLogged, dispatch)
}))(GoogleSignIn)
