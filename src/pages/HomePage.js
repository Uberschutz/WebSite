import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import canvas from '../assets/canvas2.png';
import whois from '../assets/CacherPseudo.jpg';
//import software from '../assets/logiciel.png';
import software from '../assets/icons8-boite-à-logiciel-64.png'
//import navigation from '../assets/navigation.png';
import navigation from '../assets/icons8-carte-au-trésor-150.png'
//import blocking from '../assets/bloquant.png';
import blocking from '../assets/icons8-cadenas-100.png'
import { displayContent } from '../utils/translationDisplay';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: 'fr'
		};
	}

	componentDidMount() {
		this.setState({
			lang: this.props.lang
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(this.props.lang);
	}

	render() {
		let i = 0;
        return (
            <div>
                <img src={canvas} alt="canvas" className="responsive-image"/>
                <span className="text-span">
	                {displayContent(this.props.lang, i++, 'home')}
                    <br/> {displayContent(this.props.lang, i++, 'home')}
                    <br/> {displayContent(this.props.lang, i++, 'home')}
                </span>
                <div className="row responsive-image Home">
                    <div>
                        <br/><br/>
                        <img src={whois} alt="whois"/>
                    </div>
                    <div className="txt-intro">
                        <h3 className="h7-font">
	                        {displayContent(this.props.lang, i++, 'home')}
                        </h3>
                        <h6 className="h6-font">
	                        {displayContent(this.props.lang, i++, 'home')}
                            <br/>
	                        {displayContent(this.props.lang, i++, 'home')}
                        </h6>
                        <h8 className="italic-txt">
	                        {displayContent(this.props.lang, i++, 'home')}
                        </h8>
                    </div>
                </div>
                <div className="Home responsive-image">
                    <br/><br/>
                    <h5 className="rappel-info h7-font">
	                    {displayContent(this.props.lang, i++, 'home')}
                    </h5>
                    <br/><br/>
                    <div className="row responsive-image">
                        <div className="col">
                            <img src={software} alt="software"/>
                            <br/>
                            <span className="rappel-info">
			                    {displayContent(this.props.lang, i++, 'home')}
                            </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={navigation} alt="navigation"/>
                            <br/>
                            <span className="rappel-info">
        	                    {displayContent(this.props.lang, i++, 'home')}
		                    </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={blocking} alt="blocking"/>
                            <br/>
                            <span className="rappel-info">
        	                    {displayContent(this.props.lang, i++, 'home')}
		                    </span>
                        </div>
                    </div>
                    <br/>
                    <h7 className="rappel-info">
	                    {displayContent(this.props.lang, i, 'home')}
                    </h7>
                    <br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default HomePage;