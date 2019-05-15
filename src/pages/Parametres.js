import React, { Component } from 'react';
// import Modal from 'react-modal';
import '../styles/bootstrap.css';
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
			age: ''
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	componentWillMount() {
		const newChild = [{name: 'Thomas', age: '23'}, {name: 'Marianne', age: '21'}];

		this.setState({childrens: newChild})
		console.log('Here call to the user account API to load children'); // or in componentDidMount
	}

	// componentDidMount() {
	// 	const newChild = [{name: 'Thomas', age: '23'}];
	//
	// 	this.setState({childrens: newChild})
	// 	console.log('Here call to the user account API to load children'); // or in componentDidMount
	// }

	toggleModal() {
		this.setState({showModal: !this.state.showModal});
	}

	createChildren() {
		console.log('Here call to the user account API', this.state.name, this.state.age);
	}

	saveChildren() {
		console.log('Here call to the user account API');
	}

	editChildren() {
		console.log('Here call to the user account API');
	}

	deleteChildren() {
		console.log('Here call to the user account API');
	}

	setFirstName(name) {
		console.log('Here set children name', name);
		this.setState({name: name})
	}

	setAge(age) {
		console.log('Here set children age', age);
		this.setState({age: age});
	}

	render() {
        return (
            <div className="card">
                {/*<button onClick={this.toggleModal}>Ajouter un enfant</button>*/}
	            <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
					<button onClick={this.toggleModal}>Fermer</button>
					<form onSubmit={() => this.createChildren()}>
						<label>
							Name<br/>
							<input type="text" value={this.state.name} onChange={(name) => this.setFirstName(name.target.value)}/>
						</label>
						<br/>
						<label>
							Age<br/>
							<input type="text" value={this.state.age} onChange={(age) => this.setAge(age.target.value)}/>
						</label>
						<br/><br/>
						<input type="submit" value="Submit" />
					</form>
	            </Modal>
				{
					this.state.childrens.map(child => {
						console.log(child);
						return (
							<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: 10, width: '50%', alignItems: 'center', alignSelf: 'center' }}>
								<CardTitle>{child.name}</CardTitle>
								<CardText>{child.age}</CardText>
								<CardFooter>
									<Button onClick={(child) => this.deleteChildren(child)}>Delete</Button>
									<Button onClick={(child) => this.editChildren(child)}>Edit</Button>
								</CardFooter>
							</Card>
						);
					})
				}
				<Button color="primary" style={{ width: '50%', alignSelf: 'center'}} onClick={this.toggleModal}>New</Button>
            </div>
        )
    }
}

export default Parametres;