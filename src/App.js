import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/App.css';

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Connexion from "./pages/Connexion";
import {Contact} from "./pages/Contact";
import Profil from "./pages/Profil";
import Parametres from "./pages/Parametres";

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
        <div>
          <Router>
          <Header setLanguage={this.setLanguage}/>
          <Switch>
            <Route path={'/'} exact strict component={() => <HomePage lang={this.state.lang}/>}/>
            <Route path={'/Connexion'} component={() => <Connexion lang={this.state.lang}/>}/>
            <Route path={'/Contact+FAQ'} component={() => <Contact lang={this.state.lang}/>}/>
            <Route path={'/Profil'} component={() => <Profil lang={this.state.lang}/>}/>
            <Route path={'/Parametres'} component={() => <Parametres lang={this.state.lang}/>}/>
          </Switch>
          <Footer/>
          </Router>
        </div>
    );
  }
}

export default App;
