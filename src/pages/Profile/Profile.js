import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Profile.css';

import { Icon } from 'antd';

import {displayContent} from '../../utils/translationDisplay';
import Unauthorized from "../Unauthorized";

import axios from 'axios';

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
			token: null
		}
	}

	componentDidMount() {
		if (this.props.base) {
			const { base: { language, logged, newsletter, email, lastname, firstname, token } } = this.props;
			axios.get('/get_subscription', {
				headers: {
					'x-access-token': token
				}
			}).then(response => {
				this.setState({
					lang: language,
					logged : logged,
					token,
					newsletter,
					email,
					lastname,
					firstname,
					subscription: response.data.subscription,
					subscribed: response.data.subscribed
				});
			}).catch(err => {
				console.log(err);
				this.setState({
					lang: language,
					logged : logged,
					token,
					newsletter,
					email,
					lastname,
					firstname
				});
			})
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base !== prevProps.base && this.setState({lang: this.props.base.language, logged: this.props.base.logged}, () => console.log('re'));
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

	subscribe() {
		axios.post('/subscribe', {
			subscription: this.state.subscription
		},{
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {

		}).catch(err => {

		})
	}

	unsubscribe() {
		axios.post('/unsubscribe', '',{
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {

		}).catch(err => {

		})
	}

	getAccountData() {
		axios.get('/gdpr', {
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {

		}).catch(err => {

		})
	}

    render() {
		if (this.state.logged) {
		    let i = 0;
		    return (
			    <div className="description-txt">
					<div className="row button-footerP">
						<h4 className="name-font col-sm-auto">
							{displayContent(this.state.lang, i++, 'profile')}
						</h4>
						<div className="input-group input-group-sm col-sm-2">
							<input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
							<button className="btn btn-primary btn-sm" onClick={() => this.props.changeFirstName()}>OK</button>
						</div> <br/>
					</div>
					<div className="row button-footerP">
						<h5 className="name-font col-sm-auto">
							{displayContent(this.state.lang, i++, 'profile')}
						</h5>
						<div className="input-group input-group-sm col-sm-2">
							<input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
							<button className="btn btn-primary btn-sm" onClick={() => this.props.changeLastName()}>OK</button>
						</div><br/>
					</div>
				    <h6>
					    {displayContent(this.state.lang, i++, 'profile')}<br/><br/>
					    {displayContent(this.state.lang, i++, 'profile')}<br/><br/>
					    {displayContent(this.state.lang, i++, 'profile')}<br/>
				    </h6> <br/>
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
						<button className="col-2 btn btn-primary button-footerP" onClick={() => this.props.getAccountData()}>{displayContent(this.state.lang, i++, 'profile')}</button>
						<button className="col-2 btn btn-danger button-footerP" onClick={() => this.props.deleteAccount()}>{displayContent(this.state.lang, i++, 'profile')}</button>
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