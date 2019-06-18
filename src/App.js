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
			lang: 'fr'
		};
		this.setLanguage = this.setLanguage.bind(this);
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
                    <Route path={'/Connection'} component={() => <Connection lang={this.state.lang}/>}/>
                    <Route path={'/Contact+FAQ'} component={() => <Contact lang={this.state.lang}/>}/>
                    <Route path={'/Profile'} component={() => <Profile lang={this.state.lang}/>}/>
                    <Route path={'/Parameters'} component={() => <Parameters lang={this.state.lang}/>}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
	}
}
export default App;
