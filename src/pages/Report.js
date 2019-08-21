import React, { Component } from 'react';
import '../styles/bootstrap.css';
import {ButtonDropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import ReactApexChart from "react-apexcharts";
import {ProgressBar} from "react-bootstrap";

class Report extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
	        selectedChild: 'Enfants'
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    changeChild(name) {
    	this.setState({selectedChild: name, isOpen: false});
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
		                <text style={{float: "left", marginRight: 10, verticalAlign: "text-top"}}>Toxicity</text><ProgressBar  animated striped variant="success" now={40} label="40%"/><br/>
		                <text style={{float: "left", marginRight: 10}}>Obsenity</text><ProgressBar animated striped variant="info" now={20} /><br/>
		                <text style={{float: "left", marginRight: 10}}>Racism</text><ProgressBar animated striped variant="warning" now={60} /><br/>
	                </div>
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