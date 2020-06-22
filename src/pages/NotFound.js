import React, { Component } from "react";
import notFound from "../assets/fogg-page-not-found.png";
import '../styles/Connection.css'
import {displayContent} from "../utils/translationDisplay";

import ReactGA from 'react-ga';

export default class NotFound extends Component {

	constructor(props) {
		super(props);

		this.state = {
			lang: 'fr',
		};
	}

	componentDidMount() {
		ReactGA.pageview(window.location.pathname + window.location.search);
		if (this.props.base) {
			const { base: { language} } = this.props;
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

	render() {
		let i = 0;
		return (
			<div>
				<h1 className="text-xl-center forbidden">
					{displayContent(this.state.lang, i++, 'notFound')}
				</h1> <br/>
				<img src={notFound} alt="notFound"/>
			</div>
		);
	}
}