import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Parameters.css';

import { Modal, Button } from 'reactstrap'
import Card from "reactstrap/es/Card";
import CardText from "reactstrap/es/CardText";
import CardTitle from "reactstrap/es/CardTitle";
import CardFooter from "reactstrap/es/CardFooter";
import {Icon} from 'antd';

const content = require('../assets/text');

class Parametres extends Component {
	constructor(props) {
		super(props);
		this.state = {
			childrens: [],
			options: [],
			showModal: false,
			// actual: {},
			name: '',
			age: '',
			id: null,
			state: 'Create',
			alphaErr: false,
			numErr: false
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	displayContent(content) {
		// return(<div dangerouslySetInnerHTML={ {__html: content} }/>)
		return(content)
	}

	componentWillMount() {
		const options = [{name: 'Reports', enabled: false}, {name: 'Alerts', enabled: false}, {name: 'Uberschutz', enabled: false}];
		const newChild = [{name: 'Thomas', age: '23', options: options}, {name: 'Marianne', age: '21', options: options}];

		this.setState({childrens: newChild, options: options});
		console.log('Here call to the user account API to load children'); // or in componentDidMount
	}

	// componentDidMount() {
	// 	const newChild = [{name: 'Thomas', age: '23'}];
	//
	// 	this.setState({childrens: newChild})
	// 	console.log('Here call to the user account API to load children'); // or in componentDidMount
	// }

	static isAlpha(char) {
		const re = /^[a-zA-Z]+$/g;
		return re.test(char);
	}

	static isNum(char) {
		const re = /^[0-9]+$/g;
		return re.test(char);
	}

	toggleModal() {
		if (this.state.showModal) {
			const options = [{name: 'Reports', enabled: false}, {name: 'Alerts', enabled: false}, {name: 'Uberschutz', enabled: false}];
			this.setState({name: '', age: '', id: null, state: 'Create', alphaErr: false, numErr: false, options: options},
				() => this.setState({showModal: !this.state.showModal}));
		} else {
			this.setState({showModal: !this.state.showModal});
		}
	}

	createChildren() {
		this.setState({alphaErr: this.state.name === '', numErr: this.state.age === ''});
		if (this.state.name === '' || this.state.age === '')
			return;
		if (this.state.state === 'Create') {
			console.log('Here call to the user account creation API', this.state.name, this.state.age);
			const newChild = {name: this.state.name, age: this.state.age, options: this.state.options};
			let list = this.state.childrens;
			list.push(newChild);
			this.setState({childrens: list}, () => this.toggleModal());
		} else {
			console.log('Here call to the user account edition API', this.state.name, this.state.age);
			let childrens = this.state.childrens;
			childrens[this.state.id + 1] = {name: this.state.name, age: this.state.age, options: this.state.options};
			this.setState({childrens: childrens}, () => this.toggleModal());
		}
	}

	saveChildren() {
		console.log('Here call to the user account API');
	}

	editChildren(children) {
		console.log('Here call to the user account API to edit children', children);
		this.setState({
				name: children.name,
				age: children.age,
				state: 'Save',
				id: this.state.childrens.indexOf(children) - 1,
				options: children.options
			}, () => this.toggleModal());
	}

	deleteChildren(children) {
		console.log('Here call to the user account API to delete children', children);
		let list = this.state.childrens;
		const idx = list.indexOf(children);
		list.splice(idx, 1);
		this.setState({childrens: list});
	}

	setFirstName(name) {
		console.log('Here set children name', name);
		if (name && !Parametres.isAlpha(name)) {
			this.setState({alphaErr: true});
		} else {
			this.setState({alphaErr: false});
		}
		this.setState({name: name})
	}

	setAge(age) {
		console.log('Here set children age', age);
		if (age && !Parametres.isNum(age)) {
			this.setState({numErr: true});
		} else {
			this.setState({numErr: false});
		}
		this.setState({age: age});
	}

	toggleOption(idx) {
		let options = JSON.parse(JSON.stringify(this.state.options));
		// const idx = options.findIndex(o => o.name === optionName);
		options[idx].enabled = !options[idx].enabled;
		this.setState({options: options});
	}

	render() {
		return (
            <div className="card align-card">
	            <Modal isOpen={this.state.showModal} toggle={this.toggleModal} onClosed={() => this.setState({state: 'Create'})}>
					<form> <br/>
						<div className="align-card">
							<label className="child-field">
								{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[0])}<br/>
								{this.state.alphaErr ? <input className="child-field form-box-error form-control" type="text" value={this.state.name} onChange={(name) => this.setFirstName(name.target.value)}/> :
								<input className="child-field" type="text" value={this.state.name} onChange={(name) => this.setFirstName(name.target.value)}/>}
							</label>
							<br/>
							<label className="child-field">
								Age<br/>
								{this.state.numErr ? <input className="child-field form-box-error form-control" type="text" value={this.state.age} onChange={(age) => this.setAge(age.target.value)}/> :
								<input className="child-field" type="text" value={this.state.age} onChange={(age) => this.setAge(age.target.value)}/>}
							</label>
						</div>
						<br/>
						<div className="row">
						{
							this.state.options.map((o, key) => {
								return (
									<div key={key} className="col-2">
										<input type="checkbox" checked={o.enabled} onChange={() => this.toggleOption(key)}/>{" " + content.filter(obj => obj.lang === this.props.lang)[0].pages.options[key]}
									</div>
								)
							})
						}
						</div>
						<br/><br/>
						<div className="align-card">
							<Button className="save-child btn change-child" onClick={() => this.createChildren()}>
								{this.state.state === 'Create' ? this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[6]) :
									this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[7])}
							</Button>
							<Button className="btn btn-danger change-child" onClick={this.toggleModal}>{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[1])}</Button>
							<br/>
							{this.state.alphaErr || this.state.numErr ? (<div><span className="address-params text-danger">{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[2])}</span><br/><br/></div>) : null}
						</div>
					</form>
	            </Modal>
				{
					this.state.childrens.map((child, index) => {
						return (
							<Card body inverse key={index} className="child-card">
								<CardTitle>{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[0])} : {child.name}</CardTitle>
								<CardText>Age : {child.age}</CardText>
								<CardFooter>
									<Button className="btn-mod btn btn-danger" onClick={() => this.deleteChildren(child)}>
										{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[3])} <Icon type="delete" className="size-icon"/>
									</Button>
									<Button className="btn-mod btn btn-success" onClick={() => this.editChildren(child)}>
										{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[4])} <Icon type="edit" className="size-icon" />
									</Button>
								</CardFooter>
							</Card>
						);
					})
				}
				<Button className="btn btn-primary add-child" onClick={this.toggleModal}>
					{this.displayContent(content.filter(obj => obj.lang === this.props.lang)[0].pages.parameters[5])} <Icon type="user-add" className="size-icon"/>
				</Button>
            </div>
        )
    }
}

export default Parametres;