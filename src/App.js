import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/App.css';

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Connection from "./pages/Connection";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Parameters from "./pages/Parameters";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lang: 'fr',
			logged: false
		};
		this.setLanguage = this.setLanguage.bind(this);
		this.setLogged = this.setLogged.bind(this);
	}

	setLogged() {
		this.setState({logged: !this.state.logged});
	}

	setLanguage(lang) {
		this.setState({
			lang: lang
		});
	}

	render() {
    return (
        <div className="App">
            <Router>
                <Header setLanguage={this.setLanguage} lang={this.state.lang}/>
                <Switch>
                    <Route path={'/'} exact strict component={() => <HomePage lang={this.state.lang}/>}/>
                    <Route path={'/Connection'} exact component={() => <Connection lang={this.state.lang}/>}/>
                    <Route path={'/Contact+FAQ'} exact component={() => <Contact lang={this.state.lang}/>}/>
                    <Route path={'/Profile'} exact component={() => <Profile lang={this.state.lang}/>} logged={this.state.logged}/>
                    <Route path={'/Parameters'} exact component={() => <Parameters lang={this.state.lang} logged={this.state.logged}/>}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
	}
}
export default App;
