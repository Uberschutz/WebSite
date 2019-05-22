import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Parameters.css';

import { Modal, Button } from 'reactstrap'
import Card from "reactstrap/es/Card";
import CardText from "reactstrap/es/CardText";
import CardTitle from "reactstrap/es/CardTitle";
import CardFooter from "reactstrap/es/CardFooter";

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
		const newChild = [{name: 'Thomas', age: '23'}, {name: 'Marianne', age: '21'}];

		this.setState({childrens: newChild});
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
		this.setState({showModal: !this.state.showModal});
		if (!this.state.showModal) {
			this.setState({name: '', age: ''});
		}
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
			childrens[this.state.id] = {name: this.state.name, age: this.state.age};
			this.setState({childrens: childrens});
			this.toggleModal();
		}
	}

	saveChildren() {
		console.log('Here call to the user account API');
	}

	editChildren(children) {
		console.log('Here call to the user account API to edit children', children);
		this.setState({name: children.name, age: children.age, state: 'Save', id: this.state.childrens.indexOf(children)});
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

	render() {
        return (
            <div className="card align-card">
                {/*<button onClick={this.toggleModal}>Ajouter un enfant</button>*/}
	            <Modal isOpen={this.state.showModal} toggle={this.toggleModal} onClosed={() => this.setState({state: 'Created'})}>
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
								<CardTitle>{child.name}</CardTitle>
								<CardText>{child.age}</CardText>
								<CardFooter>
									<Button className="btn-mod btn btn-danger" onClick={() => this.deleteChildren(child)}>Delete</Button>
									<Button className="btn-mod btn btn-success" onClick={() => this.editChildren(child)}>Edit</Button>
								</CardFooter>
							</Card>
						);
					})
				}
				<Button className="btn btn-primary add-child" onClick={this.toggleModal}>New</Button>
            </div>
        )
    }
}

export default Parametres;