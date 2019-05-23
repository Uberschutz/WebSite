import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Parameters.css';

import { Modal, Button } from 'reactstrap'
import Card from "reactstrap/es/Card";
import CardText from "reactstrap/es/CardText";
import CardTitle from "reactstrap/es/CardTitle";
import CardFooter from "reactstrap/es/CardFooter";
import {Icon} from 'antd';

class Parametres extends Component {
	constructor(props) {
		super(props);
		this.state = {
			childrens: [],
			options: [],
			showModal: false,
			actual: {},
			name: '',
			age: '',
			id: null,
			state: 'Create',
			alphaErr: false,
			numErr: false
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	componentWillMount() {
		const options = [{name: 'Reports', enabled: true}, {name: 'Alerts', enabled: false}, {name: 'Uberschutz', enabled: true}];
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
			this.setState({name: '', age: '', id: null, state: 'Create'});
		}
		this.setState({showModal: !this.state.showModal});
	}

	createChildren() {
		if (this.state.state === 'Create') {
			console.log('Here call to the user account API', this.state.name, this.state.age);
			const newChild = {name: this.state.name, age: this.state.age};
			let list = this.state.childrens;
			list.push(newChild);
			this.setState({childrens: list});
			this.toggleModal();
		} else {
			console.log('here', this.state.id);
			let childrens = this.state.childrens;
			childrens[this.state.id + 1] = {name: this.state.name, age: this.state.age};
			this.setState({childrens: childrens});
			this.toggleModal();
		}
	}

	saveChildren() {
		console.log('Here call to the user account API');
	}

	editChildren(children) {
		console.log('Here call to the user account API to edit children', children);
		this.setState({name: children.name, age: children.age, state: 'Save', id: this.state.childrens.indexOf(children) - 1, options: children.options});
		// console.log(this.state.name);
		// this.setFirstName(children.name);
		// this.setAge(children.age);
		this.toggleModal();
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

	toggleOption(optionName) {
		console.log(optionName);
		var options = this.state.options;
		const idx = optionName.indexOf(optionName);
		options[idx].enabled = !options[idx].enabled;
		this.setState({options: options});
	}

	render() {
        return (
            <div className="card align-card">
                {/*<button onClick={this.toggleModal}>Ajouter un enfant</button>*/}
	            <Modal isOpen={this.state.showModal} toggle={this.toggleModal} onClosed={() => this.setState({state: 'Create'})}>
					{/*<form onSubmit={() => this.createChildren()}>*/}
					<form> <br/>
						<div className="align-card">
							<label className="child-field">
								Name<br/>
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
										<input type="checkbox" onChange={() => this.toggleOption(o.name)}/>{" " + o.name}
									</div>
								)
							})
						}
						</div>
						<br/><br/>
						<div className="align-card">
							<Button className="save-child btn change-child" onClick={() => this.createChildren()}>{this.state.state}</Button>
							<Button className="btn btn-danger change-child" onClick={this.toggleModal}>Annuler</Button>
							<br/>
							{this.state.alphaErr || this.state.numErr ? (<div><span className="address-params text-danger">Invalid name or age</span><br/><br/></div>) : null}
						</div>
						{/*<input type="submit" value="Submit" />*/}
					</form>
	            </Modal>
				{
					this.state.childrens.map((child, index) => {
						// console.log(child);
						return (
							<Card body inverse key={index} className="child-card">
								<CardTitle>Name : {child.name}</CardTitle>
								<CardText>Age : {child.age}</CardText>
								<CardFooter>
									<Button className="btn-mod btn btn-danger" onClick={() => this.deleteChildren(child)}>
										Delete <Icon type="delete" className="size-icon"/>
									</Button>
									<Button className="btn-mod btn btn-success" onClick={() => this.editChildren(child)}>
										Edit <Icon type="edit" className="size-icon" />
									</Button>
								</CardFooter>
							</Card>
						);
					})
				}
				<Button className="btn btn-primary add-child" onClick={this.toggleModal}>
					New <Icon type="user-add" className="size-icon"/>
				</Button>
            </div>
        )
    }
}

export default Parametres;