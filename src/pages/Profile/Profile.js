import React, { Component } from 'react';
import '../../styles/bootstrap.css';

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
			const { base: { language, logged, newsletter, lastname, firstname, token } } = this.props;
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

		}).catch(err => {

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

		}).catch(err => {

		})
	}

	deleteAccount() {
		axios.post('/delete_account', '',{
			headers: {
				'x-access-token': this.state.token
			}
		}).then(response => {

		}).catch(err => {

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
				    <h4 className="name-font">
					    {displayContent(this.state.lang, i++, 'profile')}
				    </h4> <br/>
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