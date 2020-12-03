import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Profile.css';

import Icon from 'antd/lib/icon/index';
import {displayContent, displayHttpMessages} from '../../utils/translationDisplay';
import Alert from 'reactstrap/lib/Alert';
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";

import Unauthorized from "../Unauthorized";
import newsletter from "../../assets/icons8-mail-100.png";
import loading from '../../assets/Spinner-1s-70px.gif';

import ReactGA from 'react-ga';

import axios from 'axios';

import fileDownload from "js-file-download";
import Modal from "reactstrap/lib/Modal";

import Cookies from "universal-cookie/lib";
const cookies = new Cookies();

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
			load: false,
			newsletterAlert: '',
			statusErr: false,
			emailModal: false,
			passwordModal: false,
			password: '',
			newPassword: '',
			confirmPassword: '',
			confirmEmail: '',
			badEmail: false,
			badPassword: false,
			noneData: '',
			noneDataBis: '',
			requestEmailSent: false,
			requestPasswordSent: false,
			deleteModal: false,
			emailError: '',
			passwordError: '',
			isNewEmail: false,
			isNewPassword: false,
			licenceModal: false
		};
		this._handleKeyPressed = this._handleKeyPressed.bind(this);
		this.onChangeFirstname = this.onChangeFirstname.bind(this);
		this.onChangeLastname = this.onChangeLastname.bind(this);
		this.changeFirstName = this.changeFirstName.bind(this);
		this.changeLastName = this.changeLastName.bind(this);
		this.getAccountData = this.getAccountData.bind(this);
		this.deleteAccount = this.deleteAccount.bind(this);
		this.unsubscribe_newsletter = this.unsubscribe_newsletter.bind(this);
		this.getUser = this.getUser.bind(this);
		this.toggleModalEmail = this.toggleModalEmail.bind(this);
		this.toggleModalPassword = this.toggleModalPassword.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
		this.onChangeConfirmEmail = this.onChangeConfirmEmail.bind(this);
		this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.toggleModalDelete = this.toggleModalDelete.bind(this);
		this.unsubscribe_licence = this.unsubscribe_licence.bind(this);
		this.toggleModalLicence = this.toggleModalLicence.bind(this);
	}

	componentDidMount() {
		const cookieConsent = cookies.get('Universal-cookieAnalytics') || false;
		if (process.env.REACT_APP_ANALYTICS === 'true' && cookieConsent) {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
		if (this.props.base) {
			const { base: { language, logged } } = this.props;
			this.setState({
				logged, language
			}, this.getUser);
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base !== prevProps.base && this.setState({lang: this.props.base.language, logged: this.props.base.logged}, () => console.log('re'));
	}

	getUser() {
		if (this.props.base && this.props.base.logged) {
			axios.get('/get_auth_user').then(response => {
				if (response && response.data) {
					this.setState({
						firstname: response.data.firstname,
						lastname: response.data.lastname,
						email: response.data.email,
						newsletter: response.data.newsletter,
						subscription: response.data.subscription,
						subscribed : !!response.data.subscription
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
			}).then(response => {
				// console.log(response.data);
				this.setState({
					newsletter: false,
					load: false,
					statusErr: false,
					newsletterAlert: this.state.lang === "en" ? response.data : displayHttpMessages(this.state.lang, response.status, response.data)
				});
				this.props.setNewsletter(false);
			}).catch(err => {
				this.setState({
					load: false,
					statusErr: true,
					newsletterAlert: this.state.lang === "en" ? err.response.data : displayHttpMessages(this.state.lang, err.response.status, err.response.data)
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

	unsubscribe_licence() {
		axios.post('/unsubscribe', {
		}).then(response => {
			this.setState({
				subscribed: false,
				licenceModal: false,
				subscription: null
			});
		}).catch(err => {
			console.log(err);
		});
	}

	changeLastName() {
		console.log("LastName: ", this.state.lastname);
		if (this.state.lastname !== '' && this.state.lastname !== null) {
			axios.post('/rename', {
				key: 'lastname',
				value: this.state.lastname
			}).then(response => {
				//this.props.setUser(this.state.email, this.state.lastname, this.state.firstname, this.state.token);
			}).catch(err => {
				console.log(err, "Error");
			})
		} else {
			this.setState( {
				noneData: displayContent(this.state.lang, 2, 'error'),
			}, () =>
				setTimeout(() =>
				this.setState({
					noneData: ''
				}), 1000 * 10)
			)
		}
	}

	changeFirstName() {
		if (this.state.firstname !== '' && this.state.lastname !== null) {
			axios.post('/rename', {
				key: 'firstname',
				value: this.state.firstname
			}).then(response => {
				//this.props.setUser(this.state.email, this.state.lastname, this.state.firstname, this.state.token);
			}).catch(err => {
				console.log(err, "Error");
			})
		} else {
			this.setState( {
				noneDataBis: displayContent(this.state.lang, 2, 'error'),
			}, () =>
			setTimeout(() =>
			this.setState({
				noneDataBis: ''
			}), 1000 * 10)
			)
		}
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
		axios.post('/delete_account', '').then(response => {
			this.props.setLogged(false);
			// this.props.setAuthToken(null);
			this.props.history.push("/");
		}).catch(err => {
			console.log(err, "Error");
		})
	}

	getAccountData() {
		axios.get('/gdpr', {
			responseType: "blob"
		}).then(response => {
			try {
				fileDownload(response.data, 'data.docx');
			} catch (e) {
				console.log(e);
			}
		}).catch(err => {
			console.log(err);
		})
	}

	_handleKeyPressed(e) {
		if (e.key === "Enter") {
			// console.log(e)
			// console.log(e.target)
			// console.log(e.target.dataset)
			// console.log(e.target.dataset.action)
			if (e.target.dataset.action === "firstname") {
				this.changeFirstName();
			} else {
				this.changeLastName();
			}
		}
	}

	toggleModalEmail() {
		if (this.state.emailModal) {
			this.setState({},
				() => this.setState({emailModal: !this.state.emailModal}));
		} else {
			this.setState({emailModal: !this.state.emailModal});
		}
	}

	toggleModalPassword() {
		if (this.state.passwordModal) {
			this.setState({},
				() => this.setState({passwordModal: !this.state.passwordModal}));
		} else {
			this.setState({passwordModal: !this.state.passwordModal});
		}
	}

	toggleModalDelete() {
		if (this.state.deleteModal) {
			this.setState({},
				() => this.setState({deleteModal: !this.state.deleteModal}));
		} else {
			this.setState({deleteModal: !this.state.deleteModal});
		}
	}

	toggleModalLicence() {
		if (this.state.licenceModal) {
			this.setState({},
				() => this.setState({licenceModal : !this.state.licenceModal}));
		} else {
			this.setState({licenceModal : !this.state.licenceModal});
		}
	}

	onChangePassword(psswd) {
		this.setState({
			password: psswd.target.value,
			badPassword: false
		});
	}

	onChangeEmail(mail) {
		let reg = /^[a-zA-Z0-9@.\-_]+$/;
		if (mail.target.value !== '' && !reg.test(mail.target.value)) {
			this.setState({
				email: mail.target.value,
				badEmail: true
			});
		} else {
			this.setState({
				email: mail.target.value,
				badEmail: false
			});
		}
	}

	onChangeConfirmPassword(confirmPsswd) {
		this.setState({confirmPassword: confirmPsswd.target.value});
	}

	onChangeConfirmEmail(confirmMail) {
		this.setState({confirmEmail: confirmMail.target.value});
	}

	onChangeNewPassword(newPsswd) {
		this.setState({newPassword: newPsswd.target.value});
	}

	updateEmail() {
		console.log(this.state);
		if (!this.state.email.includes("@") || this.state.email.startsWith("@") || this.state.email.endsWith("@")) {
			this.setState({
				badEmail: true,
				emailError: displayContent(this.state.lang, 0, 'error'),
			})
			return;
		}
		if (this.state.email === this.state.confirmEmail && this.state.confirmEmail !== '') {
			this.setState({requestEmailSent: true});
			axios.post('/change_email', {
				email: this.state.email
			}).then(response => {
					console.log(response.data);
				this.setState({
					requestEmailSent: false,
					emailModal: false,
					isNewEmail : true
				})
			}).catch(err => {
				console.log(err.response.data);
				this.setState({
					requestEmailSent: false,
					emailError: this.state.lang === "en" ? err.response.data : displayHttpMessages(this.state.lang, err.response.status, err.response.data)
				})
			}).finally(() => {
				setTimeout(() => {
					this.setState({
						emailError: ''
					})
				},
					1000 * 10)
			})
		} else if (this.state.email !== this.state.confirmEmail) {
			this.setState({
				badEmail: true
			})
		} else {
			this.setState( {
				noneData: displayContent(this.state.lang, 2, 'error'),
			})
		}
	}

	updatePassword() {
		if (this.state.newPassword.length < 8) {
			this.setState({
				badPassword: true,
				passwordError: displayContent(this.state.lang, 1, 'error'),
			})
			return;
		}
		if (this.state.newPassword === this.state.confirmPassword && this.state.newPassword !== '') {
			this.setState({requestPasswordSent: true});
			axios.post('/change_password', {
				passwd: this.state.password,
				new_passwd: this.state.newPassword
			}).then(response => {
				console.log(response.data);
				this.setState({
					requestPasswordSent: false,
					passwordModal: false,
					isNewPassword : true
				})
			}).catch(err => {
				console.log(err.response.data);
				this.setState({
					requestPasswordSent: false,
					passwordError: this.state.lang === "en" ? err.response.data : displayHttpMessages(this.state.lang, err.response.status, err.response.data)
				})
			}).finally(() => {
				setTimeout(() => {
						this.setState({
							passwordError: ''
						})
					},
					1000 * 10)
			})
		} else if (this.state.newPassword !== this.state.confirmPassword) {
			this.setState( {
				badPassword: true
			})
		} else {
			this.setState( {
				noneData: displayContent(this.state.lang, 2, 'error'),
			})
		}
	}

	emailAlert() {
		if (this.state.isNewEmail && !this.state.requestEmailSent) {
			setTimeout(() => {
				this.setState({
					isNewEmail: false
				})
			}, 1000 * 10)
			return (
				<div>
					<Alert color="success">{displayContent(this.state.lang, 11, 'modifications')}</Alert>
				</div>
			)
		} else if (!this.state.requestEmailSent && this.state.emailError) {
			setTimeout(() => {
				this.setState({
					emailError: false,
				})
			}, 1000 * 10)
			return (
				<div>
					<Alert color="danger">{displayContent(this.state.lang, 12, 'modifications')}</Alert>
				</div>
			)
		} else
			return null;
	}

	passwordAlert() {
		if (this.state.isNewPassword && !this.state.requestPasswordSent) {
			setTimeout(() => {
				this.setState({
					isNewPassword: false
				})
			}, 1000 * 10)
			return (
				<div>
					<Alert color="success">{displayContent(this.state.lang, 13, 'modifications')}</Alert>
				</div>
			)
		} else if (!this.state.requestPasswordSent && this.state.passwordError) {
			setTimeout(() => {
				this.setState({
					passwordError: false,
				})
			}, 1000 * 10)
			return (
				<div>
					<Alert color="danger">{displayContent(this.state.lang, 14, 'modifications')}</Alert>
				</div>
			)
		} else
			return null;
	}

    render() {
		if (this.state.logged) {
		    let i = 0;
		    let j = 0;
		    return (
			    <div className="fixed-size">
					<div className="description-txt">
						<div className="row button-footerP">
							<h4 className="name-font col-sm-auto">
								{displayContent(this.state.lang, i++, 'profile')}
							</h4>
							<div className="input-group input-group-sm col-sm-2">
								<input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" data-action="lastname" onKeyPress={this._handleKeyPressed} value={this.state.lastname} onChange={this.onChangeLastname}/>
								<button className="btn btn-primary btn-sm" onClick={this.changeLastName}>OK</button>
							</div> <br/>
						</div>
						{
							this.state.noneData !== '' ? <Alert color="danger" className="txt-align">{this.state.noneData}</Alert> : null
						}
						<div className="row button-footerP">
							<h5 className="name-font col-sm-auto">
								{displayContent(this.state.lang, i++, 'profile')}
							</h5>
							<div className="input-group input-group-sm col-sm-2">
								<input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" data-action="firstname" onKeyPress={this._handleKeyPressed} value={this.state.firstname} onChange={this.onChangeFirstname}/>
								<button className="btn btn-primary btn-sm" onClick={this.changeFirstName}>OK</button>
							</div><br/>
						</div>
						{
							this.state.noneDataBis !== '' ? <Alert color="danger" className="txt-align">{this.state.noneDataBis}</Alert> : null
						}
						<h6>
							{displayContent(this.state.lang, i++, 'profile')}<br/><br/>
							{displayContent(this.state.lang, i++, 'profile')}
							<span>{this.state.subscribed ? this.state.subscription : null}</span>
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
						{
							this.state.subscribed ?
								<div>
									<h6 className="right-btn">
										Licence : <button className="btn btn-danger btn-sm" onClick={this.toggleModalLicence}>Se désinscrire</button>
									</h6>
								</div> : null
						}
						<Modal isOpen={this.state.licenceModal} size="lg" toggle={this.toggleModalLicence} centered={true}>
							<ModalHeader>Êtes-vous sûre de vouloir supprimer votre licence ?</ModalHeader>
							<ModalBody centered={true} className="txt-align">
								<button className="btn btn-primary options-margin" onClick={this.unsubscribe_licence}>Oui</button>
								<button className="btn btn-danger options-margin" onClick={this.toggleModalLicence}>Non</button>
							</ModalBody>
						</Modal>
						{/*<h6>*/}
						{/*	{displayContent(this.state.lang, i++, 'profile')}*/}
						{/*</h6><br/>*/}
						{/*<table className="table">*/}
						{/*	<thead className="table-primary">*/}
						{/*	<tr>*/}
						{/*		<th scope="col">Date</th>*/}
						{/*		<th scope="col">{displayContent(this.state.lang, i++, 'profile')}</th>*/}
						{/*		<th scope="col">{displayContent(this.state.lang, i++, 'profile')}</th>*/}
						{/*	</tr>*/}
						{/*	</thead>*/}
						{/*	<tbody>*/}
						{/*	<tr>*/}
						{/*		<th scope="row">22/05/2019</th>*/}
						{/*		<td>Achat d'Überschutz Premium</td>*/}
						{/*		<td>*/}
						{/*			<Icon type="check-circle" theme="twoTone"*/}
						{/*				  twoToneColor="#52c41a"/>*/}
						{/*		</td>*/}
						{/*	</tr>*/}
						{/*	<tr>*/}
						{/*		<th scope="row">25/05/2019</th>*/}
						{/*		<td>Prélèvement n°1 Überschutz Premium</td>*/}
						{/*		<td>En cours ...</td>*/}
						{/*	</tr>*/}
						{/*	<tr>*/}
						{/*		<th scope="row">25/06/2019</th>*/}
						{/*		<td>Prélèvement n°2 Überschutz Premium</td>*/}
						{/*		<td>Prochainement</td>*/}
						{/*	</tr>*/}
						{/*	</tbody>*/}
						{/*</table>*/}
						{/*<br/>*/}
					</div>
					<button type="button" className="btn btn-outline-dark options-margin" onClick={this.toggleModalEmail}>{displayContent(this.state.lang, i++, 'profile')}</button>
					<Modal isOpen={this.state.emailModal} size="lg" toggle={this.toggleModalEmail} centered={true}>
						<ModalHeader>{displayContent(this.state.lang, j++, 'modifications')}</ModalHeader>
						<ModalBody>
							<label className="col-form-label options-margin">{displayContent(this.state.lang, j++, 'modifications')}</label>
							<input onChange={this.onChangeEmail} type="text" className="form-control" id="recipient-name"/> <br/>
							{
								this.state.emailError !== '' ? <Alert color="danger">{this.state.emailError}</Alert> : null
							}
							<label className="col-form-label options-margin">{displayContent(this.state.lang, j++, 'modifications')}</label>
							{
								this.state.badEmail ? <input onChange={this.onChangeConfirmEmail} type="text" className="form-control border border-danger" id="recipient-name"/> : <input onChange={this.onChangeConfirmEmail} type="text" className="form-control" id="recipient-name"/>
							}
							<br/>
							{
								this.state.requestEmailSent ? <img src={loading} className="align-card" alt="loading" className="body-image"/> : null
							}
						</ModalBody>
						<ModalFooter>
							<button className="btn btn-primary" onClick={this.updateEmail}>{displayContent(this.state.lang, j++, 'modifications')}</button>
							<button className="btn btn-danger" onClick={this.toggleModalEmail}>{displayContent(this.state.lang, j++, 'modifications')}</button>
						</ModalFooter>
					</Modal>
					{
						this.emailAlert()
					}
					<button type="button" className="btn btn-outline-dark options-margin" onClick={this.toggleModalPassword}>{displayContent(this.state.lang, i++, 'profile')}</button>
					<Modal isOpen={this.state.passwordModal} size="lg" toggle={this.toggleModalPassword} centered={true}>
						<ModalHeader>{displayContent(this.state.lang, j++, 'modifications')}</ModalHeader>
						<ModalBody>
							<label className="col-form-label options-margin">{displayContent(this.state.lang, j++, 'modifications')}</label>
							<input onChange={this.onChangePassword} type="password" className="form-control" id="recipient-name"/> <br/>
							<label className="col-form-label options-margin">{displayContent(this.state.lang, j++, 'modifications')}</label>
							<input onChange={this.onChangeNewPassword} type="password" className="form-control" id="recipient-name"/> <br/>
							{
								this.state.passwordError !== '' ? <Alert color="danger">{this.state.passwordError}</Alert> : null
							}
							<label className="col-form-label options-margin">{displayContent(this.state.lang, j++, 'modifications')}</label>
							{
								this.state.badPassword ? <input onChange={this.onChangeConfirmPassword} type="password" className="form-control border border-danger" id="recipient-name"/> : <input onChange={this.onChangeConfirmPassword} type="password" className="form-control" id="recipient-name"/>
							}
							<br/>
							{
								this.state.requestPasswordSent ? <img src={loading} alt="loading" className="body-image"/> : null
							}
						</ModalBody>
						<ModalFooter>
							<button className="btn btn-primary" onClick={this.updatePassword}>{displayContent(this.state.lang, j++, 'modifications')}</button>
							<button className="btn btn-danger" onClick={this.toggleModalPassword}>{displayContent(this.state.lang, j++, 'modifications')}</button>
						</ModalFooter>
					</Modal>
					{
						this.passwordAlert()
					}
				    <div className="row txt-align">
						<button className="col-2 btn btn-primary options-margin" onClick={this.getAccountData}>{displayContent(this.state.lang, i++, 'profile')}</button>
						<button className="col-2 btn btn-danger options-margin" onClick={this.toggleModalDelete}>{displayContent(this.state.lang, i, 'profile')}</button>
						<Modal isOpen={this.state.deleteModal} size="lg" toggle={this.toggleModalDelete} centered={true}>
							<ModalHeader>{displayContent(this.state.lang, i++, 'profile')}</ModalHeader>
							<ModalBody centered={true} className="txt-align">
								<label className="col-form-label button-footerP txt-align">{displayContent(this.state.lang, i++, 'profile')}</label> <br/>
								<button className="btn btn-primary options-margin" onClick={this.deleteAccount}>{displayContent(this.state.lang, i++, 'profile')}</button>
								<button className="btn btn-danger options-margin" onClick={this.toggleModalDelete}>{displayContent(this.state.lang, i++, 'profile')}</button>
							</ModalBody>
						</Modal>
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
