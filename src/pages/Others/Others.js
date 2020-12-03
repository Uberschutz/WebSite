import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";

import searching from '../../assets/fogg-searching.png';

import ReactGA from 'react-ga';
import Cookies from "universal-cookie/lib";

const cookies = new Cookies();

export default class Others extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
        };
    }

    componentDidMount() {
        const cookieConsent = cookies.get('Universal-cookieAnalytics') || false;
        if (process.env.REACT_APP_ANALYTICS === 'true' && cookieConsent) {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
        if (this.props.base) {
            const {base: {language}} = this.props;
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
        return(
            <div>
                <h4 className="button-footer">{displayContent(this.state.lang, i++, 'others')}</h4>
                <div className="row responsive-image Home">
                    <img src={searching} alt="searching" className="col"/>
                    <ul className="col">
                        <li>{displayContent(this.state.lang, i++, 'others')}<a href={"https://github.com/Uberschutz/MobileSchutz"}>GitHub mobile</a></li>
                        <li>{displayContent(this.state.lang, i++, 'others')}<a href={"https://github.com/Uberschutz/Uberschutz_chrome"}>GitHub plug-in</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
