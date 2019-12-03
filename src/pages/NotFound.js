import React, { Component } from "react";
import notFound from "../assets/fogg-page-not-found.png";
import '../styles/Connection.css'

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h1 className="text-xl-center forbidden">
					404 Not Found
				</h1> <br/>
				<img src={notFound} alt="notFound"/>
			</div>
		);
	}
}