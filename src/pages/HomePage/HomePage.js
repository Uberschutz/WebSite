import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/HomePage.css';

import ReactGA from 'react-ga';

import canvas from '../../assets/canvas2.png';
import whois from '../../assets/CacherPseudo.jpg';
import software from '../../assets/icons8-boite-à-logiciel-64.png'
import navigation from '../../assets/icons8-carte-au-trésor-150.png'
import blocking from '../../assets/icons8-cadenas-100.png'

import { displayContent } from '../../utils/translationDisplay';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: 'fr'
		};
    };

	componentDidMount() {
		if (process.env.ANALYTICS === 'true') {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
		if (this.props.base) {
			const {base: {language}} = this.props;
			// console.log(this.props, 'in home');
			// const { base: { token }} = this.props;
			if (this.state.lang !== language) {
				this.setState({
					lang: language
				})
			}
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		// this.props.base.language !== prevProps.base.language && this.setState({lang: this.props.base.language}, () => console.log('re'));
		if (this.props.base && this.props.base.language !== this.state.lang) {
			// this.props.base.language !== prevState.language && this.setState({lang: this.props.base.language}, () => console.log('re'));
			this.setState({lang: this.props.base.language})
		}
	}

	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	console.log('next', nextProps)
	// 	return (this.props === nextProps);
	// }

	render() {
		let i = 0;
        return (
            <div>
                <img src={canvas} alt="canvas" className="responsive-image"/>
                <span className="text-span">
	                {displayContent(this.state.lang, i++, 'home')}
                    <br/> {displayContent(this.state.lang, i++, 'home')}
                    <br/> {displayContent(this.state.lang, i++, 'home')}
                </span>
                <div className="row responsive-image Home">
                    <div>
                        <br/><br/>
                        <img src={whois} alt="whois" className="responsive-image"/>
                    </div>
                    <div className="txt-intro responsive-image">
                        <h3 className="h7-font">
	                        {displayContent(this.state.lang, i++, 'home')}
                        </h3>
                        <h6 className="h6-font">
	                        {displayContent(this.state.lang, i++, 'home')}
                            <br/>
	                        {displayContent(this.state.lang, i++, 'home')}
                        </h6>
                        <h8 className="italic-txt">
	                        {displayContent(this.state.lang, i++, 'home')}
                        </h8>
                    </div>
                </div>
                <div className="Home responsive-image">
                    <br/><br/>
                    <h5 className="rappel-info h7-font">
	                    {displayContent(this.state.lang, i++, 'home')}
                    </h5>
                    <br/><br/>
                    <div className="row responsive-image">
                        <div className="col">
                            <img src={software} alt="software"/>
                            <br/><br/>
                            <span className="rappel-info">
			                    {displayContent(this.state.lang, i++, 'home')}
                            </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={navigation} alt="navigation"/>
                            <br/><br/>
                            <span className="rappel-info">
        	                    {displayContent(this.state.lang, i++, 'home')}
		                    </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={blocking} alt="blocking"/>
                            <br/> <br/>
                            <span className="rappel-info">
        	                    {displayContent(this.state.lang, i++, 'home')}
		                    </span>
                        </div>
                    </div>
                    <br/>

                    <div className="">
                        <h7 className="rappel-info responsive-image">
                            {displayContent(this.state.lang, i, 'home')}
                            <br/>
                        </h7>
                        <br/>
                    </div>


                </div>
            </div>
        )
    }
}

export default HomePage;
