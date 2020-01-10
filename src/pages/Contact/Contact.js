import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Contact.css';

import {Icon} from 'antd';
import { Alert } from 'reactstrap';
import { displayContent } from '../../utils/translationDisplay';
import axios from 'axios';

import newsletter from '../../assets/icons8-email-100.png';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
            connected: false,
            subscribed: false
        };
    }

	componentDidMount() {
    	if (this.props.base) {
		    const {base: {language, logged, subscribed, username, email}} = this.props;
		    console.log(language, this.state.lang, 'kek')
            this.setState({
			    lang: language,
                connected: logged,
                subscribed: subscribed,
                name: username,
                email: email
			})
	    }
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base !== prevProps.base && this.setState({lang: this.props.base.language, connected: this.props.base.logged}, () => console.log('re'));
	}

    redirectProfile() {
        this.props.history.push("/Profile");
    }

    updateNewsletter(state) {
        this.props.setNewsletter(state);
    }

    render() {
        let i = 0;
        return (
            <div className="form-align">
                <div> <br/>
                <h9 className="h9-font">
                    {displayContent(this.state.lang, i++, 'contact')}
                </h9> <br/> <br/>
                    <div className="description-txt">
                        <h6 className="title-bold">
                            {displayContent(this.state.lang, i++, 'contact')}
                        </h6>
                            <h7>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i++, 'contact')}
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                {displayContent(this.state.lang, i++, 'contact')}
                            </h6>
                            <h7>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i++, 'contact')}
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                {displayContent(this.state.lang, i++, 'contact')}
                            </h6>
                            <h7>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i++, 'contact')}<br/>
                                {displayContent(this.state.lang, i, 'contact')}
                            </h7> <br/>
                        <br/>
                    </div>
                </div>
                <Faq lang={this.state.lang}/>
                <Form lang={this.state.lang} connected={this.state.connected} subscribed={this.state.subscribed} redirectProfile={this.redirectProfile.bind(this)} name={this.state.name} email={this.state.email} updateNewsletter={this.updateNewsletter.bind(this)}/>
            </div>
        )
    }
}

class Faq extends Component {
    render() {
        let i = 0;
        return (
            <div className="form-align uber-color2">
                <h4 className="h9-font">
                    <br/>
                    {displayContent(this.props.lang, i++,'faq')}
                </h4>
                <div className="uber-color2 description-txt">
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7> ?
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>{displayContent(this.props.lang, i++,'faq')}<h7 className="address">uberschutz_2021@labeip.epitech.eu</h7>{displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7> ?
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>{displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>{displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}.</h7> <br/>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7> <br/>
                        {displayContent(this.props.lang, i++,'faq')}<br/>
                        {displayContent(this.props.lang, i,'faq')}
                    </h7> <br/> <br/>
                </div>
            </div>
        )
    }
}

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	email: '',
	        name: '',
	        nameError: '',
	        emailError: false,
            emailSent: false,
	        statusErr: false,
	        status: '',
            subscribed: false
        }
    }

	_handleKeyPressed(e) {
		if (e.key === 'Enter') {
			this.registerNews();
		}
	}

    onChangeEmail(email) {
	    if (email !== '' && this.state.emailError) {
		    this.setState({emailError: false});
	    }
    	this.setState({email});
    }

    onChangeName(name) {
    	if (name !== '' && this.state.nameError) {
    		this.setState({nameError: false});
	    }
    	this.setState({name});
    }

    onChangeSent() {
        if (this.state.emailError === false) {
            this.setState({emailSent: true, status: 'Vous êtes maintenant inscrit à la newsletter, merci !', statusErr: false}, () => {
                setTimeout(() => {this.setState({emailSent: false})}, 10000);
            });
        }
    }

    onSubscribeFailure(error) {
    	this.setState({emailSent: true, status: error.response && error.response.data ? `An error occurred: ${error.response.data}` : 'An unknown error occurred', statusErr: true}, () => {
		    setTimeout(() => {this.setState({emailSent: false})}, 10000);
	    });
    }

    registerNews() {
    	if (this.state.name !== '' && this.state.email !== '') {
		    axios.post('/subscribe_newsletter', {
			    email: this.state.email,
			    name: this.state.name
		    }).then(response => { console.log(response);
                this.onChangeSent()}).catch(err => {console.log(err); this.onSubscribeFailure(err)})
	    } else {
    		if (this.state.name === '') {
    			this.setState({nameError: true});
		    }
    		if (this.state.email === '') {
    			this.setState({emailError: true});
		    }
	    }
    }

    subscribe() {
        if (this.props.name !== '' && this.props.email !== '') {
            axios.post('/subscribe_newsletter', {
                email: this.props.email,
                name: this.props.name
            }).then(response => { console.log(response);
            this.setState({subscribed: true});
            this.onChangeSent();
            this.props.updateNewsletter(true)}).catch(err => {console.log(err); this.onSubscribeFailure(err)})
        }
    }

    render() {
        let i = 0;
        if (!this.props.connected) {
            return (
                <div>
                    <br/>
                    <h9 className="h9-font">
                        {displayContent(this.props.lang, i++,'form')}
                    </h9><br/>
                    <h11>
                        {displayContent(this.props.lang, i++,'form')}
                    </h11><br/>
                    <h11>
                        {displayContent(this.props.lang, i++,'form')}<h11 className="address">
                        uberschutz_2021@labeip.epitech.eu</h11>
                    </h11>
                    <form><br/>
                        <div className="form-group">
                            <div className="form-group form-align">
                                <label>{displayContent(this.props.lang, i,'form')}</label>
                                {
                                    this.state.nameError ?
                                        <input type="text" onChange={(name) => this.onChangeName(name.target.value)} className="form-control form-box form-box-error" placeholder={displayContent(this.props.lang, i++,'form')} onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
                                        :
                                        <input type="text" onChange={(name) => this.onChangeName(name.target.value)} className="form-control form-box" placeholder={displayContent(this.props.lang, i++,'form')} onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
                                }
                            </div>
                            <label>{displayContent(this.props.lang, i,'form')}</label>
                            {
                                this.state.emailError ?
                                    <input type="email" className="form-control form-box form-box-error" aria-describedby="emailHelp" placeholder={displayContent(this.props.lang, i++,'form')} value={this.state.email} onChange={(email) => this.onChangeEmail(email.target.value)} onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
                                    :
                                    <input type="email" className="form-control form-box" aria-describedby="emailHelp" placeholder={displayContent(this.props.lang, i++,'form')} value={this.state.email} onChange={(email) => this.onChangeEmail(email.target.value)} onKeyPress={(event) => {this._handleKeyPressed(event)}}/>
                            }
                            <small id="emailHelp" className="form-text text-muted col-sm-9">
                                {displayContent(this.props.lang, i++,'form')}
                            </small>
                        </div>
                        <button type="button" className="btn btn-primary button-footer" onClick={() => this.registerNews()}>{displayContent(this.props.lang, i,'form')}</button>
                    </form>
                    {
                        this.state.emailSent ?
                            <Alert color={this.state.statusErr ? "danger" : "success"}> {this.state.status}</Alert>
                            : null
                    }
                </div>
            )
        } else if (this.state.subscribed === true) {
            return (
                <div className="button-footer">
                    <span className="question">{displayContent(this.props.lang, 9,'form')}</span><br/>
                    <span>{displayContent(this.props.lang, 10,'form')}</span>
                    <button className="btn btn-info button-footer" onClick={() => this.props.redirectProfile()}>{displayContent(this.props.lang, 11,'form')}</button>
                </div>
            )
        } else if (this.props.connected && !this.props.subscribed) {
            return (
                <div className="button-footer">
                    <h5 className="button-footer title-bold">
                        {displayContent(this.props.lang, 7,'form')}
                    </h5>
                    <input type="radio" onClick={() => this.subscribe()} aria-label="Radio button for following option"/>
                    <span>{displayContent(this.props.lang, 8,'form')}</span> <br/>
                    <img className="button-footer" src={newsletter} alt="newsletter"/>
                </div>
            )
        } else {
	        return (
		        <div className="button-footer">
			        <span className="question">{displayContent(this.props.lang, 9,'form')}</span><br/>
			        <span>{displayContent(this.props.lang, 10,'form')}</span>
			        <button className="btn btn-info button-footer" onClick={() => this.props.redirectProfile()}>{displayContent(this.props.lang, 11,'form')}</button>
		        </div>
	        )
        }
    }
}

export default Contact;