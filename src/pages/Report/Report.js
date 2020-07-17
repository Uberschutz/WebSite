import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Report.css';

import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import ProgressBar from "react-bootstrap/ProgressBar";
import { displayContent } from '../../utils/translationDisplay';
import axios from 'axios';

import ReactGA from 'react-ga';

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
			filters: [],
			filterData: [],
			dataExists: false
		};
		this.i = 1;
		this.editFilter = this.editFilter.bind(this);
		this.changeChild = this.changeChild.bind(this);
	}

	componentDidMount() {
		if (process.env.REACT_APP_ANALYTICS === 'true') {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
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
		if (this.state.filterData.length < 2)
			return;
		if (this.state.filters.includes(filter.target.dataset.filter)) {
			let filters = [...this.state.filters];
			let idx = this.state.filters.indexOf(filter.target.dataset.filter);
			filters.splice(idx, 1);
			if (filters.length === 1 && this.state.filterData.length > 0) {
				console.log(this.state.filterData, 'deleting', filters[0]);
				let data = this.state.filterData.find(obj => obj.key === filters[0]).value.map(obj => {
					return {name: this.capitalize(obj.name.toLowerCase()), value: obj.percentValue};
				});
				const idx = data.findIndex(d => d.name === 'Safe');
				const safe = data[idx];
				data.splice(idx, 1);
				data = [safe, ...data];
				console.log('Editing filter and data (deletion)', data, filters);
				this.setState({
					filters: filters,
					childData: data
				});
			} else {
				let data = this.state.filterData.find(obj => obj.key === 'All').value.map(obj => {
					return {name: this.capitalize(obj.name.toLowerCase()), value: obj.percentValue};
				});
				const idx = data.findIndex(d => d.name === 'Safe');
				const safe = data[idx];
				data.splice(idx, 1);
				data = [safe, ...data];
				this.setState({
					filters: filters,
					childData: data
				});
			}
		} else {
			if (this.state.filters.length === 0 && this.state.filterData.length > 0) {
				console.log(this.state.filterData, 'adding', this.state.filters);
				let data = this.state.filterData.find(obj => obj.key === filter.target.dataset.filter).value.map(obj => {
					return {name: this.capitalize(obj.name.toLowerCase()), value: obj.percentValue};
				});
				const idx = data.findIndex(d => d.name === 'Safe');
				const safe = data[idx];
				data.splice(idx, 1);
				data = [safe, ...data];
				console.log('Editing filter and data (addition)', data, filter.target.dataset.filter);
				this.setState({
					filters: this.state.filters.concat([filter.target.dataset.filter]),
					childData: data
				});
			} else {
				console.log('request', this.state.filters, filter.target.dataset.filter, this.state.selectedChild)
				this.setState({
					filters: this.state.filters.concat([filter.target.dataset.filter])
				}, () => {
					this.changeChild(this.state.selectedChild === 'General' ? 'general' : this.state.childrens.find(c => c.name === this.state.selectedChild));
				});
			}
		}
	}

	changeChild(data) {
		const child = data.target.dataset.child;
		if (!Number.isInteger(+child) && child === 'general') {
			axios.post('/get_data', {
				services: this.state.filters
			}).then(response => {
				const values = response.data.find(obj => obj.key === 'All').value;
				let data;
				if (values.length > 0) {
					data = response.data.find(obj => obj.key === 'All').value.map(obj => {
						return {name: this.capitalize(obj.name.toLowerCase()), value: obj.percentValue};
					});
					const idx = data.findIndex(d => d.name === 'Safe');
					const safe = data[idx];
					data.splice(idx, 1);
					data = [safe, ...data];
					console.log(data);
					this.setState({selectedChild: 'General', isOpen: false, childData: data, filterData: response.data, dataExists: safe.value !== 0});
				} else {
					console.log('An error occurred: There is no data from the report API');
					this.setState({selectedChild: 'General', isOpen: false, filterData: response.data, dataExists: false});
				}
			}).catch(err => {
				console.log(err);
				this.setState({selectedChild: 'General', isOpen: false, dataExists: false})
			})
		} else {
			this.getChildData(this.state.childrens[+child]);
		}
	}

	getChildData(child) {
		axios.post('/get_data', {
			discordId: child.discordId,
			services: this.state.filters
		}).then(response => {
			const values = response.data.find(obj => obj.key === 'All').value;
			let data;
			if (values.length > 0) {
				data = response.data.find(obj => obj.key === 'All').value.map(obj => {
					return {name: this.capitalize(obj.name.toLowerCase()), value: obj.percentValue};
				});
				const idx = data.findIndex(d => d.name === 'Safe');
				const safe = data[idx];
				data.splice(idx, 1);
				data = [safe, ...data];
				this.setState({selectedChild: child.name, isOpen: false, childData: data, filterData: response.data, dataExists: safe.value !== 0});
			} else {
				console.log('An error occurred: There is no data from the report API');
				this.setState({selectedChild: child.name, isOpen: false, filterData: response.data, dataExists: false});
			}
		}).catch(err => {
			console.log(err);
			this.setState({selectedChild: child.name, isOpen: false, dataExists: false})
		})
	}

	render() {
		let i = 1;
		if (this.state.logged) {
			return (
				<div>
					<div>
						<ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} size="lg" className="mrg-begin">
							<DropdownToggle caret color="info">
								{this.state.selectedChild ? this.state.selectedChild : displayContent(this.state.lang, 0, 'report')}
							</DropdownToggle>
							<DropdownMenu className="drop btn">
								{
									this.state.childrens.map((d, idx) => {
										return (
											<div>
												<div data-child={idx} onClick={this.changeChild}>{d.name}</div>
											</div>
										)
									})
								}
								<div>
									<div data-child="general" onClick={this.changeChild}>General</div>
								</div>
							</DropdownMenu>
						</ButtonDropdown>
					</div>
					<div className="left-filter">
						<span>{displayContent(this.state.lang, i++, 'report')}</span> <br/> <br/>
						<div className="filter-align">
							<input type="checkbox" checked={this.state.filters.includes('Discord')} onChange={this.editFilter} data-filter="Discord"/> Discord <br/>
							<input type="checkbox" checked={this.state.filters.includes('plugin')} onChange={this.editFilter} data-filter="plugin"/> {displayContent(this.state.lang, i++, 'report')} <br/>
						</div>
					</div>
					<div style={{width: '70%'}} className="btn content-right">
						{
							this.state.childData.map((d, idx) => {
								if (d.name === 'Safe') {
									return (
										<div style={{height: 32, margin: 10}}>
											<text style={{float: "left", marginRight: 10, width: 150, textAlign: 'right'}}>{displayContent(this.state.lang, idx + i, 'report')}</text><ProgressBar style={{height: 24, fontSize: 15}} animated striped variant="success" now={Math.round(d.value)} label={`${Math.round(d.value)}%`}/>
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
											<text style={{float: "left", marginRight: 10, width: 150, textAlign: 'right'}}>{displayContent(this.state.lang, idx + i, 'report')}</text><ProgressBar style={{height: 24, fontSize: 15}} animated striped variant={color} now={Math.round(d.value)} label={`${Math.round(d.value)}%`}/>
										</div>
									);
								}
							})
						}
						<div className="summary">
							<Summary lang={this.state.lang} child={this.state.selectedChild} safe={this.state.dataExists ? Math.round(this.state.childData.find(c => c.name === 'Safe').value) : -1}/>
						</div>
					</div>
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
    render() {
    	let i = 0;
	    if (this.props.child && this.props.safe > 0) {
	        return (
                <div className="responsive-image">
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
