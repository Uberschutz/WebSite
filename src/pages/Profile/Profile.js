import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Profile.css';

import { Icon } from 'antd';
import {displayContent} from '../../utils/translationDisplay';
import { Alert } from 'reactstrap';

import Unauthorized from "../Unauthorized";
import newsletter from "../../assets/icons8-mail-100.png";
import loading from '../../assets/Spinner-1s-70px.gif';

import axios from 'axios';

import fileDownload from "js-file-download";

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: 'fr',
			logged: false,
			email: '',
			firstname: '',
			lastname: '',
			newsletter: false,
			subscribed: false,
			subscription: '',
			token: null,
			load: false,
			newsletterAlert: '',
			statusErr: false
		};
		// this._handleKeyPressed = this._handleKeyPressed.bind(this);
		this.onChangeFirstname = this.onChangeFirstname.bind(this);
		this.onChangeLastname = this.onChangeLastname.bind(this);
		this.changeFirstName = this.changeFirstName.bind(this);
		this.changeLastName = this.changeLastName.bind(this);
		this.getAccountData = this.getAccountData.bind(this);
		this.deleteAccount = this.deleteAccount.bind(this);
		this.unsubscribe_newsletter = this.unsubscribe_newsletter.bind(this);
		this.getUser = this.getUser.bind(this);
	}

	componentDidMount() {
		if (this.props.base) {
			const { base: { language, logged } } = this.props;
			this.setState({
				logged, language
			}, this.getUser);
		// 	axios.get('/get_subscription', {
		// 		headers: {
		// 			'x-access-token': token
		// 		}
		// 	}).then(response => {
		// 		this.setState({
		// 			lang: language,
		// 			logged : logged,
		// 			token,
		// 			newsletter,
		// 			email,
		// 			lastname,
		// 			firstname,
		// 			subscription: response.data
		// 		});
		// 	}).catch(err => {
		// 		console.log(err);
		// 		this.setState({
		// 			lang: language,
		// 			logged : logged,
		// 			token,
		// 			newsletter,
		// 			email,
		// 			lastname,
		// 			firstname
		// 		});
		// 	})
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base !== prevProps.base && this.setState({lang: this.props.base.language, logged: this.props.base.logged}, () => console.log('re'));
	}

	getUser() {
		if (this.props.base && this.props.base.token) {
			axios.get('/get_auth_user', {
				headers: {
					token: this.props.base.token
				}
			}).then(response => {
				if (response && response.data) {
					this.setState({
						firstname: response.data.firstname,
						lastname: response.data.lastname,
						email: response.data.email,
						newsletter: response.data.newsletter,
						subscription: response.data.subscription
					});
				}
			}).catch(err => {
				console.log(err);
			})
		}
	}

	unsubscribe_newsletter() {
		this.setState({
			load: true
		}, () => {
				axios.post('/unsubscribe_newsletter', {
			}, {
				headers: {
					'x-access-token': this.state.token
				}
			}).then(response => {
				console.log(response.data);
				this.setState({
					newsletter: false,
					load: false,
					statusErr: false,
					newsletterAlert: 'Successfully unsubscribed to the newsletter'
				});
				this.props.setNewsletter(false);
			}).catch(err => {
				this.setState({
					load: false,
					statusErr: true,
					newsletterAlert: 'An error occurred while unsubscribing your account to the newsletter'
				});
				console.log(err);
			}).finally(() => {
					setTimeout(() => {
						this.setState({
							newsletterAlert: ''
						})
					}, 1000 * 5)
			});
		});
	}

	changeLastName() {
		axios.post('/rename', {
			key: 'lastname',
			value: this.state.lastname
		},{
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {
			this.props.setUser(this.state.email, this.state.lastname, this.state.firstname, this.state.token);
		}).catch(err => {
			console.log(err, "Error");
		})
	}

	changeFirstName() {
		axios.post('/rename', {
			key: 'firstname',
			value: this.state.firstname
		},{
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {
			this.props.setUser(this.state.email, this.state.lastname, this.state.firstname, this.state.token);
		}).catch(err => {
			console.log(err, "Error");
		})
	}

	onChangeFirstname(value) {
		this.setState({
			firstname: value.target.value
		})
	}

	onChangeLastname(value) {
		this.setState({
			lastname: value.target.value
		})
	}

	deleteAccount() {
		axios.post('/delete_account', '',{
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {
			this.props.setLogged(false);
			this.props.setUser(null, null, null, null);
			this.props.history.push("/");
		}).catch(err => {
			console.log(err, "Error");
		})
	}

	getAccountData() {
		axios.get('/gdpr', {
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {
			try {
				fileDownload(JSON.stringify(response.data), 'data.json');
			} catch (e) {
				console.log(e);
			}
		}).catch(err => {
			console.log(err);
		})
	}

	_handleKeyPressed(e, action) {
		if (e.key === "Enter") {
			if (action === "firstname") {
				this.changeFirstName();
			} else {
				this.changeLastName();
			}
		}
	}

    render() {
		if (this.state.logged) {
		    let i = 0;
		    return (
			    <div className="fixed-size description-txt">
					<div className="row button-footerP">
						<h4 className="name-font col-sm-auto">
							{displayContent(this.state.lang, i++, 'profile')}
						</h4>
						<div className="input-group input-group-sm col-sm-2">
							<input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onKeyPress={(e) => { this._handleKeyPressed(e, "lastname")}} value={this.state.lastname} onChange={this.onChangeLastname}/>
							<button className="btn btn-primary btn-sm" onClick={this.changeLastName}>OK</button>
						</div> <br/>
					</div>
					<div className="row button-footerP">
						<h5 className="name-font col-sm-auto">
							{displayContent(this.state.lang, i++, 'profile')}
						</h5>
						<div className="input-group input-group-sm col-sm-2">
							<input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onKeyPress={(e) => { this._handleKeyPressed(e, "firstname")}} value={this.state.firstname} onChange={this.onChangeFirstname}/>
							<button className="btn btn-primary btn-sm" onClick={this.changeFirstName}>OK</button>
						</div><br/>
					</div>
					<h6>
						{displayContent(this.state.lang, i++, 'profile')}<br/><br/>
						{displayContent(this.state.lang, i++, 'profile')}
						<span>{this.state.subscription}</span>
						{/*Ecrire achat Üz ici*/}
					</h6>
					{
					++i && this.state.newsletter ?
						<div>
							<h6 className="right-btn">
								Newsletter : <button className="btn btn-dark btn-sm" onClick={this.unsubscribe_newsletter}>
								<img src={newsletter} alt="newsletter"/>{displayContent(this.state.lang, i - 1, 'profile')} {
								this.state.load ? <img src={loading} alt="loading"/> : null
							}
							</button>
							</h6>
							{
								this.state.newsletterAlert !== '' ? <Alert
									color={this.state.statusErr ? "danger" : "success"}>{this.state.newsletterAlert}</Alert> : null
							}
						</div> : null
					}
					<h6>
						{displayContent(this.state.lang, i++, 'profile')}
					</h6><br/>
				    <table className="table">
					    <thead className="table-primary">
					    <tr>
						    <th scope="col">Date</th>
						    <th scope="col">{displayContent(this.state.lang, i++, 'profile')}</th>
						    <th scope="col">{displayContent(this.state.lang, i++, 'profile')}</th>
					    </tr>
					    </thead>
					    <tbody>
					    <tr>
						    <th scope="row">22/05/2019</th>
						    <td>Achat d'Überschutz Premium</td>
						    <td>
							    <Icon type="check-circle" theme="twoTone"
							          twoToneColor="#52c41a"/>
						    </td>
					    </tr>
					    <tr>
						    <th scope="row">25/05/2019</th>
						    <td>Prélèvement n°1 Überschutz Premium</td>
						    <td>En cours ...</td>
					    </tr>
					    <tr>
						    <th scope="row">25/06/2019</th>
						    <td>Prélèvement n°2 Überschutz Premium</td>
						    <td>Prochainement</td>
					    </tr>
					    </tbody>
				    </table>
				    <br/>
				    <div className="row txt-align">
						<button className="col-2 btn btn-primary button-footerP" onClick={this.getAccountData}>{displayContent(this.state.lang, i++, 'profile')}</button>
						<button className="col-2 btn btn-danger button-footerP" onClick={this.deleteAccount}>{displayContent(this.state.lang, i++, 'profile')}</button>
					</div>
			    </div>
		    )
	    } else {
    		return (
    			<Unauthorized/>
		    )
	    }
    }
}

export default Profile;