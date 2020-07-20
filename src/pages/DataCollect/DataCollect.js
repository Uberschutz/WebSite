import React, { Component } from "react";
import {displayContent} from "../../utils/translationDisplay";

import ReactGA from 'react-ga';
const Link = require("react-router-dom").Link;

export default class DataCollect extends Component {

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

    acceptRGPD = () => {
        this.props.RGPD(true);
        this.props.history.push('/Registration');
    }

    /*acceptRGPD() {

    }*/

    render() {
        let i = 0;
        return (
          <div className="responsive-image">
              <div className="card text-center">
                  <div className="card-header">
                      <h4 className="card-title">{displayContent(this.state.lang, i++,'dataCollect')}</h4>
                  </div>
                  <div className="card-body title-intro">
                      <span>{displayContent(this.state.lang, i++,'dataCollect')} Überschutz, uberschutz.epitech@gmail.com {displayContent(this.state.lang, i++,'dataCollect')}</span><br/>
                      <span>{displayContent(this.state.lang, i++,'dataCollect')}</span> <br/>
                      <span>{displayContent(this.state.lang, i++,'dataCollect')} Überschutz.</span> <br/>
                      <span>{displayContent(this.state.lang, i++,'dataCollect')}</span> <br/>
                      <span>{displayContent(this.state.lang, i++,'dataCollect')}</span> <br/>
                      <span>{displayContent(this.state.lang, i++,'dataCollect')}</span> <br/>
                      <span>{displayContent(this.state.lang, i++,'dataCollect')} <a href="https://cnil.fr">cnil.fr</a> {displayContent(this.state.lang, i++,'dataCollect')}</span> <br/>
                      <span>{displayContent(this.state.lang, i++,'dataCollect')} test.controleparental.donnees@gmail.com</span>
                  </div>
              </div>
              <Link to={'/'}>
                  <button className="btn btn-danger button-border button-footer col-2">{displayContent(this.state.lang, i++,'dataCollect')}</button>
              </Link>
                  <button className="btn btn-primary button-border button-footer col-2" onClick={this.acceptRGPD}>{displayContent(this.state.lang, i++,'dataCollect')}</button>
          </div>
        );
    }
}
