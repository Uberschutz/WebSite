import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/HomePage.css';

import canvas from '../../assets/canvas2.png';
import whois from '../../assets/CacherPseudo.jpg';
import software from '../../assets/logiciel.png';
import navigation from '../../assets/navigation.png';
import blocking from '../../assets/bloquant.png';
import { displayContent } from '../../utils/translationDisplay';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: 'fr'
		};
	// }
    // state = {
    //     lang: 'fr'
    };

	componentDidMount() {
		console.log('mount');
		const {base: { language }} = this.props;
        // console.log(this.props, 'in home');
		// const { base: { token }} = this.props;
		if (this.state.lang !== language) {
			this.setState({
				lang: language
			})
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base.language !== prevProps.base.language && this.setState({lang: this.props.base.language}, () => console.log('re'));
	}

	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	console.log('next', nextProps)
	// 	return (this.props === nextProps);
	// }

	render() {
		let i = 0;
		console.log('render');
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
                        <img src={whois} alt="whois"/>
                    </div>
                    <div className="txt-intro">
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
                    <h7 className="rappel-info">
	                    {displayContent(this.state.lang, i, 'home')}
                    </h7>
                    <br/><br/><br/>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
// 	getServiceData: bindActionCreators(actions.getServiceData, dispatch),
// 	sendServiceData: bindActionCreators(actions.sendServiceData, dispatch),
// 	saveAuthToken: bindActionCreators(actions.saveAuthToken, dispatch),
// 	subscribeToService: bindActionCreators(actions.subscribeToService, dispatch),
// 	updateFill: bindActionCreators(actions.updateFill, dispatch),
// 	updateActionFill: bindActionCreators(actions.updateActionFill, dispatch),
// 	toggleAREA: bindActionCreators(actions.toggleAREA, dispatch),
// })
//
// const mapStateToProps = state => ({
// 	base: state.base,
// })
//
// export default HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePage;