import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Parameters.css';
import axios from 'axios';

import { Modal, ModalHeader, ModalFooter, Button } from 'reactstrap';
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
			token: '',
			discordId: ''
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.editChildren = this.editChildren.bind(this);
		this.deleteChildren = this.deleteChildren.bind(this);
		this.options = [{name: 'Reports', enabled: false}, {name: 'Uberschutz', enabled: false}, {name: 'Alerts', enabled: false}, {name: 'Adds', enabled: false}];
	}

	componentDidMount() {
		if (this.props.base) {
			const { base: { language, logged, token } } = this.props;
				this.setState({
					lang: language,
					options: this.options,
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
			this.setState({name: '', age: '', id: null, state: 'Create', alphaErr: false, numErr: false, options: this.options},
				() => this.setState({showModal: !this.state.showModal}));
		} else {
			this.setState({showModal: !this.state.showModal, state: 'Create'});
		}
	}

	createChildren() {
		this.setState({alphaErr: this.state.name === '', numErr: this.state.age === '' && isNaN(this.state.age)});
		if (this.state.name === '' || this.state.age === '')
			return;
		if (this.state.state === 'Create') {
			axios.post('/children', {
				action: 'add',
				name: this.state.name,
				age: this.state.age,
				options: this.state.options,
				discordId: this.state.discordId
			}, {
				headers: {
					'x-access-token': this.state.token
				}
			}).then(response => {
				console.log(response.data);
				this.setState({childrens: response.data}, () => this.toggleModal());
			}).catch(err => {
				console.log(err);
			});
		} else {
			axios.post('/children', {
				action: 'edit',
				name: this.state.childrens[this.state.id].name,
				newName: this.state.name,
				age: this.state.age,
				options: this.state.options,
				discordId: this.state.discordId
			}, {
				headers: {
					'x-access-token': this.state.token
				}
			}).then(response => {
				console.log(response.data);
				this.setState({childrens: response.data}, () => this.toggleModal());
			}).catch(err => {
				console.log(err);
			})
		}
	}

	editChildren(children) {
		this.setState({
			name: children.name,
			age: children.age,
			state: 'Save',
			id: this.state.childrens.indexOf(children),
			options: children.options,
			discordId: children.discordId
		}, () => this.toggleModal());
	}

	deleteChildren(children) {
		axios.post('/children', {
			action: 'delete',
			name: children.name
		}, {
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {
			console.log(response.data);
			this.setState({childrens: response.data});
		}).catch(err => {
			console.log(err);
		});
	}

	setFirstName(name) {
		if (name && !Parameters.isAlpha(name)) {
			this.setState({alphaErr: true, name});
		} else {
			this.setState({alphaErr: false, name});
		}
	}

	setAge(age) {
		if (age && !Parameters.isNum(age)) {
			this.setState({numErr: true, age});
		} else {
			this.setState({numErr: false, age});
		}
	}

	setDiscordId(id) {
		if (id) {
			this.setState({discordId: id});
		} else {
			this.setState({discordId: ''});
		}
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
					<Modal isOpen={this.state.showModal} size="xl" toggle={this.toggleModal} contentClassName="custom-modal-style" centered={true}
					       /*onClosed={() => this.setState({state: 'Create'})}*/>
						<form><br/>
							<div className="align-card">
								<ModalHeader className="tag-header" style={{backgroundColor: "#3498db"}}>Informations</ModalHeader>
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
								<br/>
								<label className="child-field">
									Discord ID (Bêta)<br/>
									<input className="child-field" type="text"
										   value={this.state.discordId}
										   onChange={(id) => this.setDiscordId(id.target.value)}/>
								</label>
								<br/> <br/>
							</div>
							<ModalHeader className="tag-header" style={{backgroundColor:"#3498db"}}>Paramètres de protection</ModalHeader>
							<br/>
							<OptionsList
								listClassName={'row margin-footer'}
								optionClassName={'col-4 align'}
								options={this.state.options}
								translations={displayContent(this.state.lang, -1, 'options')}
								toggleOption={this.toggleOption.bind(this)}
							/>

							<ModalFooter>
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
							</ModalFooter>
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