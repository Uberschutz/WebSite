import React, { Component } from "react";
import '../../styles/bootstrap.css';
import '../../styles/HomePage.css';
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
                <br/>
                <div className="card text-white bg-dark box-center">
                    <div className="card-body bg-dark item-align text-align">
                        <h5 className="card-title text-align">
                            {displayContent(this.state.lang, i++, 'forgetPassword')}
                        </h5>
                        <p className="card-text">
                            {displayContent(this.state.lang, i++, 'forgetPassword')}
                        </p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input /*value={this.state.email} onChange={this.onChangeEmail} onKeyPress={this._handleKeyPressed}*/ type="text" className="form-control" aria-label="Email"/>
                        </div>
                        <button /*onClick={this.connect}*/ type="button" className="btn btn-primary button-footer">{displayContent(this.state.lang, i++, 'forgetPassword')}</button> <br/>
                    </div>
                </div>
            </div>
        );
    }
}
