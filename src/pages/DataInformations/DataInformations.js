import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";

import ReactGA from 'react-ga';

export default class DataInformations extends Component {

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
        return(
            <div className="responsive-image donnees">
                <h3 className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</h3>
                <span className="italic-txt">{displayContent(this.state.lang, i++,'dataInformations')}</span> <br/> <br/>

                <h5 className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</h5>
                <span className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</span> <br/>
                <span>{displayContent(this.state.lang, i++,'dataInformations')}</span>
                <ul>
                    <li>{displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>{displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>{displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>{displayContent(this.state.lang, i++,'dataInformations')}</li>
                </ul>
                <span>{displayContent(this.state.lang, i++,'dataInformations')}</span> <br/> <br/>

                <h5 className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</h5>
                <span>{displayContent(this.state.lang, i++,'dataInformations')}</span> <br/> <br/>

                <h5 className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</h5>
                <span>{displayContent(this.state.lang, i++,'dataInformations')}</span>
                <ul>
                    <li>Google Analytics (analytics.google.com) {displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>Microsoft Azure (azure.microsoft.com) {displayContent(this.state.lang, i++,'dataInformations')}</li> <br/>
                </ul>

                <h5 className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</h5>
                <span>{displayContent(this.state.lang, i++,'dataInformations')}</span> <br/> <br/>

                <h5 className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</h5>
                <span>{displayContent(this.state.lang, i++,'dataInformations')}</span>
                <ul>
                    <li>Microsoft Azure (azure.microsoft.com){displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>Firstheberg (firstheberg.com){displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>Google Analytics (analytics.google.com) {displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>Microsoft Azure (azure.microsoft.com){displayContent(this.state.lang, i++,'dataInformations')}</li> <br/>
                </ul>

                <h5 className="h7-font">{displayContent(this.state.lang, i++,'dataInformations')}</h5>
                <span>{displayContent(this.state.lang, i++,'dataInformations')}</span> <br/>
                <ul>
                    <li>{displayContent(this.state.lang, i++,'dataInformations')}</li>
                    <li>{displayContent(this.state.lang, i++,'dataInformations')}</li> <br/>
                </ul>

                <div className="margin-footer">
                    <h3 className="h7-font">Contact</h3>
                    <span>Überschutz</span> <br/>
                    <span>uberschutz.epitech@gmail.com</span> <br/>
                </div>
            </div>
        )
    }
}
