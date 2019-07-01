import React, { Component } from 'react';

import '../styles/Connection.css';
import forbidden from '../assets/403-error.png';

export default class Unauthorized extends Component {
	render() {
		return (
			<div>
				<h1 className="text-xl-center forbidden">
					403 Forbidden
				</h1>
				<br/>
				<img src={forbidden} alt="forbidden"/>
			</div>
		);
	}
}