import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Contact.css';

import Icon from 'antd/lib/icon/index';
import Alert from 'reactstrap/lib/Alert';
import {displayContent, displayHttpMessages} from '../../utils/translationDisplay';
import axios from 'axios';
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";

import ReactGA from 'react-ga';

import newsletter from '../../assets/icons8-email-100.png';
import loading from '../../assets/Spinner-1s-70px.gif';

const Link = require("react-router-dom").Link;

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'fr',
            connected: false,
            subscribed: false,
            email: '',
            lastname: '',
        };

	    this.redirectProfile = this.redirectProfile.bind(this);
    }

	componentDidMount() {
		if (process.env.REACT_APP_ANALYTICS === 'true') {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
    	if (this.props.base) {
		    const {base: {language, logged}} = this.props;
		    // console.log(language, this.state.lang, 'kek');
            this.setState({
                lang: language,
                connected: logged,
            }, () =>
                axios.get('/get_auth_user')
	                .then(response => {
                    if (response && response.data) {
                        this.setState({
                            subscribed: response.data.newsletter,
                            lastname: response.data.lastname,
                            email: response.data.email
                        });
                    }
                }).catch(err => {
                    console.log(err);
                })
            );
	    }
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base !== prevProps.base && this.setState({lang: this.props.base.language, connected: this.props.base.logged}, () => console.log('re'));
	}

    redirectProfile() {
        this.props.history.push("/Profile");
    }

    // updateNewsletter(state) {
    //     this.props.setNewsletter(state);
    // }

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
                <Form lang={this.state.lang} connected={this.state.connected} subscribed={this.state.subscribed} redirectProfile={this.redirectProfile} name={this.state.lastname} email={this.state.email}/>
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
                        {displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
                    <h6 className="question">
                        <Icon type="question-circle" theme="twoTone" className="icon-size"/> {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7> ?
                    </h6>
                    <h7>
                        {displayContent(this.props.lang, i++,'faq')}<h7 className="address">{displayContent(this.props.lang, i++,'faq')}</h7>{displayContent(this.props.lang, i++,'faq')}
                    </h7> <br/><br/>
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
            subscribed: false,
            isChecked: false,
            errorChecked: '',
            dataModal: false
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this._handleKeyPressed = this._handleKeyPressed.bind(this);
        this.registerNews = this.registerNews.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.collectAcceptation = this.collectAcceptation.bind(this);
        this.toggleModalData = this.toggleModalData.bind(this);
    }

	_handleKeyPressed(e) {
		if (e.key === 'Enter') {
			this.registerNews();
		}
	}

    onChangeEmail(email) {
	    if (email && email.target.value !== '' && this.state.emailError) {
		    this.setState({emailError: false});
	    }
    	this.setState({email: email.target.value});
    }

    onChangeName(name) {
    	if (name && name.target.value !== '' && this.state.nameError) {
    		this.setState({nameError: false});
	    }
    	this.setState({name: name.target.value});
    }

    onChangeSent(response) {
        if (this.state.emailError === false) {
            this.setState({emailSent: true, status: this.props.lang === "en" ? response.data : displayHttpMessages(this.props.lang, response.status, response.data), statusErr: false}, this.hideAlert);
        }
    }

    onSubscribeFailure(error) {
    	this.setState({emailSent: true, status: this.props.lang === "en" ? error.response.data : displayHttpMessages(this.props.lang, error.response.status, error.response.data), statusErr: true}, this.hideAlert);
    }

    hideAlert() {
	    setTimeout(() => {this.setState({emailSent: false})}, 10 * 1000);
    }

    registerNews() {
    	if (this.state.name !== '' && this.state.email !== '') {
            if (this.state.isChecked) {
                axios.post('/subscribe_newsletter', {
                    email: this.state.email,
                    name: this.state.name
                }).then(response => {
                    console.log(response);
                    this.onChangeSent(response)
                }).catch(err => {
                    console.log(err);
                    this.onSubscribeFailure(err)
                })
            } else {
                this.setState({
                    errorChecked: displayContent(this.props.lang, 3, 'error')
                });
            }
        } else {
    		if (this.state.name === '') {
    			this.setState({nameError: true});
		    }
    		if (this.state.email === '') {
    			this.setState({emailError: true});
		    }
	    }
    }

    collectAcceptation() {
        this.setState({isChecked: !this.state.isChecked});
    }

    subscribe() {
        if (this.props.connected && this.props.name !== '' && this.props.email !== '') {
            axios.post('/subscribe_newsletter', {
                email: this.props.email,
                name: this.props.name
            }).then(response => {
                console.log(response.data);
                this.onChangeSent(response);
                setTimeout(() => {
                    this.setState({subscribed: true});
                    }, 3 * 1000);
                    // this.props.updateNewsletter(true)
                }).catch(err => {
                    console.log(err); this.onSubscribeFailure(err)
                });
        }
    }

    toggleModalData() {
        if (this.state.dataModal) {
            this.setState({},
                () => this.setState({dataModal: !this.state.dataModal}));
        } else {
            this.setState({dataModal: !this.state.dataModal});
        }
    }

    render() {
        let i = 0;
        let j = 0;
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
                        uberschutz.epitech@gmail.com</h11>
                    </h11>
                    <form><br/>
                        <div className="form-group">
                            <div className="form-group form-align">
                                <label>{displayContent(this.props.lang, i,'form')}</label>
                                {
                                    this.state.nameError ?
                                        <input type="text" onChange={this.onChangeName} className="form-control form-box form-box-error" placeholder={displayContent(this.props.lang, i++,'form')} onKeyPress={this._handleKeyPressed}/>
                                        :
                                        <input type="text" onChange={this.onChangeName} className="form-control form-box" placeholder={displayContent(this.props.lang, i++,'form')} onKeyPress={this._handleKeyPressed}/>
                                }
                            </div>
                            <label>{displayContent(this.props.lang, i,'form')}</label>
                            {
                                this.state.emailError ?
                                    <input type="email" className="form-control form-box form-box-error" aria-describedby="emailHelp" placeholder={displayContent(this.props.lang, i++,'form')} value={this.state.email} onChange={this.onChangeEmail} onKeyPress={this._handleKeyPressed}/>
                                    :
                                    <input type="email" className="form-control form-box" aria-describedby="emailHelp" placeholder={displayContent(this.props.lang, i++,'form')} value={this.state.email} onChange={this.onChangeEmail} onKeyPress={this._handleKeyPressed}/>
                            }
                            <small id="emailHelp" className="form-text text-muted col-sm-9">
                                {displayContent(this.props.lang, i++,'form')}
                            </small>
                            <input className='button-footer' type="checkbox" checked={this.state.isChecked} onChange={this.collectAcceptation}/>
                            <span>{displayContent(this.props.lang, i++,'form')}</span>
                        </div>
                        {
                            this.state.emailSent ?
                                <img src={loading} alt="loading"/> : <button type="button" className="btn btn-primary button-footer" onClick={this.registerNews}>{displayContent(this.props.lang, i,'form')}</button>
                        }
                        <button type="button" className="btn btn-dark button-footer" onClick={this.toggleModalData}>{displayContent(this.props.lang, ++i,'form')}</button>

                        <Modal isOpen={this.state.dataModal} size="lg" toggle={this.toggleModalData} centered={true}>
                            <ModalHeader>{displayContent(this.props.lang, j++,'dataCollect')}</ModalHeader>
                            <ModalBody>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')} Überschutz, uberschutz.epitech@gmail.com {displayContent(this.props.lang, j++,'dataCollect')}</span><br/>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')}</span> <br/>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')} Überschutz.</span> <br/>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')}</span> <br/>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')}</span> <br/>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')}</span> <br/>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')} <a href="https://cnil.fr">cnil.fr</a> {displayContent(this.props.lang, j++,'dataCollect')}</span> <br/>
                                <span>{displayContent(this.props.lang, j++,'dataCollect')} test.controleparental.donnees@gmail.com</span>
                            </ModalBody>
                            <ModalFooter>
                                <button className="btn btn-danger" onClick={this.toggleModalData}>{displayContent(this.props.lang, ++i,'form')}</button>
                            </ModalFooter>
                        </Modal>

                        <br/>
                    </form>
                    {
                        this.state.emailSent ?
                            <Alert color={this.state.statusErr ? "danger" : "success"}> {this.state.status}</Alert>
                            : null
                    }
                    {
                        this.state.errorChecked ? <Alert color="danger">{this.state.errorChecked}</Alert> : null
                    }
                </div>
            )
        } else if (this.state.subscribed === true) {
            return (
                <div className="button-footer">
                    <span className="question">{displayContent(this.props.lang, 12,'form')}</span><br/>
                    <span>{displayContent(this.props.lang, 13,'form')}</span>
                    <button className="btn btn-info button-footer" onClick={this.props.redirectProfile}>{displayContent(this.props.lang, 14,'form')}</button>
                </div>
            )
        } else if (this.props.connected && !this.props.subscribed) {
            return (
                <div className="button-footer">
                    <h5 className="button-footer title-bold">
                        {displayContent(this.props.lang, 10,'form')}
                    </h5>
	                {
	                	this.state.emailSent ?  <img src={loading} alt="loading"/>
			                :
			                <input type="radio" onClick={this.subscribe} aria-label="Radio button for following option"/>
	                }
                    <span>{displayContent(this.props.lang, 11,'form')}</span> <br/>
                    <img className="button-footer" src={newsletter} alt="newsletter"/>
	                {
		                this.state.emailSent ?
			                <Alert color={this.state.statusErr ? "danger" : "success"}> {this.state.status}</Alert>
			                : null
	                }
                </div>
            )
        } else {
	        return (
		        <div className="button-footer">
			        <span className="question">{displayContent(this.props.lang, 12,'form')}</span><br/>
			        <span>{displayContent(this.props.lang, 13,'form')}</span>
			        <button className="btn btn-info button-footer" onClick={this.props.redirectProfile}>{displayContent(this.props.lang, 14,'form')}</button>
		        </div>
	        )
        }
    }
}

export default Contact;
