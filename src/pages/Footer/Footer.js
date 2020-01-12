import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/HomePage.css';

import { Link } from 'react-router-dom';
import {displayContent} from "../../utils/translationDisplay";

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
			console.log(language, this.state.lang, 'kek')
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
            <div className="uber-color2 form-align footer">
                <Link to ='/Contact+FAQ'>
                    <button type="button" className="btn btn-primary button-footer">Contact</button>
                </Link>
                <br/>
                <span>
                    © 2018 - 2020
                </span>
                <br/>
                <span>
                    {displayContent(this.state.lang, i++, 'footer')}<br/>{displayContent(this.state.lang, i++, 'footer')}<a href="https://icones8.fr">icons8</a> <br/>
                </span>
            </div>
        )
    }
}

export default Footer;