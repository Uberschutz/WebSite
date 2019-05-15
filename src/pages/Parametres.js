import React, { Component } from 'react';
import Modal from 'react-modal';
import '../styles/bootstrap.css';
import ModalBody from "reactstrap/es/ModalBody";

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
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentWillMount() {
		console.log('Here call to the user account API'); // or in componentDidMount
	}

	openModal() {
		this.setState({showModal: true});
	}

	closeModal() {
		this.setState({showModal: false});
		console.log('closing')
	}

	saveChildren(child) {
		console.log('Here call to the user account API');
	}

	deleteChildren(child) {
		console.log('Here call to the user account API');
	}

	setFirstName() {
		console.log('Here call to the user account API', this.state.name);
		let modified = this.state.actual;
		modified.name = this.state.name;
		this.setState({actual: modified});
	}

	setAge(age) {
		console.log('Here call to the user account API');
	}

	render() {
        return (
            <div>
                <button onClick={this.openModal}>Ajouter un enfant</button>
	            <Modal
		            isOpen={this.state.showModal}
		            ariaHideApp={false}
		            // onAfterOpen={this.afterOpenModal}
		            onRequestClose={this.closeModal}
		            // style={customStyles}
		            contentLabel="Example Modal">
		                <button onClick={this.closeModal}>Fermer</button>
			            <form onSubmit={() => this.setFirstName()}>
				            <label>
					            Name:
					            <input type="text" value={this.state.name} onChange={(name) => this.setState({name: name.target.value})}/>
				            </label>
				            <input type="submit" value="Submit" />
			            </form>
	            </Modal>
            </div>
        )
    }
}

export default Parametres;