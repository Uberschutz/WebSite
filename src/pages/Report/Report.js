import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Report.css';

import {ButtonDropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import {ProgressBar} from "react-bootstrap";
import { displayContent } from '../../utils/translationDisplay';
import axios from 'axios';

import bad from '../../assets/icons8-triste-80.png'
import neutral from '../../assets/icons8-neutre-80.png'
import good from '../../assets/icons8-content-80.png'
import Unauthorized from "../Unauthorized";

class Report extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			selectedChild: undefined,
			childData: [],
			lang: 'fr',
			logged: false
		};
		this.i = 1;
	}

	componentDidMount() {
		console.log('mount');
		if (this.props.base) {
			const { base: { language, logged } } = this.props;
			// console.log(this.props, 'in home');
			// const { base: { token }} = this.props;
				this.setState({
					lang: language,
					logged
					// selectedChild: displayContent(language, this.i++, 'report')
				})
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		if (this.props.base !== prevProps.base) {
			this.setState({lang: this.props.base.language, logged: this.props.base.logged}, () => console.log('re'));
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	capitalize = function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	// componentDidMount() {
	// 	console.log('whut');
	// 	this.setState({selectedChild: displayContent(this.props.lang, this.i++, 'report')})
	// }

	changeChild(name) {
		if (name === 'general') {
			axios.post('/get_data').then(response => {
				console.log(response);
				const data = response.data.map(obj => {
					return {name: this.capitalize(obj.key.toLowerCase()), value: obj.value};
				});
				console.log(data);
				this.setState({selectedChild: name, isOpen: false, childData: data});
			}).catch(err => {
				console.log(err);
			})
		} else {
			const datas = this.getChildData(name);
			this.setState({selectedChild: name, isOpen: false, childData: datas});
		}
	}

	getChildData(name) {
		/* Here call Christian API */
		const min = 0;
		const max = 100;
		return [
			{name: "Safe", value: min + Math.random() * (max - min)},
			{name: "Toxicity", value: min + Math.random() * (max - min)},
			{name: "Obscenity", value: min + Math.random() * (max - min)},
			{name: "Racism", value: min + Math.random() * (max - min)},
			{name: "Insult", value: min + Math.random() * (max - min)},
			{name: "Threat", value: min + Math.random() * (max - min)},
			{name: "Truly toxic", value: min + Math.random() * (max - min)},
			{name: "Profanity", value: min + Math.random() * (max - min)},
			{name: "Inflammatory", value: min + Math.random() * (max - min)},
			{name: "Identity Attack", value: min + Math.random() * (max - min)},
			{name: "Hating", value: min + Math.random() * (max - min)},
		];
	}

	render() {
		if (this.state.logged) {
			return (
				<div>
                    <br/>
					<ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} size="lg">
						<DropdownToggle color="info">
							{/*{this.state.selectedChild}*/}
							{this.state.selectedChild ? this.state.selectedChild : displayContent(this.state.lang, 0, 'report')}
						</DropdownToggle>
						<DropdownMenu className="drop btn">
							<div>
								<div onClick={() => {this.changeChild('Thomas')}}>Thomas</div>
							</div>
							<div>
								<div onClick={() => {this.changeChild('Theo')}}>Théo</div>
							</div>
							<div>
								<div onClick={() => {this.changeChild('Philippe')}}>Philippe</div>
							</div>
							<div>
								<div onClick={() => {this.changeChild('general')}}>General</div>
							</div>
						</DropdownMenu>
					</ButtonDropdown>
					<br/>
					<div style={{width: '50%'}} className="btn">
						{
							this.state.childData.map((d, idx) => {
								console.log("ICI", idx, d);
								if (d.name === 'Safe') {
									return (
										<div style={{height: 32, margin: 10}}>
											<text style={{float: "left", marginRight: 10, width: 150, textAlign: 'right'}}>{displayContent(this.state.lang, idx + 1, 'report')}</text><ProgressBar style={{height: 24, fontSize: 15}} animated striped variant="success" now={Math.round(d.value)} label={`${Math.round(d.value)}%`}/>
										</div>
									);
								} else {
									var color;
									if (d.value <= 33)
										color = "info";
									else if (d.value <= 66)
										color = "warning";
									else
										color = "danger";
									return (
										<div style={{height: 32, margin: 10}}>
											<text style={{float: "left", marginRight: 10, width: 150, textAlign: 'right'}}>{displayContent(this.state.lang, idx + 1, 'report')}</text><ProgressBar style={{height: 24, fontSize: 15}} animated striped variant={color} now={Math.round(d.value)} label={`${Math.round(d.value)}%`}/>
										</div>
									);
								}
							})
						}
					</div>
					<Summary lang={this.state.lang} child={this.state.selectedChild} safe={this.state.childData.length > 0 ? Math.round(this.state.childData.find(c => c.name === 'Safe').value) : -1}/>
				</div>
			);
		} else {
			return (
				<div>
					<Unauthorized/>
				</div>
			)
		}
	}
}

class Summary extends Component {

    componentDidMount() {
        console.log("CACA", this.props.safe);
    }

    render() {
    	let i = 0;
	    if (this.props.child  && this.props.safe > 0) {
	        return (
                <div>
                    <h5> {displayContent(this.props.lang, i++, 'summary')} {this.props.child} {displayContent(this.props.lang, i++, 'summary')} {this.props.safe} {displayContent(this.props.lang, i++, 'summary')}</h5>
                    <br/>
	                {this.props.safe >= 0 && this.props.safe < 33 && <img src={bad} alt="bad"/>}
	                {this.props.safe >= 33 && this.props.safe < 66 && <img src={neutral} alt="neutral"/>}
	                {this.props.safe >= 66 && this.props.safe <= 100 && <img src={good} alt="good"/>}
                </div>
            )
        } else if (this.props.safe === -1 && this.props.child) {
	    	i = 3;
	    	return (
	    		<div>
					<h5>{displayContent(this.props.lang, i++, 'summary')} {this.props.child} {displayContent(this.props.lang, i++, 'summary')}</h5>
			    </div>
		    )
	    } else {
	        return null
        }
	}
}

export default Report;