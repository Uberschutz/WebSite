import React, { Component } from "react";
import '../styles/Connection.css'
import {displayContent} from "../utils/translationDisplay";
import inComing from "../assets/fogg-in-coming.png";

export default class InComing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
        };
    }

    componentDidMount() {
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
            <div className="responsive-image">
                <h1 className="text-xl-center forbidden">
                    {displayContent(this.state.lang, i++, 'inComing')}
                </h1> <br/>
                <img src={inComing} alt="inComing" className="responsive-image"/>
            </div>
        );
    }
}
