import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/HomePage.css';
import {displayContent} from "../../utils/translationDisplay";

const Link = require("react-router-dom").Link;

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: 'fr'
		}
	}

	componentDidMount() {
		if (this.props.base) {
			const {base: {language}} = this.props;
			// console.log(language, this.state.lang, 'kek')
			if (this.state.lang !== language) {
				this.setState({
					lang: language
				})
			}
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base.language !== prevProps.base.language && this.setState({lang: this.props.base.language}, () => console.log('re'));
	}

    render() {
		let i = 0;
        return (
			<footer className="uber-color2">
				<div>
					<Link to ='/Contact+FAQ'>
						<button type="button" className="btn btn-primary button-footer">Contact</button>
					</Link>
					<br/>
					<span>
                    © 2018 - {new Date().getFullYear()}
                </span>
					<br/>
					<span>
                    {displayContent(this.state.lang, i++, 'footer')}<br/>{displayContent(this.state.lang, i++, 'footer')}<a href="https://icones8.fr">icons8</a> & <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">dmitri13</a><br/>
                </span>
				</div>
				<div className="button-footer row txt-align">
					<Link to={'/DataInformations'}>
						<span className="col">{displayContent(this.state.lang, 0, 'dataInformations')}</span>
					</Link>
					<Link to={'/Others'}>
						<span className="col">{displayContent(this.state.lang, 0, 'others')}</span>
					</Link>
				</div>
			</footer>
        )
    }
}

export default Footer;
