import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Parameters.css';
import axios from 'axios';

import { Modal, Button } from 'reactstrap';
// import { Card, CardText, CardTitle, CardFooter } from "reactstrap";
import {Icon} from 'antd';

import DisplayChildrenList from '../../components/ChildCards';
import OptionsList from '../../components/OptionsList';
import { displayContent } from '../../utils/translationDisplay';
import Unauthorized from ".././Unauthorized";

class Parameters extends Component {
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
			numErr: false,
			lang: 'fr',
			logged: false,
			token: ''
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.editChildren = this.editChildren.bind(this);
		this.deleteChildren = this.deleteChildren.bind(this);
	}

	// componentWillMount() {
	// }

	componentDidMount() {
		const options = [{name: 'Reports', enabled: false}, {name: 'Alerts', enabled: false}, {name: 'Uberschutz', enabled: false}, {name: 'Adds', enabled: false}];
		// const newChild = [{name: 'Thomas', age: '23', options: options}, {name: 'Marianne', age: '21', options: options}];
		console.log('Here call to the user account API to load children'); // or in componentDidMount
		if (this.props.base) {
			const { base: { language, logged, token } } = this.props;
			console.log(language, this.state.lang, 'kek', this.props);
				this.setState({
					lang: language,
					// childrens: newChild,
					options: options,
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
		if (this.props.base && (this.props.base.language !== this.state.lang || this.props.base.logged !== this.state.logged)) {
			// console.log(prevProps, this.props);
			this.setState({lang: this.props.base.language, logged: this.props.base.logged}, () => console.log('re'));
		}
	}

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
			const options = [{name: 'Reports', enabled: false}, {name: 'Alerts', enabled: false}, {name: 'Uberschutz', enabled: false}, {name: 'Adds', enabled: false}];
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
			console.log('Here call to the user account creation API', this.state.name, this.state.age, this.state.token);
			const newChild = {name: this.state.name, age: this.state.age, options: this.state.options};
			let list = this.state.childrens;
			list.push(newChild);
			axios.post('/children', {
				action: 'add',
				name: this.state.name,
				age: this.state.age,
				options: []
			}, {
				headers: {
					'x-access-token': this.state.token
				}
			}).then(response => {
				console.log(response.data);
				this.setState({childrens: list}, () => this.toggleModal());
			}).catch(err => {
				console.log(err);
			});
		} else {
			console.log('Here call to the user account edition API', this.state.name, this.state.age);
			let childrens = this.state.childrens;
			axios.post('/children', {
				action: 'edit',
				name: childrens[this.state.id + 1].name,
				newName: this.state.name,
				age: childrens[this.state.id + 1].age,
			}, {
				headers: {
					'x-access-token': this.state.token
				}
			}).then(response => {
				console.log(response.data);
				childrens[this.state.id + 1] = {name: this.state.name, age: this.state.age, options: this.state.options};
				this.setState({childrens: childrens}, () => this.toggleModal());
			}).catch(err => {
				console.log(err);
			})
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
		axios.post('/children', {
			action: 'delete',
			name: children.name
		}, {
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {
			console.log(response.data);
			list.splice(idx, 1);
			this.setState({childrens: list});
		}).catch(err => {
			console.log(err);
		});
	}

	setFirstName(name) {
		console.log('Here set children name', name);
		if (name && !Parameters.isAlpha(name)) {
			this.setState({alphaErr: true});
		} else {
			this.setState({alphaErr: false});
		}
		this.setState({name: name})
	}

	setAge(age) {
		console.log('Here set children age', age);
		if (age && !Parameters.isNum(age)) {
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
		if (this.state.logged) {
			return (
				<div className="card align-card">
					<Modal isOpen={this.state.showModal} toggle={this.toggleModal}
					       onClosed={() => this.setState({state: 'Create'})} size='lg'>
						<form><br/>
							<div className="align-card">
								<label className="child-field">
									{displayContent(this.state.lang, 0, 'parameters')}<br/>
									{this.state.alphaErr ? <input
											className="child-field form-box-error form-control"
											type="text" value={this.state.name}
											onChange={(name) => this.setFirstName(name.target.value)}/> :
										<input className="child-field" type="text"
										       value={this.state.name}
										       onChange={(name) => this.setFirstName(name.target.value)}/>}
								</label>
								<br/>
								<label className="child-field">
									Age<br/>
									{this.state.numErr ? <input
											className="child-field form-box-error form-control"
											type="text" value={this.state.age}
											onChange={(age) => this.setAge(age.target.value)}/> :
										<input className="child-field" type="text"
										       value={this.state.age}
										       onChange={(age) => this.setAge(age.target.value)}/>}
								</label>
							</div>
							<br/>
							<OptionsList
								listClassName={'row'}
								optionClassName={'col-4 align'}
								options={this.state.options}
								translations={displayContent(this.state.lang, -1, 'options')}
								toggleOption={this.toggleOption.bind(this)}

							/>
							<br/><br/>
							<div className="align-card">
								<Button className="save-child btn change-child"
								        onClick={() => this.createChildren()}>
									{this.state.state === 'Create' ? displayContent(this.state.lang, 6, 'parameters') :
										displayContent(this.state.lang, 7, 'parameters')}
								</Button>
								<Button className="btn btn-danger change-child"
								        onClick={this.toggleModal}>{displayContent(this.state.lang, 1, 'parameters')}</Button>
								<br/>
								{this.state.alphaErr || this.state.numErr ? (<div><span
									className="address-params text-danger">{displayContent(this.state.lang, 2, 'parameters')}</span><br/><br/>
								</div>) : null}
							</div>
						</form>
					</Modal>
					<DisplayChildrenList
						childrens={this.state.childrens}
						title={displayContent(this.state.lang, 0, 'parameters')}
						delete={displayContent(this.state.lang, 3, 'parameters')}
						edit={displayContent(this.state.lang, 4, 'parameters')}
						editChildren={this.editChildren}
						deleteChildren={this.deleteChildren}
					/>
					<Button className="btn btn-primary add-child"
					        onClick={this.toggleModal}>
						{displayContent(this.state.lang, 5, 'parameters')} <Icon
						type="user-add" className="size-icon"/>
					</Button>
				</div>
			)
		} else {
			return (
				<Unauthorized/>
				)
		}
    }
}

export default Parameters;