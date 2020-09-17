import React from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

export default class GoogleSignUp extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = { redirect : false };
	}

	componentDidMount() {
		console.log(window.location);
		const { hash } = window.location;
		const id_token = hash.split('&')[1].slice('id_token='.length)
		console.log(id_token);
		this.registerGoogleUser(id_token);
	}

	registerGoogleUser = (id_token) => {
		axios.post('/google_sign_up', {
			id_token
		}).then(() => this.setState({ redirect: true }))
			.catch(err => console.log(err))/*.finally(() => this.setState({ redirect: true }));*/
	};

	render() {
		if (this.state.redirect)
		return (
			<Redirect to={'/'}/>
		); return null;
	}

}