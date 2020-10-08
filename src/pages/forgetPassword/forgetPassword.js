import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";

import ReactGA from 'react-ga';

export default class forgetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
        };
    }

    componentDidMount() {
        if (process.env.REACT_APP_ANALYTICS === 'true') {
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
        return (
            <div className="responsive-image">
                <span>Coucou</span>
            </div>
        );
    }
}
