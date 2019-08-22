import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Report.css';

import {ButtonDropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import ReactApexChart from "react-apexcharts";
import {ProgressBar} from "react-bootstrap";

import bad from '../assets/icons8-triste-80.png'
import neutral from '../assets/icons8-neutre-80.png'
import good from '../assets/icons8-content-80.png'

class Report extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			selectedChild: 'Enfants',
			childData: []
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	componentDidMount() {
		console.log('whut');
	}

	changeChild(name) {
		const datas = this.getChildData(name);
		this.setState({selectedChild: name, isOpen: false, childData: datas});
	}

	getChildData(name) {
		/* Here call Christian API */
		const min = 0;
		const max = 100;
		return [
			{name: 'Safe', value: min + Math.random() * (max - min)},
			{name: 'Toxicity', value: min + Math.random() * (max - min)},
			{name: 'Obscenity', value: min + Math.random() * (max - min)},
			{name: 'Racism', value: min + Math.random() * (max - min)},
			{name: 'Insult', value: min + Math.random() * (max - min)},
			{name: 'Threat', value: min + Math.random() * (max - min)},
			{name: 'Truly toxic', value: min + Math.random() * (max - min)},
			{name: 'Profanity', value: min + Math.random() * (max - min)},
			{name: 'Inflammatory', value: min + Math.random() * (max - min)},
			{name: 'Identity Attack', value: min + Math.random() * (max - min)},
			{name: 'Hating', value: min + Math.random() * (max - min)},
		];
	}

	render() {
		//if (this.props.logged) {
			//let i = 0;
			return (
				<div>
					<ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} size="lg">
						<DropdownToggle color="info">
							{this.state.selectedChild}
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
						</DropdownMenu>
					</ButtonDropdown>
					{/*<BarChart/>*/}
					<div className="uber-color2">
						<span>Blablabla c'est pas bien</span>
					</div>
					<br/>
					<div style={{width: '50%'}} className="btn">
						{
							this.state.childData.map(d => {
								if (d.name === 'Safe') {
									return (
										<div style={{height: 32, margin: 10}}>
											<text style={{float: "left", marginRight: 10, width: 150, textAlign: 'right'}}>{d.name}</text><ProgressBar style={{height: 24, fontSize: 15}} animated striped variant="success" now={Math.round(d.value)} label={`${Math.round(d.value)}%`}/>
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
											<text style={{float: "left", marginRight: 10, width: 150, textAlign: 'right'}}>{d.name}</text><ProgressBar style={{height: 24, fontSize: 15}} animated striped variant={color} now={Math.round(d.value)} label={`${Math.round(d.value)}%`}/>
										</div>
									);
								}
							})
						}
						{/*<div style={{height: 32, margin: 10}}>
							<text style={{float: "left", marginRight: 10, width: 100, textAlign: 'right'}}>Toxicity</text><ProgressBar style={{height: 24, fontSize: 15}} animated striped variant="success" now={40} label="40%"/>
						</div>
						<div style={{height: 32, margin: 10}}>
							<text style={{float: "left", marginRight: 10, width: 100, textAlign: 'right'}}>Obsenity</text><ProgressBar style={{height: 24}} animated striped variant="info" now={20} label="20%"/>
						</div>
						<div style={{height: 32, margin: 10}}>
							<text style={{float: "left", marginRight: 10, width: 100, textAlign: 'right'}}>Racism</text><ProgressBar style={{height: 24}} animated striped variant="warning" now={60} label="60%"/>
						</div>*/}
					</div>
					<h5>La navigation Internet de votre enfant est à X % saine</h5>
					<Smiley/>
				</div>
			);
		} /*else {
			return (
				<div>
					<Unauthorized/>
				</div>
			)
		}*/
	//}
}

class Smiley extends Component {
	render() {
		return (
			<div>
				<img src={bad} alt="bad"/>
				<img src={neutral} alt="neutral"/>
				<img src={good} alt="good"/>
			</div>
		)
	}
}

class BarChart extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			options: {
				plotOptions: {
					bar: {
						barHeight: '100%',
						distributed: true,
						horizontal: true,
						dataLabels: {
							position: 'bottom'
						},
					}
				},
				legend: {
					show: false
				},
				colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e'
				],
				dataLabels: {
					enabled: true,
					textAnchor: 'start',
					style: {
						colors: ['#000']
					},
					formatter: function (val, opt) {
						return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
					},
					offsetX: 0,
					dropShadow: {
						enabled: true
					},
				},
				stroke: {
					width: 1,
					colors: ['#fff']
				},
				xaxis: {
					categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
						'United States'
					],
					labels: {
						show: true
					},
					/*axisTicks: {
						show: false
					},*/
					tickAmount: undefined,
					tickPlacement: 'on',
					min: 0,
					max: 100,
					//type: 'numeric'
				},
				yaxis: {
					labels: {
						show: true
					}
				},
				title: {
					text: 'Custom DataLabels',
					align: 'center',
					floating: true,
				},
				subtitle: {
					text: 'Category Names as DataLabels inside bars',
					align: 'center',
				},
				tooltip: {
					theme: 'dark',
					x: {
						show: true
					},
					y: {
						title: {
							formatter: function () {
								return ''
							}
						}
					}
				}
			},
			series: [{
				data: [70, 30, 48, 12, 26, 5, 86, 33]
			}],
		}
	}

	render() {
		return (
			<div id="chart">
				<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350"/>
			</div>
		)
	}
}

export default Report;