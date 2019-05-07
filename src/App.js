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
  render() {
    return (
        <div>
          <Router>
          <Header/>
          <Switch>
            <Route path={'/'} exact strict component={HomePage}/>
            <Route path={'/Connexion'} component={Connexion}/>
            <Route path={'/Contact+FAQ'} component={Contact}/>
            <Route path={'/Profil'} component={Profil}/>
            <Route path={'/Parametres'} component={Parametres}/>
          </Switch>
          <Footer/>
          </Router>
        </div>
    );
  }
}

export default App;
