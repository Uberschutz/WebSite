import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/HomePage.css';

import canvas from '../assets/canvas2.png';
import whois from '../assets/CacherPseudo.jpg';
import software from '../assets/logiciel.png';
import navigation from '../assets/navigation.png';
import blocking from '../assets/bloquant.png';

const content = require('../assets/text');

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

	displayContent(content) {
		// return(<div dangerouslySetInnerHTML={ {__html: content} }/>)
		return(content)
	}

	render() {
		let i = 0;
        return (
            <div>
                <img src={canvas} alt="canvas" className="responsive-image"/>
                <span className="text-span">
	                {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                    <br/> {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                    <br/> {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                </span>
                <div className="row responsive-image Home">
                    <div>
                        <br/><br/>
                        <img src={whois} alt="whois"/>
                    </div>
                    <div className="txt-intro">
                        <h3 className="h7-font">
	                        {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                        </h3>
                        <h6 className="h6-font">
	                        {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                            <br/>
	                        {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                        </h6>
                        <h8 className="italic-txt">
	                        {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                        </h8>
                    </div>
                </div>
                <div className="Home responsive-image">
                    <br/><br/>
                    <h5 className="rappel-info h7-font">
	                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                    </h5>
                    <br/><br/>
                    <div className="row responsive-image">
                        <div className="col">
                            <img src={software} alt="software"/>
                            <br/><br/>
                            <span className="rappel-info">
			                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
                            </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={navigation} alt="navigation"/>
                            <br/><br/>
                            <span className="rappel-info">
        	                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
		                    </span>
                        </div>
                        <div className="col responsive-image">
                            <img src={blocking} alt="blocking"/>
                            <br/> <br/>
                            <span className="rappel-info">
        	                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i++])}
		                    </span>
                        </div>
                    </div>
                    <br/>
                    <h7 className="rappel-info">
	                    {this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.home[i])}
                    </h7>
                    <br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default HomePage;