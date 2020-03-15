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
			logged: false,
			token: '',
			childrens: [],
			filters: []
		};
		this.i = 1;
		this.editFilter = this.editFilter.bind(this);
	}

	componentDidMount() {
		if (this.props.base) {
			const { base: { language, logged, token } } = this.props;
				this.setState({
					lang: language,
					logged: logged,
					token
				}, () => {
					axios.post('/children', {
						action: 'list'
					}, {
						headers: {
							'x-access-token': this.state.token
						}
					}).then(response => {
						console.log(response.data);
						this.setState({
							childrens: response.data
						});
					}).catch(err => {
						console.log(err);
					});
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

	editFilter(filter) {
		if (filter in this.state.filters) {
			this.setState({
				filters: this.state.slice(this.state.filters.findIndex(filter))
			});
		} else {
			this.setState({
				filters: this.state.filter.push(filter)
			})
		}
	}

	changeChild(child) {
		if (typeof child === 'string' && child === 'general') {
			axios.post('/get_data').then(response => {
				const data = response.data.map(obj => {
					return {name: this.capitalize(obj.key.toLowerCase()), value: obj.value};
				});
				this.setState({selectedChild: 'General', isOpen: false, childData: data});
			}).catch(err => {
				console.log(err);
			})
		} else {
			this.getChildData(child)
		}
	}

	getChildData(child) {
		axios.post('/get_data', {
			discordId: child.discordId
		}).then(response => {
			const data = response.data.map(obj => {
				return {name: this.capitalize(obj.key.toLowerCase()), value: obj.value};
			});
			this.setState({selectedChild: child.name, isOpen: false, childData: data});
		}).catch(err => {
			console.log(err);
		})
	}

	render() {
		let i = 0;
		if (this.state.logged) {
			return (
				<div>
					<div>
						<ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} size="lg">
							<DropdownToggle color="info">
								{this.state.selectedChild ? this.state.selectedChild : displayContent(this.state.lang, i++, 'report')}
							</DropdownToggle>
							<DropdownMenu className="drop btn">
								{
									this.state.childrens.map((d, idx) => {
										return (
											<div>
												<div onClick={() => {this.changeChild(d)}}>{d.name}</div>
											</div>
										)
									})
								}
								<div>
									<div onClick={() => {this.changeChild('general')}}>General</div>
								</div>
							</DropdownMenu>
						</ButtonDropdown>
					</div> <br/>

					<div className="left-filter">
						<span>{displayContent(this.state.lang, i++, 'report')}</span> <br/> <br/>
						<div className="filter-align">
							<input type="checkbox"/> Discord <br/>
							<input type="checkbox"/> {displayContent(this.state.lang, i++, 'report')} <br/>
						</div>
					</div>

					<div style={{width: '50%'}} className="btn">
						{
							this.state.childData.map((d, idx) => {
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