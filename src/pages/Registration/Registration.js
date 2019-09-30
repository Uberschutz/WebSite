import React, {Component} from "react";
import '../../styles/bootstrap.css';
import '../../styles/Connection.css';

import axios from "axios";
import {displayContent} from "../../utils/translationDisplay";

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            passwd: '',
            alphaName: false,
            alphaSurname: false,
            lang: "fr"
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

    static isAlpha(char) {
        const re = /^[a-zA-Z]+$/g;
        return re.test(char);
    }

    onChangeName(name) {
        if (name && !Registration.isAlpha(name)) {
            this.setState({alphaName: true});
        } else {
            this.setState({alphaName: false});
        }
        this.setState({name: name});
    }

    onChangeSurname(surname) {
        if (surname && !Registration.isAlpha(surname)) {
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
        this.setState({passwd: pass});
    }

    register() {
        if (this.state.email !== '' && this.state.passwd !== '' && this.state.name !== '') {
            axios.post('/register', {
                email: this.state.email,
                passwd: this.state.passwd,
                name: this.state.name
            }).then(response => console.log(response)).catch(err => console.log(err));
        } else {

        }
    }

    render() {
        let i = 0;
        return (
            <div className="col">
                <br/>
                <div className="card text-white bg-dark box-center">
                    <div className="card-body bg-dark item-align text-align">
                        <h5 className="card-title text-align">
                            {displayContent(this.state.lang, i++, 'registration')}
                        </h5>
                        <p className="card-text">
                            {displayContent(this.state.lang, i++, 'registration')}
                        </p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            {this.state.alphaName ? <input value={this.state.name} onChange={(name) => this.onChangeName(name.target.value)} type="text" className="form-control form-box-error" aria-label="Nom"/> :
                                <input value={this.state.name} onChange={(name) => this.onChangeName(name.target.value)} type="text" className="form-control" aria-label="Nom"/>}
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            {this.state.alphaSurname ? <input value={this.state.value} onChange={(surname) => this.onChangeSurname(surname.target.value)} type="text" className="form-control form-box-error" aria-label="Prénom"/> :
                                <input value={this.state.value} onChange={(surname) => this.onChangeSurname(surname.target.value)} type="text" className="form-control" aria-label="Prénom"/>}
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input value={this.state.email} onChange={(email) => this.onChangeEmail(email.target.value)} type="text" className="form-control" aria-label="Email"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">{displayContent(this.state.lang, i++, 'registration')}</span>
                            </div>
                            <input value={this.state.password} onChange={(password) => this.onChangePass(password.target.value)} type="password" className="form-control" aria-label="Email"/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.register()}>{displayContent(this.state.lang, i++, 'registration')}</button>
                        <br/>
                        {this.state.alphaSurname || this.state.alphaName ?
                            <span className="address text-danger">{displayContent(this.state.lang, i, 'registration')}</span> : null}
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default Registration;