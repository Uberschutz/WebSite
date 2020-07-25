import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";
import "../../styles/Payement.css";

import ReactGA from 'react-ga';

export default class Payement extends Component {

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
        return(
            <div className="responsive-image">
                <h4>Panier</h4> <br/>
                <div className="row responsive-image">
                    <div className="col">
                        Récap avec détails
                    </div>
                    <div className="col-4 grey-background">
                        Petit encadré gris / bleu avec bouton payer en dessous
                    </div>
                </div>
            </div>
        )
    }
}
