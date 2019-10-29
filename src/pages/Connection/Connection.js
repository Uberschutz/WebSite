import React, { Component } from 'react';
import '../../styles/bootstrap.css';
import '../../styles/Connection.css';

import { Link } from 'react-router-dom';
import { displayContent } from '../../utils/translationDisplay';
import axios from 'axios';

class Connection extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	name: '',
	        surname: '',
	        email: '',
	        password: '',
	        alphaName: false,
	        alphaSurname: false,
	        lang: 'fr'
        };
    }

	componentDidMount() {
		if (this.props.base) {
			const { base: { language } } = this.props;
			console.log(language, this.state.lang, 'kek')
			if (this.state.lang !== language) {
				this.setState({
					lang: language
				})
			}
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(prevProps, this.props);
		this.props.base.language !== prevProps.base.language && this.setState({lang: this.props.base.language}, () => console.log('re'));
	}

    static isAlpha(char) {
        const re = /^[a-zA-Z]+$/g;
        return re.test(char);
    }

    onChangeName(name) {
		if (name && !Connection.isAlpha(name)) {
			this.setState({alphaName: true});
		} else {
			this.setState({alphaName: false});
		}
	    this.setState({name: name});
    }

    onChangeSurname(surname) {
		if (surname && !Connection.isAlpha(surname)) {
			this.setState({alphaSurname: true});
		} else {
			this.setState({alphaSurname: false});
		}
	    this.setState({surname: surname});
    }

	onChangeEmail(email) {
		this.setState({email: email});
	}

	onChangePass(pass) {
		this.setState({password: pass});
	}

	connect() {
		if (this.state.email && this.state.email !== '' && this.state.password !== '') {
		    axios.post('/connect', {
		        email: this.state.email,
                passwd: this.state.password
            }).then(response => {
                console.log(response);
                this.props.setLogged(true);
                this.props.setUser(this.state.email, null, response.data);
                this.props.history.push('/');
            }).catch(err => {
                console.log(err);
            });
		}
	}

    render() {
	    let i = 0;
        return (
            <div>
                <br/>
                <div className="card text-white bg-dark box-center">
                    <div className="card-body bg-dark item-align text-align">
                        <h5 className="card-title text-align">
                            {displayContent(this.state.lang, i++, 'connexion')}
                        </h5>
                        <p className="card-text">
                            {displayContent(this.state.lang, i++, 'connexion')}
                        </p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input value={this.state.email} onChange={(email) => this.onChangeEmail(email.target.value)} type="text" className="form-control" aria-label="Email"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'connexion')}</span>
                            </div>
                            <input value={this.state.password} onChange={(password) => this.onChangePass(password.target.value)} type="password" className="form-control" aria-label="Email"/>
                        </div>
                                {/*<Link to ='/'>*/}
                                <button onClick={() => this.connect()} type="button" className="btn btn-primary">{displayContent(this.state.lang, i++, 'connexion')}</button>
                                {/*</Link>*/}
                    </div>
                </div>
                <br/>
                <span>
                    {displayContent(this.state.lang, i++, 'connexion')}
                </span> <br/>
                <Link to={'/Registration'}>
                    <button type="button" className="btn btn-primary">{displayContent(this.state.lang, i++, 'connexion')}</button>
                </Link>
            </div>
        )
    }
}

export default Connection;